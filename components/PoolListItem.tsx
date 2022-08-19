import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import useWalletStore from '../stores/WalletStore'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import CustomButton from './CustomButton'
import tokenService from '../services/token.service'
import swapService from '../services/swap.service'
import localService from '../services/local.service'
import STORAGE_KEYS from '../constants/storageKey'
import swapNextService from '../services/swap.next.service'
import { delay } from '../utils/delay'

export default function PoolListItem({
  deadlineMinute,
  slipageTol,
  token,
}: {
  deadlineMinute: number
  slipageTol: number
  token: { symbol: string; token1: string; token2: string }
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [removeOpen, setRemoveOpen] = useState(false)
  const [percentRemove, setPercentRemove] = useState('25')
  const [approveLoad, setApproveLoad] = useState(false)
  const [removeLoad, setRemoveLoad] = useState(false)

  const walletType = useWalletStore((state) => state.walletType)
  const wallet = useWalletStore((state) => state.address)
  const allowances = useWalletStore((state) => state.walletAllowances)
  const liquidities = useWalletStore((state) => state.walletLiquidities)
  const loadAllowances = useWalletStore((state) => state.loadWalletAllowances)
  const loadBalances = useWalletStore((state) => state.loadWalletBalances)
  const loadLiquidiities = useWalletStore(
    (state) => state.loadWalletLiquidiities,
  )
  const [poolData, setPoolData] = useState([0, 0, 0])

  const getPoolData = async () => {
    const [token1, token2, share, r1, r2] = await swapService.getPooledToken(
      token.symbol,
      token.token1,
      token.token2,
      +liquidities[token.symbol],
    )
    setPoolData([token1, token2, share, r1, r2])
  }

  useEffect(() => {
    if (+liquidities[token.symbol]) {
      getPoolData()
    }
  }, [liquidities])

  const handleRemovePool = async () => {
    setRemoveLoad(true)
    const _percentRemove = Math.min(+percentRemove, 99.99999999999999)
    const deadline =
      Math.floor(new Date().getTime() / 1000) + deadlineMinute * 60
    const liquiditiesRemove =
      (+liquidities[token.symbol] * _percentRemove) / 100
    const minAmountA =
      +((_percentRemove / 100) * poolData[0]) -
      (+((_percentRemove / 100) * poolData[0]) * slipageTol) / 100
    const minAmountB =
      +((_percentRemove / 100) * poolData[1]) -
      (+((_percentRemove / 100) * poolData[1]) * slipageTol) / 100

    try {
      if (walletType === 'bitkub-next') {
        const accessToken = localService.getItem(STORAGE_KEYS.BK_ACCESS_TOKEN)
        const tx = await swapNextService.removeLiquidity(
          accessToken,
          token.token1,
          token.token2,
          liquiditiesRemove.toString(),
          minAmountA.toString(),
          minAmountB.toString(),
          wallet,
          deadline,
        )
        await tx.wait()
        await delay(5000)
      } else {
        const tx = await swapService.removeLiquidity(
          token.token1,
          token.token2,
          liquiditiesRemove.toString(),
          minAmountA.toString(),
          minAmountB.toString(),
          wallet,
          deadline,
        )
        await tx.wait()
      }
    } catch (err) {
      console.log(err)
      setRemoveLoad(false)
    }
    await loadBalances()
    await loadLiquidiities()
    setRemoveLoad(false)
  }

  const handleApprove = async (token: string) => {
    setApproveLoad(true)
    try {
      await tokenService.approve(token).then((tx) => tx?.wait())
    } catch (err) {
      setApproveLoad(false)
    }
    loadAllowances()
    setApproveLoad(false)
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'rounded-t-xl' : 'rounded-xl'
        } select-none cursor-pointer w-full p-3 flex justify-between bg-blue-50 h-10 items-center text-blue-400 mt-3`}
      >
        <p>{token.symbol}</p>
        <div className="flex items-center">
          <p>{parseFloat(liquidities[token.symbol] || '0.0').toFixed(5)}</p>
          {isOpen ? (
            <ChevronUpIcon height={20} />
          ) : (
            <ChevronDownIcon height={20} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="w-full rounded-b-xl px-3 py-2 bg-blue-200 text-blue-500">
          <div className="flex items-center justify-between">
            <p>Pooled {token.token1}:</p>
            <p>
              {poolData[0].toFixed(5)} {token.token1}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Pooled {token.token2}:</p>
            <p>
              {poolData[1].toFixed(5)} {token.token2}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Your pool tokens:</p>
            <p>{parseFloat(liquidities[token.symbol] || '0.0').toFixed(5)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Your pool share:</p>
            <p>{poolData[2].toFixed(2)}%</p>
          </div>
          <div className="my-1.5">
            <CustomButton text="Remove" onClick={() => setRemoveOpen(true)} />
          </div>
        </div>
      )}
      <Transition appear show={removeOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setRemoveOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <p className="text-blue-500 font-medium text-xl text-center">
                  Remove Liquidity
                </p>
                <div className="p-3 bg-blue-100 rounded-lg mt-3 border-2 border-blue-400">
                  <p className="text-blue-500 font-medium text-lg">Amount</p>
                  <p className="text-7xl font-medium text-blue-500">
                    {percentRemove}%
                  </p>
                  <input
                    id="default-range"
                    value={percentRemove}
                    onChange={(e) => setPercentRemove(e.target.value)}
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-0"
                  />
                  <div className="flex items-center justify-between space-x-4 mt-3">
                    {[25, 50, 75, 100].map((v, i) => (
                      <div
                        onClick={() => {
                          setPercentRemove(v.toString())
                        }}
                        key={i}
                        className="p-1 bg-blue-200 text-blue-500 px-2 rounded flex-1 text-center hover:bg-opacity-70 cursor-pointer"
                      >
                        {v}%
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <ChevronDownIcon height={40} className="text-blue-500" />
                </div>
                <div className="p-3 px-5 bg-blue-100 rounded-lg text-xl text-blue-500 border-2 border-blue-400 mb-3">
                  <div className="flex items-center justify-between">
                    <p>{((+percentRemove / 100) * poolData[0]).toFixed(6)}</p>
                    <p>{token.token1}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p>{((+percentRemove / 100) * poolData[1]).toFixed(6)}</p>
                    <p>{token.token2}</p>
                  </div>
                </div>
                <div className="flex items-start mb-5 text-blue-500 font-medium justify-between px-1">
                  <p>Price:</p>
                  <div className="flex flex-col items-end">
                    <p>
                      1 {token.token1} ={' '}
                      {(poolData[4] / poolData[3]).toFixed(5)} {token.token2}
                    </p>
                    <p>
                      1 {token.token2} ={' '}
                      {(poolData[3] / poolData[4]).toFixed(5)} {token.token1}
                    </p>
                  </div>
                </div>
                {walletType === 'metamask' && +allowances[token.symbol] <= 0 ? (
                  <CustomButton
                    text={`Approve ${token.symbol}`}
                    disabled={approveLoad}
                    isLoading={approveLoad}
                    onClick={() => handleApprove(token.symbol)}
                  />
                ) : (
                  <CustomButton
                    text="Remove Liquidity"
                    disabled={removeLoad}
                    isLoading={removeLoad}
                    onClick={handleRemovePool}
                  />
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

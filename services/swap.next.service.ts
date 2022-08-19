import STORAGE_KEYS from '../constants/storageKey'
import { TxStatus } from '../enums/TxStatus'
import { BKNextTXResponse } from '../types/bk-next'
import { requestWindow } from '../utils/requestWindow'
import { getCurrentUrl } from '../utils/urlUtil'
import { waitBKTx } from '../utils/waitBKTx'
import bitkubNextService from './bk-next.service'
import localService from './local.service'
import { ADDRESS_LIST } from '../constants/addressList'
import { NAMED_TOKENS } from '../constants/swapTokens'
import { parseEther, parseUnits } from 'ethers/lib/utils'

const getCallbackUrl = () => {
  return `${getCurrentUrl()}/callback`
}

const wrapTx = (
  tx: BKNextTXResponse,
  accessToken: string,
  queueId: string,
) => ({
  ...tx,
  hash: tx.tx,
  wait: () => waitBKTx(accessToken, queueId, TxStatus.SUCCESS),
})

const requestApproval = async (
  accessToken: string,
  contractAddr: string,
  methodName: string,
  methodParams: string[],
) => {
  try {
    const newWindow = window.open(
      'http://localhost:3000/callback-loading',
      '_blank',
      `toolbar=no,
      location=no,
      status=no,
      menubar=no,
      scrollbars=yes,
      resizable=yes,
      width=400px,
      height=600px`,
    )

    const res = await bitkubNextService.createApprovalURL(
      accessToken,
      getCallbackUrl(),
      contractAddr,
      methodName,
      methodParams,
    )

    const queueId = (await requestWindow(
      newWindow as any,
      res.data.approve_url,
      STORAGE_KEYS.TX_QUEUE_ID,
      STORAGE_KEYS.TX_ERROR,
    )) as Promise<string>

    localService.removeItem(STORAGE_KEYS.TX_QUEUE_ID)
    localService.removeItem(STORAGE_KEYS.TX_ERROR)

    return queueId
  } catch (e) {
    throw e
  }
}

const swapExactTokensForTokens = async (
  accessToken: string,
  amountIn: number,
  amountOutMin: number,
  tokenPath: string[],
  to: string,
  deadline: number,
) => {
  try {
    const methodName = 'swapExactTokensForTokens'
    const methodParams = [
      ADDRESS_LIST['SwapRouter'],
      parseUnits(
        amountIn.toString(),
        NAMED_TOKENS[tokenPath[0]].decimals,
      ).toString(),
      parseUnits(
        amountOutMin.toString(),
        NAMED_TOKENS[tokenPath[tokenPath.length - 1]].decimals,
      ).toString(),
      tokenPath.map((token) => ADDRESS_LIST[token]),
      to,
      deadline.toString(),
    ]
    const queueId = await requestApproval(
      accessToken,
      ADDRESS_LIST['FinBroker'],
      methodName,
      methodParams as any,
    )
    const tx = await waitBKTx(accessToken, queueId)
    return wrapTx(tx, accessToken, queueId)
  } catch (e) {
    throw e
  }
}

const removeLiquidity = async (
  accessToken: string,
  tokenA: string,
  tokenB: string,
  liquidity: string,
  amountAMin: string,
  amountBMin: string,
  to: string,
  deadline: number,
) => {
  try {
    const methodName = 'removeLiquidity'
    const methodParams = [
      ADDRESS_LIST['SwapRouter'],
      ADDRESS_LIST[tokenA],
      ADDRESS_LIST[tokenB],
      parseEther(liquidity).toString(),
      parseUnits(
        amountAMin.toString(),
        NAMED_TOKENS[tokenA].decimals,
      ).toString(),
      parseUnits(
        amountBMin.toString(),
        NAMED_TOKENS[tokenB].decimals,
      ).toString(),
      to,
      deadline.toString(),
    ]
    const queueId = await requestApproval(
      accessToken,
      ADDRESS_LIST['FinBroker'],
      methodName,
      methodParams,
    )
    const tx = await waitBKTx(accessToken, queueId)
    return wrapTx(tx, accessToken, queueId)
  } catch (e) {
    throw e
  }
}

const addLiquidity = async (
  accessToken: string,
  tokenA: string,
  tokenB: string,
  amountA: string,
  amountB: string,
  amountAMin: string,
  amountBMin: string,
  to: string,
  deadline: number,
) => {
  try {
    const methodName = 'addLiquidity'
    const methodParams = [
      ADDRESS_LIST['SwapRouter'],
      ADDRESS_LIST[tokenA],
      ADDRESS_LIST[tokenB],
      parseUnits(amountA.toString(), NAMED_TOKENS[tokenA].decimals).toString(),
      parseUnits(amountB.toString(), NAMED_TOKENS[tokenB].decimals).toString(),
      parseUnits(
        amountAMin.toString(),
        NAMED_TOKENS[tokenA].decimals,
      ).toString(),
      parseUnits(
        amountBMin.toString(),
        NAMED_TOKENS[tokenB].decimals,
      ).toString(),
      to,
      deadline.toString(),
    ]
    const queueId = await requestApproval(
      accessToken,
      ADDRESS_LIST['FinBroker'],
      methodName,
      methodParams,
    )
    const tx = await waitBKTx(accessToken, queueId)
    return wrapTx(tx, accessToken, queueId)
  } catch (e) {
    throw e
  }
}

const swapNextService = {
  getCallbackUrl,
  swapExactTokensForTokens,
  addLiquidity,
  removeLiquidity,
}

export default swapNextService

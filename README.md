## Custom Swap Connector

This project is created for the course 977-470 SP T IN SE II (BLOCKCHAIN) 2-2564 final project, taught by Aj. Warodom Werapan.

This DAAP(Decentralize APPlication) allow users to swap/trade and provide liquidity thier erc20 token on any evm chain that are using the uniswap v2 smart contract as thier DEX(Decentralize EXchange) application.

The purpose of this project is to learn all the formula of DEX/AMM(Automated Market Maker) that are used behind the calculation of the world largest decentralize exchange and also to enhance my web3 skill on smart contract call within the uniswap smart contract.

The project now is configered to the Bitkub Chain Mainnet which used all the liquidities and smart contract(swapRouter, swapFactory) from DiamonFinance, to change this setting you only need to edit the addressList.ts constant to any of your desire smart contract address.

Live Demo: [csc.wawa.run](http://csc.wawa.run)

Explanation Video: [youtube.com/watch?v=vYbimjkfEMQ](https://www.youtube.com/watch?v=vYbimjkfEMQ)

## Technologies used in this Project

- TypeScript a typesafe language on top of JavaScript that are used throughout this Project. 
- NextJS a frontend framework on top of ReactJS that are used to build website / user interfaces for this Project.
- Zustand a typescript / reactjs state management library used for global state management throughout the Project.
- TailwindCSS a css styling framework used for styling all the component in this Project.
- Ethers a TS/JS web3 libray used to interact with the smart contract.
- Multicall a third party ethers/smart contract library used to make multiple contract call to get data from smart contract at once.
- Typechain a compiled type code from hardhat smart contract project used for smart contract instance creation.

## Functionalities

- Swap between 2 different erc20 token (swapExactTokensForTokens)
- Swap from native token to erc20 token (swapExactETHForTokens) and reverse
- Add liquidity pool for 2 different erc20 token (addLiquidity)
- Add liquidity pool for native token and erc20 token (addLiquidityETH)
- Display all the amount of liquidity pool that the user provide
- Display all the token balance in user wallet
- Display all the pool and token swap calculation in number for the users (pool share %, min recieved, etc..)

## How to run this Project

First, run the installation command on the project folder:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

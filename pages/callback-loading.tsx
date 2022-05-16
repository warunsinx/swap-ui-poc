import { NextPage } from "next";
import Head from "next/head";
import TxCallbackView from "../views/TxCallbackView";

const FunctionCallbackPage: NextPage = (props: any) => {
  return (
    <>
      <Head>
        <title>Bitkub Next Loading</title>
      </Head>
      <div>
        <TxCallbackView message="loading" />
      </div>
    </>
  );
};

export default FunctionCallbackPage;

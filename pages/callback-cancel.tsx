import { NextPage } from "next";
import Head from "next/head";

import TxCallbackView from "../views/TxCallbackView";

import { useEffect } from "react";

const FunctionCallbackCancel: NextPage = (props: any) => {
  useEffect(() => {
    window.close();
  });
  return (
    <>
      <Head>
        <title>Bitkub Next Cencel</title>
      </Head>
      <div>
        <TxCallbackView message={"cencel"} />
      </div>
    </>
  );
};

export default FunctionCallbackCancel;

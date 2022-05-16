import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import bitkubNextService from "../services/bk-next.service";
import TxCallbackView from "../views/TxCallbackView";
import localService from "../services/local.service";
import STORAGE_KEYS from "../constants/storageKey";

const FunctionCallbackPage: NextPage = (props: any) => {
  const router = useRouter();
  const approvalToken = router.query.approval_token as string;
  const accessToken = localService.getItem(STORAGE_KEYS.BK_ACCESS_TOKEN);

  const queueTransaction = useCallback(async () => {
    // clear result
    try {
      const res = await bitkubNextService.createTxQueueApproval(
        accessToken,
        approvalToken
      );
      localService.setItem(STORAGE_KEYS.TX_QUEUE_ID, res.queue_id);
    } catch (e: any) {
      localService.removeItem(STORAGE_KEYS.TX_QUEUE_ID);
      localService.setItem(STORAGE_KEYS.TX_ERROR, e.response.data);
      console.error(e.response);
    }
    window.close();
  }, [accessToken, approvalToken]);

  useEffect(() => {
    if (accessToken && approvalToken) {
      queueTransaction();
    }
  }, [accessToken, approvalToken, queueTransaction]);

  return (
    <>
      <Head>
        <title>Bitkub Next Function Callback</title>
      </Head>
      <div>
        <TxCallbackView />
      </div>
    </>
  );
};

export default FunctionCallbackPage;

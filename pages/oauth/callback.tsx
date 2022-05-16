import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import STORAGE_KEYS from "../../constants/storageKey";
import bitkubNextService from "../../services/bk-next.service";
import localService from "../../services/local.service";
import OAuthCallbackView from "../../views/OAuthCallbackView";

const OAuthCallbackPage: NextPage = (props: any) => {
  const router = useRouter();
  const code = router.query.code as string;
  const resultKey = STORAGE_KEYS.OAUTH_RESULT;
  const errorKey = STORAGE_KEYS.OAUTH_ERROR;

  const validateCode = useCallback(async () => {
    if (code) {
      try {
        const res = await bitkubNextService.exchangeToken(code);
        console.log(res);
        localService.setItem(resultKey, res);
      } catch (e: any) {
        console.error(e);
        if (e.response && e.response.data) {
          console.error(e.response.data);
          localService.setItem(errorKey, e.response.data);
        } else {
          console.error(e.response);
          localService.setItem(errorKey, "error exchange token");
        }
      }
      window.close();
    }
  }, [code, errorKey, resultKey]);

  useEffect(() => {
    validateCode();
  }, [router, code, validateCode]);

  return (
    <>
      <Head>
        <title>Bitkub Next OAuth Callback</title>
      </Head>
      <div>
        <OAuthCallbackView />
      </div>
    </>
  );
};

export default OAuthCallbackPage;

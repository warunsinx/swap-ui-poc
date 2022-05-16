import bitkubNextService from "../services/bk-next.service";
import { BKNextTXResponse } from "../types/bk-next";
import { TxStatus as Status } from "../enums/TxStatus";

export const waitBKTx = (
  accessToken: string,
  queueId: string,
  ...targetStatus: Status[]
) => {
  return new Promise<BKNextTXResponse>(async (resolve, reject) => {
    const res = await bitkubNextService.checkTxQueue(accessToken, queueId);

    const sucessStatus =
      targetStatus.length > 0
        ? targetStatus
        : [Status.BROADCASTED, Status.SUCCESS];
    const failStatus = [] as any;

    if (sucessStatus.includes(res.status as Status)) {
      resolve(res);
    } else if (failStatus.includes(res.status as Status)) {
      reject(res);
    } else {
      const iv = setInterval(async () => {
        const res = await bitkubNextService.checkTxQueue(accessToken, queueId);
        if (sucessStatus.includes(res.status as Status)) {
          clearInterval(iv);
          resolve(res);
        } else if (failStatus.includes(res.status as Status)) {
          clearInterval(iv);
          reject(res);
        }
      }, 1000);
    }
  });
};

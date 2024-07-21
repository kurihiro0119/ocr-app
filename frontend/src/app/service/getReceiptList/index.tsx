import { handleFailed, handleSucceed, path } from "..";

export type ReceiptSummary = {
  id: string;
  fileName: string;
  createdTime: string;
};

export const getReceiptList = async (): Promise<ReceiptSummary[]> =>
{
  return fetch(path("/receipt/list"), {
    next: { tags: ["receipt_list"] },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
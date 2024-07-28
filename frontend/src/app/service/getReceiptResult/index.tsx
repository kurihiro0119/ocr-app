import { handleFailed, handleSucceed, path } from "..";

export type ReceiptResult = {
  url: string;
  merchantName: string;
  merchantAddress: string;
  merchantPhoneNumber: string;
  transactionDate: string;
  transactionTime: string;
  total: number;
  totalTax: number;
};

export const getReceiptResult = async (id: string): Promise<ReceiptResult> =>
{
  console.log('API_HOST:', process.env.API_HOST);
  const api_path = path(`/receipt/${id}`)
  console.log(api_path)

  return fetch(api_path, {
    next: { tags: ["receipt_result"] },
  })
    .then(handleSucceed)
    .then(parseAnalysisResult)
    .catch(handleFailed);

}

export const parseAnalysisResult = (data: any): ReceiptResult =>
{
  const analysisResult = data.analysisResult.documents[0].fields;
  return {
    url: data.url,
    merchantName: analysisResult.MerchantName?.value || '',
    merchantAddress: analysisResult.MerchantAddress?.value?.streetAddress || '',
    merchantPhoneNumber: analysisResult.MerchantPhoneNumber?.value || '',
    transactionDate: analysisResult.TransactionDate?.value || '',
    transactionTime: analysisResult.TransactionTime?.value || '',
    total: analysisResult.Total?.value || 0,
    totalTax: analysisResult.TotalTax?.value || 0,
  };
};
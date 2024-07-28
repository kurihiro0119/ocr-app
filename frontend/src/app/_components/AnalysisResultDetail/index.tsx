import { getReceiptResult } from "@/app/service/getReceiptResult";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props)
{
  const receiptResult = await getReceiptResult(params.id);
  console.log(receiptResult);

  return (
    <div className="flex flex-wrap justify-between">
      <div className="flex-1 min-w-[300px] max-w-[50%]">
        <img src={receiptResult.url} alt="Receipt Image" className="w-full h-auto" />
      </div>
      <div className="flex-1 min-w-[300px] max-w-[50%] p-4">
        <h1 className="flex-1 min-w-[300px] max-w-[50%] p-4">Receipt</h1>
        <p className="mb-2"><strong>id:</strong>{params.id}</p>
        <p className="mb-2"><strong>merchantName:</strong> {receiptResult.merchantName}</p>
        <p className="mb-2"><strong>merchantAddress:</strong> {receiptResult.merchantAddress}</p>
        <p className="mb-2"><strong>merchantPhoneNumber:</strong> {receiptResult.merchantPhoneNumber}</p>
        <p className="mb-2"><strong>transactionDate:</strong> {receiptResult.transactionDate}</p>
        <p className="mb-2"><strong>transactionTime:</strong> {receiptResult.transactionTime}</p>
        <p className="mb-2"><strong>total:</strong> {receiptResult.total}</p>
        <p className="mb-2"><strong>totalTax:</strong> {receiptResult.totalTax}</p>
      </div>
    </div>
  );
}
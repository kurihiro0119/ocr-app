'use client';

import { useRouter } from "next/navigation";
import { ReceiptSummary } from "../../service/getReceiptList";

const AnalysisResultTable = ({ receiptList }: { receiptList: ReceiptSummary[] }) =>
{
  const router = useRouter();

  const handleRowClick = (id: string) =>
  {
    router.push(`/receipt/${id}`);
  }

  return (
    <table className="table-auto min-w-full text-left whitespace-no-wrap">
      <thead>
        <tr>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">分析日時</th>
          <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">アップロード ファイル</th>
        </tr>
      </thead>
      <tbody>
        {receiptList.map((receipt) => (
          <tr key={receipt.id}
            className='cursor-pointer hover:bg-gray-200'
            onClick={() => handleRowClick(receipt.id)}
          >
            <td className="px-4 py-3">{receipt.createdTime}</td>
            <td className="px-4 py-3">{receipt.fileName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AnalysisResultTable;

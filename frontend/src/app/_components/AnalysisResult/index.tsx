import { getReceiptList } from "../../service/getReceiptList";
import AnalysisResultTable from "../AnalysisResultTable";

const AnalysisResult = async () =>
{
  const receiptList = await getReceiptList();
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <AnalysisResultTable receiptList={receiptList} />
      </div>
    </section>
  );
}

export default AnalysisResult;

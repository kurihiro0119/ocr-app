'use client';

import { useRouter } from "next/navigation";

const LayoutHeader = () => 
{
  const router = useRouter();
  const handleResultClink = () => router.push('/');
  const handleAnalysisClick = () => router.push('/analysis');

  return (
    <header className="text-white	 body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">OCR APP</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:bg-gray-200"
            onClick={() => handleResultClink()}
          >分析結果</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:bg-gray-200"
            onClick={() => handleAnalysisClick()}
          >分析画面</a>
        </nav>
      </div>
    </header>
  )
}

export default LayoutHeader;
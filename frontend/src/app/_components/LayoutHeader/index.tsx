const LayoutHeader = () => 
{
  return (
    <header className="text-gray-600 body-font bg-amber-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">OCR APP</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">分析結果</a>
          <a className="mr-5 hover:text-gray-900">分析画面</a>
        </nav>
      </div>
    </header>
  )
}

export default LayoutHeader;
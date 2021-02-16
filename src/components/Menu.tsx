type Props = {
  handleMenuToggle: () => void
  isMenuOpen: boolean
  onMainScreenChange: (screen: string) => void
}

const Menu = (props: Props) => {

  return (
    <div className="relative z-20">
      <div className={`absolute duration-500 h-screen w-full ${(props.isMenuOpen) ? "" : "hidden"} `} onClick={()=>{props.handleMenuToggle()}}></div>
      <div className={`absolute bg-gray-200 duration-500 flex-col h-screen rounded-r-5xl shadow-2xl w-4/5 ${(props.isMenuOpen) ? "left-0" : "-left-full"}`}>
        <header className="flex justify-center items-center h-1/10 px-4 sticky text-2xl">
          <p>Menu</p>
        </header>
        <button
          onClick={()=>{props.onMainScreenChange("Home"); props.handleMenuToggle()}}
          className="bg-gray-300 flex font-bold items-center justify-center mx-auto py-1 rounded-full text-gray-700 w-3/5"
          >
          <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 mr-2" >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          Home
        </button>
        <button onClick={()=>{props.onMainScreenChange("Play");props.handleMenuToggle()}} className="bg-white border flex h-16 items-center mx-auto mt-3 p-2 rounded-xl shadow w-4/5">
          <span className="flex items-center space-x-4">👦</span>
            <span className="font-semibold text-gray-700">
              John
            </span>
            <span className="text-sm text-gray-500">
              Hello!
            </span>
        </button>
        {/* <button onClick={()=>{props.onMainScreenChange("Play");props.handleMenuToggle()}} className="bg-white border flex items-center mx-auto mt-3 p-2 rounded-xl shadow w-4/5">
          <span className="flex items-center space-x-4">👨</span>
            <span className="font-semibold text-gray-700">
              Steve
            </span>
            <span className="text-sm text-gray-500">
              コンニチハ！
            </span>
        </button> */}
      </div>
    </div>
  )
}

export default Menu;
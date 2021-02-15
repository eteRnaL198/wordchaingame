type Props = {
  isMenuOpen: boolean
  onMenuOpenChange: () => void
  onMainScreenChange: (screen: string) => void
}

const Menu = (props: Props) => {

  return (
    <div className="relative z-20">
      <div className={`absolute duration-500 h-screen w-full ${(props.isMenuOpen) ? "" : "hidden"} `} onClick={()=>{props.onMenuOpenChange()}}></div>
      <div className={`absolute bg-gray-200 duration-500 flex-col h-screen rounded-r-5xl shadow-2xl w-4/5 ${(props.isMenuOpen) ? "left-0" : "-left-full"}`}>
        <header className="flex justify-center items-center h-1/10 px-4 sticky sm:mb-0 text-2xl">
          <p>Menu</p>
        </header>
        <button
          onClick={()=>{props.onMainScreenChange("Home"); props.onMenuOpenChange()}}
          >🏠Home</button>
        <button onClick={()=>{props.onMainScreenChange("Play"); props.onMenuOpenChange()}} className="bg-white border flex items-center mx-auto mt-3 p-2 rounded-xl shadow w-4/5">
          <span className="flex items-center space-x-4">👦</span>
            <span className="font-semibold text-gray-700">
              John
            </span>
            <span className="text-sm text-gray-500">
              You: Thanks, sounds good! . 8hr
            </span>
        </button>
        <button onClick={()=>{props.onMainScreenChange("Play"); props.onMenuOpenChange()}} className="bg-white border flex items-center mx-auto mt-3 p-2 rounded-xl shadow w-4/5">
          <span className="flex items-center space-x-4">👨</span>
            <span className="font-semibold text-gray-700">
              Steve
            </span>
            <span className="text-sm text-gray-500">
              You: Thanks, sounds good! . 8hr
            </span>
        </button>
      </div>
    </div>
  )
}

export default Menu;
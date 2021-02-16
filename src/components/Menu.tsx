import { HomeButton } from "./index";

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
        <HomeButton handleMenuToggle={props.handleMenuToggle} onMainScreenChange={props.onMainScreenChange} />
        {/* // TODO キャラ表示 */}
        <button onClick={()=>{props.onMainScreenChange("Play");props.handleMenuToggle()}} className="bg-white border flex h-16 items-center mx-auto mt-3 p-2 rounded-xl shadow w-4/5">
          <span className="flex items-center space-x-4">👦</span>
            <span className="font-semibold text-gray-700">
              John
            </span>
            <span className="text-sm text-gray-500">
              Hello!
            </span>
        </button>
      </div>
    </div>
  )
}

export default Menu;
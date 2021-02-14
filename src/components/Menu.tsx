type Props = {
  isMenuOpen: boolean
  onMenuOpenChange: () => void
  onMainScreenChange: (screen: string) => void
}

const Menu = (props: Props) => {

  return (
    <div className="absolute w-screen">
      <div className={`absolute bg-gray-400 duration-200 h-screen opacity-70 right-0 w-full z-10 ${(props.isMenuOpen) ? "" : "hidden"} `} onClick={()=>{props.onMenuOpenChange()}}></div>
      <div className={`bg-white duration-500 flex-col h-screen relative w-4/5 z-20 ${(props.isMenuOpen) ? "left-0" : "-left-full"}`}>
        <header className="border-b-2 border-gray-200 flex justify-center items-center h-1/10 px-4 sticky sm:mb-0 text-gray-700 text-2xl ">
          <p>Menu</p>
          <button onClick={()=>{props.onMenuOpenChange()}}>close</button>
        </header>
        <button
          onClick={()=>{props.onMainScreenChange("Home")}}
          >Home🏠</button>
        <button
          onClick={()=>{props.onMainScreenChange("Play")}}
          >👦John</button>
        <button
          onClick={()=>{props.onMainScreenChange("Play")}}
          >👨Steve</button>
      </div>
    </div>
  )
}

export default Menu;
type Props = {
  isMenuOpen: boolean
  onMenuOpenChange: () => void
  onMainScreenChange: (screen: string) => void
}

const Menu = (props: Props) => {

  return (
    <div className="absolute w-screen text-gray-700">
      <div className={`absolute duration-500 h-screen w-full z-10 ${(props.isMenuOpen) ? "opacity-70" : "hidden"} `} onClick={()=>{props.onMenuOpenChange()}}></div>
      <div className={`bg-gray-300 duration-500 flex-col h-screen rounded-r-5xl relative shadow-2xl w-4/5 z-10 ${(props.isMenuOpen) ? "left-0" : "-left-full"}`}>
        <header className="flex justify-center items-center h-1/10 px-4 sticky sm:mb-0 text-2xl ">
          <p>Menu</p>
          <button onClick={()=>{props.onMenuOpenChange()}}>close</button>
        </header>
        <button
          onClick={()=>{props.onMainScreenChange("Home"); props.onMenuOpenChange()}}
          >🏠Home</button>
        <button
          onClick={()=>{props.onMainScreenChange("Play"); props.onMenuOpenChange()}}
          >👦John</button>
        <button
          onClick={()=>{props.onMainScreenChange("Play"); props.onMenuOpenChange()}}
          >👨Steve</button>
      </div>
    </div>
  )
}

export default Menu;
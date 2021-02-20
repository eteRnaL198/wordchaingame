import Div100vh from 'react-div-100vh';
import { HomeButton, RoomButton } from "./index";

type Props = {
  friends: Friend[]
  handleMenuToggle: () => void
  handleMainScreenChange: (screen: string) => void
  isMenuOpen: boolean
}

type Friend = {
  name: string,
  img: string,
  comment: string,
  level: number,
}

const Menu = (props: Props) => {

  return (
    <div className="relative z-20">
      {/* //TODO 100vh */}
      <div className={`absolute duration-300 h-screen w-full ${(props.isMenuOpen) ? "" : "hidden"} `} onClick={()=>{props.handleMenuToggle()}}></div>
      <div className={`absolute bg-gray-200 duration-300 flex-col h-screen rounded-r-5xl shadow-2xl w-4/5 ${(props.isMenuOpen) ? "left-0" : "-left-full"}`}>
        <header className="flex justify-center items-center h-1/10 px-4 sticky text-2xl">
          <p>Menu</p>
        </header>
        <HomeButton handleMenuToggle={props.handleMenuToggle} handleMainScreenChange={props.handleMainScreenChange} />
        {props.friends.map((friend, idx) => (
          <RoomButton key={idx} friend={friend} handleMenuToggle={props.handleMenuToggle} handleMainScreenChange={props.handleMainScreenChange} />
        ))}
      </div>
    </div>
  )
}

export default Menu;
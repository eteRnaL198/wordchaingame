import { Room } from "./index";

type Props = {
  friends: string[],
  handleUserData: (newData: UserData) => void
  handleMenuToggle: () => void,
  isMenuOpen: boolean,
  mainScreen: string,
  userData: UserData,
}

type UserData = {
  username: string,
  record: {
    win: number,
    shortest: number,
    lose: number,
    longest: number,
  },
}

const Rooms = (props: Props) => {
  return (
    <>
      {props.friends.map((friend, idx) => (
        <Room
          key={idx}
          handleMenuToggle={props.handleMenuToggle}
          isMenuOpen={props.isMenuOpen}
          mainScreen={props.mainScreen}
          roomName={friend}
          handleUserData={props.handleUserData}
          userData={props.userData}
        />
      ))}
    </>
  )
}

export default Rooms;
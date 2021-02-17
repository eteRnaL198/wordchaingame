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
    wins: number,
    shortest: number,
    losses: number,
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
        />
      ))}
    </>
  )
}

export default Rooms;
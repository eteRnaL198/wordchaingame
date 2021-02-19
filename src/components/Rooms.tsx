import { Room } from "./index";

type Props = {
  friends: Friend[],
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
    score: number,
  },
}

type Friend = {
  name: string,
  img: string,
  comment: string,
  level: number,
}

const Rooms = (props: Props) => {
  return (
    <>
      {props.friends.map((friend, idx) => (
        <Room
          key={idx}
          opponent={friend}
          handleMenuToggle={props.handleMenuToggle}
          handleUserData={props.handleUserData}
          isMenuOpen={props.isMenuOpen}
          mainScreen={props.mainScreen}
          userData={props.userData}
        />
      ))}
    </>
  )
}

export default Rooms;
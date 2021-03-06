import Div100vh from 'react-div-100vh'
import { News, Ranking, Contact, Profile, HomeHeader } from "./index";

type Props = {
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
    score: number,
    longest: number,
    lose: number,
  },
}

const Home = (props: Props) => {
  return (
    (props.mainScreen !== "Home") ? null:
    <Div100vh className="bg-gray-100 flex flex-col">
      <HomeHeader handleMenuToggle={props.handleMenuToggle} isMenuOpen={props.isMenuOpen}/>
      <main className="h-9/10 overflow-y-scroll">
        <Profile userData={props.userData}/>
        <Ranking userData={props.userData}/>
        <Contact userData={props.userData}/>
        <News/>
      </main>
    </Div100vh>
  )

}

export default Home;
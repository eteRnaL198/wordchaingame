import { useEffect, useState } from "react";
import firebase from "firebase";
import { News, Contact, Profile, HomeHeader } from "./index";

type Props = {
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
    longest: number,
    losses: number,
  },
}

const Home = (props: Props) => {
  return (
    (props.mainScreen !== "Home") ? null:
    <div className="bg-gray-100 flex flex-col h-screen">
      <HomeHeader handleMenuToggle={props.handleMenuToggle} isMenuOpen={props.isMenuOpen}/>
      <main className="h-9/10 overflow-y-scroll">
        <Profile userData={props.userData} />
        <Contact userData={props.userData}/>
        <News/>
      </main>
    </div>
  )

}

export default Home;
import { useEffect, useState } from "react";
import firebase from "firebase";


type Props = {
  username: string,
}

const Login = (props: Props) => {

  useEffect(() => {
    if(!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCOIXzz4vmirffj94FLMWhEX0mE4t0UMTsxc",
        authDomain: "wordchaingame-3e0fc.firebaseapp.com",
        projectId: "wordchaingame-3e0fc",
        storageBucket: "wordchaingame-3e0fc.appspot.com",
        messagingSenderId: "307489909046",
        appId: "1:307489909046:web:4bb2441c4c44a671406b97"
      });
    }
  }, [])


  return (
    (props.username) ? null :
    <>
      <div className="absolute bg-gray-600 bg-opacity-60 h-screen top-0 w-screen z-20">
        <div className="relative bg-white flex flex-col h-1/2 left-1/2 py-7 px-8 rounded-3xl top-1/2 transform -translate-x-2/4 -translate-y-2/4 w-4/5">
          <p className="flex font-semibold justify-center text-gray-600 text-3xl">Welcome !</p>
          <div className="flex flex-col flex-1 justify-between">
            <div className="mt-6">
              <div className="flex h-8 items-center justify-between">
                <p className="tracking-wide">Username</p>
                <button className="bg-gray-400 py-0.5 px-3 rounded-full text-white text-sm">Help</button>
              </div>
              <input type="text" placeholder="Enter your name !" className="bg-gray-200 h-8 mt-1 px-4 py-5 rounded-xl w-full"/>
              <p className="text-red-500 mt-2">名前を入力してください</p>
            </div>
            <div className="flex flex-col items-center">
              <button
                className="bg-blue-400 font-semibold py-1.5 rounded-full shadow-md text-white tracking-wider w-5/6"
              >
                Login
              </button>
              <button
                className="bg-yellow-500 font-semibold py-1.5 mt-4 rounded-full shadow-md text-white tracking-wider w-5/6"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
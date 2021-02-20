import { useEffect, useState } from "react";
import firebase from "firebase";
import Div100vh from 'react-div-100vh';

type Props = {
  userData: UserData
  handleUserData: (data: UserData) => void
}

type UserData = {
  username: string,
  record: {
    win: number,
    shortest: number,
    longest: number,
    lose: number,
    score: number,
  },
}

const Login = (props: Props) => {
  const [text, setText] = useState<string>("");
  const [warning, setWarning] = useState<string>("");
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  let tempData: UserData = props.userData;

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

  const registUser = async (newData: UserData) => {
    const db = firebase.firestore();
    await db.collection("users").doc(text).set(newData);
  }

  const fetchUserData = async () => {
    const db = firebase.firestore();
    const doc = db.collection("users").doc(text);
    await doc.get().then(async (doc) =>{
      const data = {
        username: await doc.get("username"),
        record: await doc.get("record"),
      }
      tempData = data;
    })
  }

  const handleHelpClick = () => {
    setIsHelpOpen(!isHelpOpen);
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setWarning("ユーザー名を入力してください\n\n");
    } else {
      setWarning("");
    }
    setText(e.target.value);
  }

  const handleLoginClick = async () => {
    await fetchUserData().then( () => {
      if(typeof tempData.username !== 'undefined') {
        props.handleUserData(tempData);
      } else {
        setWarning("ユーザー情報がありません\nサインアップしてください")
      }
    })
  }

  const handleSignupClick = async () => {
    await fetchUserData();
    if(typeof tempData.username !== 'undefined') {
      setWarning("この名前は既に使われています\n\n")
    } else if(text.length < 4) {
      setWarning("4文字以上の名前を入力してください\n\n");
    } else {
      const newData: UserData = {
        username: text,
        record: {
          win: 0,
          shortest: 99,
          longest: 0,
          lose: 0,
          score: 0,
        },
      }
      registUser(newData);
      props.handleUserData(newData);
    }
  }

  return (
    (props.userData.username !== "") ? null :
    <>
      <Div100vh className="absolute bg-gray-600 bg-opacity-60 top-0 w-screen z-20">
        <div className="relative bg-white flex flex-col left-1/2 py-6 px-8 rounded-3xl top-1/2 transform -translate-x-2/4 -translate-y-2/4 w-4/5">
          <p className="flex font-semibold justify-center text-gray-600 text-3xl">Welcome !</p>
          <div className="flex flex-col flex-1 justify-between">
            <div className="mt-2">
              <div className="flex h-8 items-center justify-between">
                <p className="tracking-wide">Username</p>
                <button className="bg-gray-400 py-0.5 px-3 rounded-full text-white text-sm" onClick={handleHelpClick}>{(isHelpOpen)? "close": "Help"}</button>
              </div>
              <input onChange={(e)=>handleTextChange(e)} type="text" placeholder="Enter your name !" className={`border-2 h-8 mt-1 px-4 py-5 rounded-xl w-full ${(warning === "") ? "bg-gray-200" : " border-red-500"}`} value={text}/>
              <p className="text-red-500 text-center whitespace-pre-line">{(warning) ? warning : "\n\n"}</p>
              <p className="text-gray-500 whitespace-pre-line">{(isHelpOpen)? "1. 名前を入力する\n2. 既に登録している場合は\nログイン\nはじめての場合は\nサインアップ" : null}</p>
            </div>
            <div className="flex flex-col items-center mt-4">
              <button
                onClick={()=>handleLoginClick()}
                className="bg-blue-400 font-semibold py-1.5 rounded-full shadow-md text-white tracking-wider w-5/6"
              >
                Login
              </button>
              <button
                onClick={()=>handleSignupClick()}
                className="bg-yellow-500 font-semibold py-1.5 mt-4 rounded-full shadow-md text-white tracking-wider w-5/6"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </Div100vh>
    </>
  )
}

export default Login;
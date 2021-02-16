import { useEffect, useState } from 'react';
import firebase from 'firebase';

type Props = {
  userData: UserData;
}

type UserData = {
  username: string,
  messageHistory: Message[],
}

type Message = {
  text: string;
  from: string;
}

const Contact = (props: Props) => {
  const [text, setText] = useState("");
  const [placeHolderText, setPlaceHolderText] = useState("感想・意見・バグの報告\nなどをお願いします");

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

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      setPlaceHolderText("感想・意見などご自由に");
  }

  const handleTextSubmit = async () => {
    const comment: {
      text: string;
      from: string;
    } = {
      text: text,
      from: props.userData.username,
    }
    console.log(comment);
    const db = firebase.firestore();
    await db.collection("comment").add(comment);
    setText("");
    setPlaceHolderText("ありがとうございます！\n送信が完了しました");
  }

  return (
    <div className="flex flex-col mx-auto  w-4/5">
      <textarea
        className="bg-white py-2 pl-4 rounded-2xl shadow-md w-full" rows={3} placeholder={placeHolderText}
        value={text}
        onChange={(e)=>handleTextChange(e)}
      >
      </textarea>
      <button
        className="bg-blue-400 font-bold mt-4 mx-auto rounded-full shadow-md py-1 text-white w-2/5"
        onClick={()=>{handleTextSubmit()}}
      >
        submit
      </button>
    </div>
  )
}

export default Contact
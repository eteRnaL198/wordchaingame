import { useEffect, useState } from 'react';
import firebase from 'firebase';

type Props = {
  userData: UserData;
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
      setPlaceHolderText("感想・意見・バグの報告\nなどをお願いします");
  }

  const handleTextSubmit = async () => {
    const comment: {
      text: string;
      from: string;
    } = {
      text: text,
      from: props.userData.username,
    }
    const db = firebase.firestore();
    const doc = await db.collection("contact").doc("1rkj1EAEYPUMsPZivdzK").get();
    const comments = await doc.get("comments");
    await db.collection("contact").doc("1rkj1EAEYPUMsPZivdzK")
      .set({"comments":[...comments, comment]}, {merge: true}).then(() => {
        setPlaceHolderText("ありがとうございます！\n送信が完了しました");
        setText("");
      })
  }

  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
        Contact
      </p>
      <div className="flex flex-col mx-auto  w-4/5">
        <textarea
          className="bg-white px-10 py-6 rounded-2xl shadow-md w-full" rows={2} placeholder={placeHolderText}
          value={text}
          onChange={(e)=>handleTextChange(e)}
        >
        </textarea>
        <button
          className="bg-blue-400 font-bold mt-4 mx-auto rounded-full shadow-md py-1 text-white w-2/5"
          onClick={()=>{if(text !== "")handleTextSubmit()}}
        >submit
        </button>
      </div>
    </section>
  )
}

export default Contact
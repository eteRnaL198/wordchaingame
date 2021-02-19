import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { RankRow } from "./index";

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

const Ranking = (props: Props) => {
  const [users, setUsers] = useState<UserData[]>();

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
    updateRank();
  },[props.userData]);

  const updateRank = async () => {
    const db = firebase.firestore();
    const docs = await db.collection("users").get();
    const usersStr: string[] = [];
    docs.forEach(doc => {
      usersStr.push(JSON.stringify(doc.data()));
    })
    const usersArr = usersStr.map(item => JSON.parse(item));
    //SORT
    setUsers(usersArr);
  }

  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
        Ranking
      </p>
      <div className="flex flex-col mx-auto  w-4/5">
        <div className="bg-white flex-col items-center max-h-32 mx-auto overflow-y-auto px-10 py-6 rounded-xl shadow-md w-full">
          {(!users) ? "Now Loading ..." :
            (users.map((user, idx) => (
              <RankRow key={idx} rank={idx} user={user} myData={props.userData}/>
              )))
            }
        </div>
        <button
          className="bg-blue-400 font-bold focus:opacity-60 mt-4 mx-auto rounded-full shadow-md py-1 text-white w-2/5"
          onClick={() => updateRank()}
          >update ↺
        </button>
      </div>
    </section>
  )
} 

export default Ranking;
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
  },[]);

  const updateRank = async () => {
    const db = firebase.firestore();
    const docs = await db.collection("users").get();
    const usersStr: string[] = [];
    docs.forEach(doc => {
      usersStr.push(JSON.stringify(doc.data()));
    })
    const usersArr = usersStr.map(item => JSON.parse(item));
    setUsers(usersArr);
  }

  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
        Ranking
      </p>
      {/* <div className="bg-white flex-col items-center max-h-32 mx-auto overflow-y-scroll px-10 py-6 rounded-xl shadow-md w-4/5"> */}
      <div className="bg-white flex-col items-center max-h-32 mx-auto overflow-y-auto px-10 py-6 rounded-xl shadow-md w-4/5">
        {(!users) ? "Now Loading ..." :
          <div className="text-center">
            <button onClick={() => updateRank()}>update↺</button>
            {users.map((user, idx) => (
              <RankRow key={idx} rank={idx} user={user}/>
            ))}
          </div>
        }
      </div>
    </section>
  )
} 

export default Ranking;
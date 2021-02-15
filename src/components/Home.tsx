import { useEffect, useState } from "react";
import firebase from "firebase";
import { News, Contact } from "./index";

type Props = {
  mainScreen: string,
  onMenuOpenChange: () => void,
  username: string,
}

const Home = (props: Props) => {

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

  const news = {
    contents: [
      {
        title: "始め方",
        subTitle: "How To Start",
        day: "2020.2.15",
        text: "名前を登録する。(名前の登録は一度までです。変更すると履歴が消えます)\n" +
              "右上のボタンからメニューを開き、相手を選ぶ",
      },
      {
        title: "ルール",
        subTitle: "Rules",
        day: "2020.2.15",
        text: "濁音はそのまま"
      },
      {
        title: "利用者が10人いったらアプデします",
        subTitle: "Update",
        day: "2020.2.15",
        text: "名前変更\n" +
              "オンラインでみんなと会話\n" +
              "ダークモード\n" +
              "オフラインモード 相手追加\n" +
              "そもそものしりとりをやめる\n" +
              "など その他要望があれば"
      },
      {
        title: "開発者からのお願い",
        subTitle: "Do Me a Favor",
        day: "2020.2.15",
        text: "技術の練習のためてきとーに作るつもりでしたが 間違えて凝ってしまいました。みなさん遊んでください" +
              "開発者へ のところから感想や改善案などを送ってくださると励みになります" + 
              "こーゆーアプリが欲しいとかあれば言ってください。作ります" +
              "打倒C*ubHouse!"
      },
    ]
  }
  
  return (
    (props.mainScreen !== "Home") ? null:
    <div className="bg-gray-100 flex flex-col h-screen">
      <header className="bg-white flex justify-center h-1/10 items-center px-4 rounded-b-xl sticky shadow z-10">
        <div className="flex items-end">
          <h1 className="text-gray-700 text-2xl">
            Word Chain Talker
          </h1>
          {/* TODO タイトル決める */}
          <p className="flex-end ml-3 text-gray-500 text-md">
            ver1.0
          </p>
          <button className="absolute right-2" onClick={() => props.onMenuOpenChange()}>
            open
          </button>
        </div>
      </header>
      <main className="h-full overflow-y-scroll relative">
      <section className="mt-3">
          <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
            Profile
          </p>
          <p className="flex mx-auto tracking-wide text-2xl text-gray-600 w-4/5">
            username: {props.username}
          </p>
        </section>
        <section className="mt-3">
          <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
            Contact
          </p>
          <Contact username={props.username}/>
        </section>
        <section className="mt-3">
          <p className="font-medium mb-3 ml-5 sticky tracking-wide text-gray-500 text-3xl">
            News
          </p>
          <div className="max-h-full overflow-y-scroll">
            {news.contents.map((content,idx)=> (
              <News key={idx} content={content} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )

}

export default Home;
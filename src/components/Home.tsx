import { useEffect, useState } from "react";
import firebase from "firebase";
import { News, Contact, ToggleMenuButton } from "./index";

type Props = {
  handleMenuToggle: () => void,
  isMenuOpen: boolean,
  mainScreen: string,
  userData: UserData,
}

type UserData = {
  username: string,
  messageHistory: Message[],
}

type Message = {
  text: string;
  from: string;
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
    // TODO firebaseに書き込む
    contents: [
      {
        title: "遊び方",
        subTitle: "How To Play",
        day: "2020.2.15",
        text: "画面右上のボタンからメニューを開き、相手を選ぶ\nトーク履歴は...",
        // TODO 記録の保存方法記入
      },
      {
        title: "ルール",
        subTitle: "Rules",
        day: "2020.2.15",
        text: "・濁音, 半濁音はそのまま\n・長音, 捨て仮名 は1つ前\n例)\nでっぱ: ぱ\nちーたー: た\nぷっちょ: ち"
      },
      {
        title: "登録者が10人いったらアプデします",
        subTitle: "Update",
        day: "2020.2.15",
        text: "・名前変更可能\n" +
              "・オンラインでみんなと会話\n" +
              "・ダークモード\n" +
              "・対戦相手の追加\n" +
              "・処理速度の改善\n" +
              "・バグ修正\n" +
              "など その他要望があれば上のContactからお願いします"
      },
      {
        title: "開発者から",
        subTitle: "From Dev",
        day: "2020.2.15",
        text: "技術の練習のためてきとーに作るつもりでしたが 間違えて凝ってしまいました。みなさん遊んでください\n" +
              "Contactから感想や改善案などを送ってくださると励みになります\n" + 
              "こーゆーアプリが欲しいとかあれば言ってください。作ります\n" +
              "打倒C*ubHouse!"
      },
    ]
  }
  
  return (
    (props.mainScreen !== "Home") ? null:
    <div className="bg-gray-100 flex flex-col h-screen">
      <header className="bg-white box-border flex justify-between h-1/10 items-center px-4 rounded-b-xl sticky shadow z-10">
        <div className="flex items-end">
          <h1 className="text-gray-700 text-2xl">
            Word Chain Talker
          </h1>
          {/* TODO タイトル決める */}
          <p className="flex-end ml-3 text-gray-500 text-md">
            ver1.0
          </p>
        </div>
        <ToggleMenuButton handleMenuToggle={props.handleMenuToggle} isMenuOpen={props.isMenuOpen} />
      </header>
      <main className="h-9/10 overflow-y-scroll">
        <section className="mt-3">
          <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
            Profile
          </p>
          <p className="flex mx-auto tracking-wide text-2xl text-gray-600 w-4/5">
            username: {props.userData.username}
            {/* 会話をした回数 */}
            {/* 最短の回数 */}
            {/* 最高続いた回数 */}
          </p>
        </section>
        <section className="mt-3">
          <p className="font-medium mb-3 ml-5 tracking-wide text-gray-500 text-3xl">
            Contact
          </p>
          <Contact userData={props.userData}/>
        </section>
        <section className="mt-3">
          <p className="font-medium mb-3 ml-5 sticky tracking-wide text-gray-500 text-3xl">
            News
          </p>
          <div className="max-h-full">
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
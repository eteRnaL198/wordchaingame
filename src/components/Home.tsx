import { useEffect } from "react";
import firebase from "firebase";
import { News } from "./index";

type Props = {
  mainScreen: string,
  onMenuOpenChange: () => void
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
        title: "遊び方",
        subTitle: "How To Play",
        text: "名前を登録する。" +
              "メニューから相手を選んで始める"
      },
      {
        title: "ルール",
        subTitle: "Rules",
        text: "長音はそのまま"
      },
      {
        title: "利用者が10人いったらアプデします",
        subTitle: "Update",
        text: "オンラインでみんなと会話" +
              "ダークモード" +
              "オフラインモード 相手追加" +
              "その他 要望があれば"
      },
      {
        title: "開発者からのお願い",
        subTitle: "Do Me a Favor",
        text: "技術の練習のためてきとーに作るつもりでしたが 間違えて凝ってしまいました。みなさん遊んでください" +
              "開発者へ のところから感想や改善案などを送ってくださると励みになります" + 
              "こーゆーアプリが欲しいとかあれば言ってください。作ります" +
              "打倒C*ubHouse!"
      },
    ]
  }

  return (
    (props.mainScreen !== "Home") ? null:
    <div className="flex flex-col h-screen">
      <header className="border-b-2 border-gray-200 flex justify-center items-center h-1/10 px-4 sticky sm:mb-0 text-gray-700 text-2xl ">
        <h1>Word Chain Talker  ver1.0</h1>
        {/* TODO タイトル決める */}
        <button onClick={() => props.onMenuOpenChange()}>Menu</button>
      </header>
      <div className="bg-gray-100 h-full overflow-y-auto">
        <p className="">お知らせ</p>
        {news.contents.map((content,idx)=> (
          <News key={idx} content={content} />
        ))}
      </div>
    </div>
  )

}

export default Home;
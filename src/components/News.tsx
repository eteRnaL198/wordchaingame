import { useEffect } from "react";
import firebase from "firebase";
import { Article } from "./index";

const News = () => {
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
        // TODO 記録の保存方法記入, 記録の説明
      },
      {
        title: "ルール",
        subTitle: "Rules",
        day: "2020.2.15",
        text: "・入力はひらがなのみ ( 同音異義語は負け )\n・濁音, 半濁音はそのまま\n・長音, 捨て仮名 は1つ前\n・ぢ,づ は じ,ず\n例)\nでっぱ: ぱ\nちーたー: た\nぷっちょ: ち\nはなぢ:じ"
      },
      {
        title: "登録者が10人いったらアプデします",
        subTitle: "Update",
        day: "2020.2.15",
        text: "・オンラインモード追加\n" +
              "・名前変更機能追加\n" +
              "・語彙追加\n" +
              "・ダークモード追加\n" +
              "・対戦相手追加\n" +
              "・pc表示追加\n" +
              "・処理速度改善\n" +
              "・バグ修正\n" +
              "など その他要望があれば上のContactからお願いします"
      },
      {
        title: "開発者から",
        subTitle: "From Dev",
        day: "2020.2.15",
        text: "技術の練習のためてきとーに作るつもりでしたが 間違えて凝ってしまいました\n" +
              "少しでも遊んでくれると嬉しいです\n" +
              "Contactから感想や改善案などを送ってくださると励みになります\n" + 
              "こーゆーアプリが欲しいとかあれば言ってください きっと作ります"
      },
    ]
  }
  

  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 sticky tracking-wide text-gray-500 text-3xl">
        News
      </p>
      <div className="max-h-full">
        {news.contents.map((content,idx)=> (
          <Article key={idx} content={content} />
          ))}
      </div>
    </section>
  )
}

export default News;
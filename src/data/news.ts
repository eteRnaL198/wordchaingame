const news = {
  contents: [
    {
      title: "遊び方",
      subTitle: "How To Play",
      day: "2020.2.20",
      text: "・画面右上のボタンからメニューを開き、相手を選んで開始する\n" +
            "・ゲーム終了後 続けて遊ぶには好きな単語を入力すると そのまま開始される\n"
    },
    {
      title: "ルール",
      subTitle: "Rules",
      day: "2020.2.20",
      text: "・入力はひらがなのみ ( 同音異義語は負け )\n・濁音, 半濁音はそのまま\n・長音, 捨て仮名 は1つ前\n・ぢ,づ は じ,ず\n例)\nでっぱ: ぱ\nちーたー: た\nぷっちょ: ち\nはなぢ: じ"
    },
    {
      title: "プロフィールの記録",
      subTitle: "Record",
      day: "2020.2.20",
      text: "ゲームが終了した時点で記録される\n" +
      "・win: 勝った回数,\n・lose: 負けた回数,\n" + 
      "・shortest: 最短で勝利したときのターン数 (初期値99),\n" +
      "・longest: 最も長くゲームが続いたときのターン数\n" +
      "・score: win*3+lose*2+99-shortest+longestで計算される得点\n"
    },
    {
      title: "アップデート予定",
      subTitle: "Plan",
      day: "2020.2.20",
      text: "・オンラインモード追加\n" +
            "・名前変更機能追加\n" +
            "・語彙追加\n" +
            "・ダークモード追加\n" +
            "・対戦相手追加\n" +
            "・レスポンシブ対応\n" +
            "・処理速度改善\n" +
            "・バグ修正\n" +
            "など その他要望がありましたら上のContactからお願いします\n"
    },
    {
      title: "開発者から",
      subTitle: "From Dev",
      day: "2020.2.20",
      text: "技術の練習のためてきとーに作るつもりでしたが 間違えて凝ってしまいました\n" +
            "少しでも遊んでくれた方 ありがとうございます\n" +
            "Contactから感想や改善案などを送ってくださると励みになります\n" + 
            "こーゆーアプリが欲しいとかあれば言ってください きっと作ります"
    },
    {
      title: "注意",
      subTitle: "warning",
      day: "2020.2.20",
      text: "気軽に遊べるよう、ユーザー名を入力するだけでログインできる仕様になっています\n" +
            "そのため他人のアカウントにログインすることも容易にできてしまいますが、やめてください\n" +
            "そのような行為が発見された場合、パスワード機能を追加します\n",
    },
  ]
}
export default news
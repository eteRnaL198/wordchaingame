const dialogs = {
  start: {
    first: {
      message: {
        text: "しりとりはじめ",
        from: "opponent"
      },
      placeholderText: "Start with 「め」",
    },
    init: {
      message: [
        {
          text: "こんにちは！",
          from: "opponent"
        },
        {
          text: "名前を入力してね",
          from: "opponent"
        },
      ],
      placeholderText: "Enter your name !"
    },
    rules: {
      message: {
        text: "しりとりのルールは知っているね？",
        from: "opponent"
      },
      placeholderText: ""
    },
  },
  err: {
    kanaErr: {
      message: {
        text: "ひらがな で入力してね",
        from: "opponent"
      },
      placeholderText: "Only accept Hiragana !"
    },
  },
  win: {
    message: [
      {
        text: "... 思いつかない",
        from: "opponent"
      },
      {
        text: "君の勝ち！",
        from: "opponent"
      },
    ],
    placeholderText: "Thank you for playing !",
  },
  lose: {
    endWithN: {
      message: [
        {
          text: "ん で終わってるよ",
          from: "opponent"
        },
        {
          text: "僕の勝ち！",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    },
    wrongStart: {
      message: [
        {
          text: "始まりの言葉が間違ってるよ",
          from: "opponent"
        },
        {
          text: "僕の勝ち！",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    },
    duplicated: {
      message: [
        {
          text: "既に言ったよ",
          from: "opponent"
        },
        {
          text: "僕の勝ち！",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    }
  },
}

export default dialogs

/*
 TODO セリフ、システム等 いろいろ

 slack風が良いかも？

「キャラ」
  弱キャラ  ボブ ジョン (弱)
  強キャラ  スティーブ(強)

「ホーム画面」
  - 名前登録 ！絶対！
      アカウント
      なし > はじめまして！ 名前をおしえてね
      あり > **さん おかえりなさい！

  - ルール説明
    > 小さい文字、長音は飛ばす
      濁音、撥音はそのまま
      例: てぃーちゃー ちくわ

  - ユーザー情報
    - 名前 (変更可能)
    - プレイ回数

  - お知らせ
  プレイヤーが10人に到達したら
  新機能が実装されるよ
  (オンラインで他人との会話、勝敗のカウント)
  
  - 開発者に問い合わせ
    パスワードを忘れた、感想、バグの報告、改善案、欲しい機能などを送ってね



*/
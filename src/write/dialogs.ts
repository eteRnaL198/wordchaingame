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
    repeated: {
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
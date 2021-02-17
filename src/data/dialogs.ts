const dialogs = {
  start: {
    first: {
      message: {
        text: "しりとりはじめ",
        type: "dialog",
        from: "opponent"
      },
      placeholderText: "Start with 「め」",
    },
  },
  err: {
    kanaErr: {
      message: {
        text: "ひらがな で入力してね",
        type: "dialog",
        from: "opponent"
      },
      placeholderText: "Only accept Hiragana !"
    },
  },
  win: {
    message: [
      {
        text: "... 思いつかない",
        type: "dialog",
        from: "opponent"
      },
      {
        text: "君の勝ち！",
        type: "dialog",
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
          type: "dialog",
          from: "opponent"
        },
        {
          text: "僕の勝ち！",
          type: "dialog",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    },
    wrongStart: {
      message: [
        {
          text: "始まりの言葉が間違ってるよ",
          type: "dialog",
          from: "opponent"
        },
        {
          text: "僕の勝ち！",
          type: "dialog",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    },
    duplicated: {
      message: [
        {
          text: "既に言ったよ",
          type: "dialog",
          from: "opponent"
        },
        {
          text: "僕の勝ち！",
          type: "dialog",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    }
  },
}

export default dialogs
// TODO dialog 編集
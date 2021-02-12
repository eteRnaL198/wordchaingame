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
      messagse: {
          text: "こんにちは！",
          from: "opponent"
      },
      placeholderText: "Hello !"
    },
    registration: {
      message: {
        text: "ひらがな で名前を入力してね",
        from: "opponent"
      },
      placeholderText: "Enter your name"
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
      placeholderText: "Error !"
    },
  },
  lose: {
    endWithN: {
      message: {
        text: "ん で終わってるよ",
        from: "opponent"
      },
      placeholderText: "Thank you for playing !",
    },
    wrongStart: {
      message: {
        text: "で始まってないよ",
        from: "opponent"
      },
      placeholderText: "Thank your for playing !"
    },
  },
}

export default dialogs
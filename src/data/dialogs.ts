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
    noIdea: {
      message: [
        {
          text: "... 思いつかない\n君の勝ち！",
          type: "dialog",
          from: "opponent"
        },
        {
          text: "もう一度遊ぼう！\n君の単語から始めるよ",
          type: "finish",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    }
  },
  lose: {
    endWithN: {
      message: [
        {
          text: "ん で終わってるよ\n僕の勝ち！",
          type: "dialog",
          from: "opponent"
        },
        {
          text: "もう一度遊ぼう！\n君の単語から始めるよ",
          type: "finish",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    },
    wrongStart: {
      message: [
        {
          text: "始まりの言葉が間違ってるよ\n僕の勝ち！",
          type: "dialog",
          from: "opponent"
        },
        {
          text: "もう一度遊ぼう！\n君の単語から始めるよ",
          type: "finish",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    },
    duplicated: {
      message: [
        {
          text: "既に言ったよ\n僕の勝ち！",
          type: "dialog",
          from: "opponent"
        },
        {
          text: "もう一度遊ぼう！\n君の単語から始めるよ",
          type: "finish",
          from: "opponent"
        },
      ],
      placeholderText: "Thank you for playing !",
    }
  },
}

export default dialogs
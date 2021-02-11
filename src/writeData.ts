import firebase from "firebase";

const writeData = () => {
    (async () => {
        firebase.initializeApp({
          apiKey: "AIzaSyCOIXzz4vmffj94FLMWhEX0mE4t0UMTsxc",
          authDomain: "wordchaingame-3e0fc.firebaseapp.com",
          projectId: "wordchaingame-3e0fc",
          storageBucket: "wordchaingame-3e0fc.appspot.com",
          messagingSenderId: "307489909046",
          appId: "1:307489909046:web:4bb2441c4c44a671406b97"
        });

        const db = firebase.firestore();
        await db.collection("words").doc("49cDTcDttW3Tpj3DMYA0").set({
          あ: [{desc:"アーモンド",text:"あーもんど"},{desc:"愛",text:"あい"},{desc:"挨拶",text:"あいさつ"},{desc:"アイス",text:"あいす"},{desc:"合図",text:"あいず"},{desc:"アイスティー",text:"あいすてぃー"},{desc:"アイスホッケー",text:"あいすほっけー"},{desc:"相手",text:"あいて"},{desc:"アイデア",text:"あいであ"},{desc:"アイドル",text:"あいどる"},{desc:"アウト",text:"あうと"},{desc:"青",text:"あお"},{desc:"青虫",text:"あおむし"},{desc:"垢",text:"あか"},{desc:"赤信号",text:"あかしんごう"},{desc:"赤身",text:"あかみ"},{desc:"明かり",text:"あかり"},{desc:"空地",text:"あきち"},{desc:"灰汁",text:"あく"},{desc:"悪事",text:"あくじ"},{desc:"悪質",text:"あくしつ"},{desc:"握手",text:"あくしゅ"},{desc:"悪党",text:"あくとう"}],
          い: [{desc:"言い伝え",text:"いいつたえ"},{desc:"言い訳",text:"いいわけ"},{desc:"委員会",text:"いいんかい"},{desc:"委員長",text:"いいんちょう"},{desc:"家",text:"いえ"},{desc:"胃液",text:"いえき"},{desc:"家出",text:"いえで"},{desc:"硫黄",text:"いおう"},{desc:"イカ",text:"いか"},{desc:"胃潰瘍",text:"いかいよう"},{desc:"医学",text:"いがく"},{desc:"如何様",text:"いかさま"},{desc:"胃下垂",text:"いかすい"},{desc:"雷",text:"いかずち"},{desc:"烏賊墨",text:"いかすみ"},{desc:"筏",text:"いかだ"},{desc:"いかフライ",text:"いかふらい"},{desc:"胃カメラ",text:"いかめら"},{desc:"イカ焼き",text:"いかやき"},{desc:"錨",text:"いかり"},{desc:"イカリング",text:"いかりんぐ"}],
          う: [{desc:"ウイルス",text:"ういるす"},{desc:"ウインカー",text:"ういんかー"},{desc:"ウインナー",text:"ういんなー"},{desc:"ウール",text:"うーる"},{desc:"烏竜茶",text:"うーろんちゃ"},{desc:"ウェア",text:"うぇあ"},{desc:"ウエハース",text:"うえはーす"},{desc:"ウォーキング",text:"うぉーきんぐ"},{desc:"魚座",text:"うおざ"},{desc:"ウォシュレット",text:"うぉしゅれっと"},{desc:"ウクレレ",text:"うくれれ"},{desc:"受付",text:"うけつけ"},{desc:"兎",text:"うさぎ"},{desc:"牛",text:"うし"},{desc:"牛蛙",text:"うしがえる"},{desc:"渦",text:"うず"},{desc:"薄型テレビ",text:"うすがたてれび"},{desc:"ウスターソース",text:"うすたーそーす"},{desc:"ウズラ",text:"うずら"},{desc:"右折",text:"うせつ"},{desc:"嘘",text:"うそ"}],
          え: [{desc:"エアバッグ",text:"えあばっぐ"},{desc:"エアメール",text:"えあめーる"},{desc:"エアロビクス",text:"えあろびくす"},{desc:"エイ",text:"えい"},{desc:"映画",text:"えいが"},{desc:"英会話",text:"えいかいわ"},{desc:"映画監督",text:"えいがかんとく"},{desc:"永久歯",text:"えいきゅうし"},{desc:"英語",text:"えいご"},{desc:"衛星",text:"えいせい"},{desc:"衛星",text:"えいせい"},{desc:"映像",text:"えいぞう"},{desc:"エイプリルフール",text:"えいぷりるふーる"},{desc:"エリマキトカゲ",text:"えいまきとかげ"},{desc:"英雄",text:"えいゆう"},{desc:"栄養",text:"えいよう"},{desc:"AI",text:"えーあい"},{desc:"A型",text:"えーがた"},{desc:"AB型",text:"えーびーがた"},{desc:"笑顔",text:"えがお"},],
          お: [{desc:"オアシス",text:"おあしす"},{desc:"追打ち",text:"おいうち"},{desc:"追い風",text:"おいかぜ"},{desc:"生い立ち",text:"おいたち"},{desc:"オイル",text:"おいる"},{desc:"お祝い",text:"おいわい"},{desc:"王国",text:"おうこく"},{desc:"王様",text:"おうさま"},{desc:"王女",text:"おうじょ"},{desc:"王手",text:"おうて"},{desc:"お絵描き",text:"おえかき"},{desc:"大雨",text:"おおあめ"},{desc:"大荒れ",text:"おおあれ"},{desc:"大阪",text:"おおさか"},{desc:"大勢",text:"おおぜい"},{desc:"大空",text:"おおぞら"},{desc:"大部屋",text:"おおべや"},{desc:"丘",text:"おか"},{desc:"お金",text:"おかね"},{desc:"沖縄",text:"おきなわ"},{desc:"置物",text:"おきもの"},{desc:"屋外",text:"おくがい"},],

          か: [{desc:"カード", text:"かーど"},{desc:"カーナビ", text:"かーなび"},{desc:"カーペット", text:"かーぺっと"},{desc:"飼い犬", text:"かいいぬ"},{desc:"絵画", text:"かいが"},{desc:"海外", text:"かいがい"},{desc:"貝殻", text:"かいがら"},{desc:"解決", text:"かいけつ"},{desc:"蚕", text:"かいこ"},{desc:"会社", text:"かいしゃ"},{desc:"怪獣", text:"かいじゅう"},{desc:"会場", text:"かいじょう"},{desc:"海水", text:"かいすい"},{desc:"海水浴", text:"かいすいよく"},{desc:"回数", text:"かいすう"},{desc:"解説", text:"かいせつ"},{desc:"海草", text:"かいそう"},{desc:"改造", text:"かいぞう"},{desc:"海賊", text:"かいぞく"},{desc:"懐中電灯", text:"かいちゅうでんとう"},],
          き: [{desc:"気合",text:"きあい"},{desc:"黄色",text:"きいろ"},{desc:"キウイ",text:"きうい"},{desc:"記憶",text:"きおく"},{desc:"機械",text:"きかい"},{desc:"着替え",text:"きがえ"},{desc:"機関車",text:"きかんしゃ"},{desc:"利き手",text:"ききて"},{desc:"気球",text:"ききゅう"},{desc:"菊",text:"きく"},{desc:"着ぐるみ",text:"きぐるみ"},{desc:"記号",text:"きごう"},{desc:"木こり",text:"きこり"},{desc:"記事",text:"きじ"},{desc:"汽車",text:"きしゃ"},],
          く: [{desc:"食いしん坊",text:"くいしんぼう"},{desc:"クイズ",text:"くいず"},{desc:"食逃げ",text:"くいにげ"},{desc:"食い物",text:"くいもの"},{desc:"空気",text:"くうき"},{desc:"空港",text:"くうこう"},{desc:"空想",text:"くうそう"},{desc:"空中",text:"くうちゅう"},{desc:"空白",text:"くうはく"},{desc:"空腹",text:"くうふく"},{desc:"クーラー",text:"くーらー"},{desc:"九月",text:"くがつ"},{desc:"茎",text:"くき"},{desc:"釘",text:"くぎ"}],
          け: [{desc:"毛穴",text:"けあな"},{desc:"経営",text:"けいえい"},{desc:"警戒",text:"けいかい"},{desc:"計画",text:"けいかく"},{desc:"景気",text:"けいき"},{desc:"稽古",text:"けいこ"},{desc:"敬語",text:"けいご"},{desc:"蛍光灯",text:"けいこうとう"},{desc:"警告",text:"けいこく"},{desc:"警察",text:"けいさつ"},{desc:"警察署",text:"けいさつしょ"},{desc:"計算機",text:"けいさんき"},{desc:"軽自動車",text:"けいじどうしゃ"},],
          こ: [{desc:"コアラ",text:"こあら"},{desc:"鯉",text:"こい"},{desc:"高校",text:"こうこう"},{desc:"広告",text:"こうこく"},{desc:"工作",text:"こうさく"},{desc:"子牛",text:"こうし"},{desc:"公式",text:"こうしき"},{desc:"校舎",text:"こうしゃ"},{desc:"高速道路",text:"こうそくどうろ"},{desc:"紅茶",text:"こうちゃ"},{desc:"校庭",text:"こうてい"},{desc:"行動",text:"こうどう"},{desc:"校内",text:"こうない"},{desc:"購入",text:"こうにゅう"},],

          さ: [{desc:"サーカス",text:"さーかす"},{desc:"サービス",text:"さーびす"},{desc:"再会",text:"さいかい"},{desc:"災害",text:"さいがい"},{desc:"最強",text:"さいきょう"},{desc:"細工",text:"さいく"},{desc:"最後",text:"さいご"},{desc:"最高",text:"さいこう"},{desc:"サイコパス",text:"さいこぱす"},{desc:"サイコロ",text:"さいころ"},{desc:"最初",text:"さいしょ"},{desc:"サイズ",text:"さいず"},{desc:"賽銭箱",text:"さいせんばこ"},{desc:"サイダー",text:"さいだー"}],
          し: [{desc:"試合",text:"しあい"},{desc:"飼育",text:"しいく"},{desc:"シーソー",text:"しーそー"},{desc:"椎茸",text:"しいたけ"},{desc:"シートベルト",text:"しーとべると"},{desc:"塩",text:"しお"},{desc:"塩焼き",text:"しおやき"},{desc:"鹿",text:"しか"},{desc:"司会",text:"しかい"},{desc:"視界",text:"しかい"},{desc:"市外",text:"しがい"},{desc:"四角",text:"しかく"},{desc:"資格",text:"しかく"},{desc:"仕掛け",text:"しかけ"}],
          す: [{desc:"巣穴",text:"すあな"},{desc:"スイーツ",text:"すいーつ"},{desc:"水泳",text:"すいえい"},{desc:"すいか",text:"すいか"},{desc:"水車",text:"すいしゃ"},{desc:"スイス",text:"すいす"},{desc:"彗星",text:"すいせい"},{desc:"水素",text:"すいそ"},{desc:"水槽",text:"すいそう"},{desc:"スイッチ",text:"すいっち"},],
          せ: [{desc:"成果",text:"せいか"},{desc:"聖火",text:"せいか"},{desc:"正解",text:"せいかい"},{desc:"正確",text:"せいかく"},{desc:"性格",text:"せいかく"},{desc:"生活",text:"せいかつ"},{desc:"正義",text:"せいぎ"},{desc:"生後",text:"せいご"},{desc:"成功",text:"せいこう"},{desc:"星座",text:"せいざ"}],
          そ: [{desc:"双眼鏡",text:"そうがんきょう"},{desc:"葬儀",text:"そうぎ"},{desc:"遭遇",text:"そうぐう"},{desc:"送迎",text:"そうげい"},{desc:"送迎バス",text:"そうげいばす"},{desc:"倉庫",text:"そうこ"},{desc:"走行",text:"そうこう"},{desc:"総合格闘技",text:"そうごうかくとうぎ"},{desc:"操作",text:"そうさ"},],

          た: [{desc:"ターゲット",text:"たーげっと"},{desc:"鯛",text:"たい"},{desc:"体当たり",text:"たいあたり"},{desc:"体育",text:"たいいく"},{desc:"体温計",text:"たいおんけい"},{desc:"大会",text:"たいかい"},{desc:"対決",text:"たいけつ"},{desc:"太鼓",text:"たいこ"},{desc:"体脂肪",text:"たいしぼう"},{desc:"タラバガニ",text:"たらばがに"},],
          ち: [{desc:"チアリーダー",text:"ちありーだー"},{desc:"地位",text:"ちい"},{desc:"地域",text:"ちいき"},{desc:"チーズ",text:"ちーず"},{desc:"チーター",text:"ちーたー"},{desc:"チーム",text:"ちーむ"},{desc:"知恵",text:"ちえ"},{desc:"チェア",text:"ちぇあ"},{desc:"チェス",text:"ちぇす"},{desc:"チョコレート",text:"ちょこれーと"}],
          つ: [{desc:"ツアー",text:"つあー"},{desc:"追跡",text:"ついせき"},{desc:"ツイッター",text:"ついったー"},{desc:"ツインテール",text:"ついんてーる"},{desc:"通学",text:"つうがく"},{desc:"通信販売",text:"つうしんはんばい"},{desc:"吊り橋",text:"つりばし"},{desc:"釣針",text:"つりばり"},{desc:"鶴",text:"つる"},{desc:"剣",text:"つるぎ"},],
          て: [{desc:"手足",text:"てあし"},{desc:"手当",text:"てあて"},{desc:"手洗",text:"てあらい"},{desc:"ティーカップ",text:"てぃーかっぷ"},{desc:"定休日",text:"ていきゅうび"},{desc:"テイクアウト",text:"ていくあうと"},{desc:"抵抗",text:"ていこう"},{desc:"亭主",text:"ていしゅ"},{desc:"手袋",text:"てぶくろ"},{desc:"テレビ",text:"てれび"},],
          と: [{desc:"トイレ",text:"といれ"},{desc:"トイレットペーパー",text:"といれっとぺーぱー"},{desc:"唐辛子",text:"とうがらし"},{desc:"陶器",text:"とうき"},{desc:"投球",text:"とうきゅう"},{desc:"闘牛",text:"とうぎゅう"},{desc:"東京タワー",text:"とうきょうたわー"},{desc:"トランプ",text:"とらんぷ"},{desc:"鳥",text:"とり"},{desc:"トンネル",text:"とんねる"}],

          な: [{desc:"ナースコール",text:"なーすこーる"},{desc:"内科",text:"ないか"},{desc:"内緒",text:"ないしょ"},{desc:"内職",text:"ないしょく"},{desc:"内臓",text:"ないぞう"},{desc:"ナイト",text:"ないと"},{desc:"ナイフ",text:"ないふ"},{desc:"内部",text:"ないぶ"},{desc:"内容",text:"ないよう"},{desc:"生菓子",text:"なまがし"}],
          に: [{desc:"臭い",text:"におい"},{desc:"二階",text:"にかい"},{desc:"似顔絵",text:"にがおえ"},{desc:"苦み",text:"にがみ"},{desc:"二期作",text:"にきさく"},{desc:"肉",text:"にく"},{desc:"逃げ場",text:"にげば"},{desc:"煮込みハンバーグ",text:"にこみはんばーぐ"},{desc:"濁り",text:"にごり"}],
          ぬ: [{desc:"縫い糸",text:"ぬいいと"},{desc:"ぬいぐるみ",text:"ぬいぐるみ"},{desc:"縫い代",text:"ぬいしろ"},{desc:"縫い針",text:"ぬいばり"},{desc:"縫い目",text:"ぬいめ"},{desc:"縫い物",text:"ぬいもの"},{desc:"ヌー",text:"ぬー"},{desc:"ヌードル",text:"ぬーどる"},{desc:"糠",text:"ぬか"}],
          ね: [{desc:"値上がり",text:"ねあがり"},{desc:"値上げ",text:"ねあげ"},{desc:"寝汗",text:"ねあせ"},{desc:"寝息",text:"ねいき"},{desc:"ネイルアート",text:"ねいるあーと"},{desc:"音色",text:"ねいろ"},{desc:"願い事",text:"ねがいごと"},{desc:"寝返り",text:"ねがえり"},{desc:"寝顔",text:"ねがお"}],
          の: [{desc:"ノイズ",text:"のいず"},{desc:"野苺",text:"のいちご"},{desc:"脳",text:"のう"},{desc:"農業",text:"のうぎょう"},{desc:"ノート",text:"のーと"},{desc:"野原",text:"のはら"},{desc:"飲み会",text:"のみかい"},{desc:"海苔巻き",text:"のりまき"},{desc:"乗り物",text:"のりもの"},{desc:"ノルウエー",text:"のるうぇー"},],

          は: [{desc:"ハート",text:"はーと"},{desc:"ハーモニカ",text:"はーもにか"},{desc:"灰",text:"はい"},{desc:"肺",text:"はい"}],
          ひ: [{desc:"贔屓",text:"ひいき"},{desc:"ヒーター",text:"ひーたー"},{desc:"ヒーロー",text:"ひーろー"},{desc:"冷え症",text:"ひえしょう"},{desc:"控室",text:"ひかえしつ"}],
          ふ: [{desc:"ファイア",text:"ふぁいあ"},{desc:"ファイト",text:"ふぁいと"},{desc:"ファイナル",text:"ふぁいなる"},{desc:"ファイル",text:"ふぁいる"},{desc:"ファスナー",text:"ふぁすなー"},{desc:"ファックス",text:"ふぁっくす"}],
          へ: [{desc:"ヘアアクセサリー",text:"へああくせさりー"},{desc:"陛下",text:"へいか"},{desc:"閉会式",text:"へいかいしき"},{desc:"兵器",text:"へいき"},{desc:"平均台",text:"へいきんだい"},{desc:"平行四辺形",text:"へいこうしへんけい"}],
          ほ: [{desc:"保育士",text:"ほいくし"},{desc:"ホイッスル",text:"ほいっする"},{desc:"ホイップ",text:"ほいっぷ"},{desc:"ホイル焼き",text:"ほいるやき"},{desc:"包囲",text:"ほうい"},{desc:"方向音痴",text:"ほうこうおんち"},{desc:"芳香剤",text:"ほうこうざい"},{desc:"報告",text:"ほうこく"}],

          ま: [{desc:"麻婆豆腐",text:"まーぼーどうふ"},{desc:"舞妓",text:"まいこ"},{desc:"迷子",text:"まいご"},{desc:"舞茸",text:"まいたけ"},{desc:"マイナス",text:"まいなす"},{desc:"マウス",text:"まうす"},{desc:"マウンテンバイク",text:"まうんてんばいく"},{desc:"前置き",text:"まえおき"}],
          み: [{desc:"ミートボール",text:"みーとぼーる"},{desc:"ミイラ",text:"みいら"},{desc:"身動き",text:"みうごき"},{desc:"身内",text:"みうち"},{desc:"見送り",text:"みおくり"},{desc:"見落とし",text:"みおとし"},{desc:"見覚え",text:"みおぼえ"},{desc:"見返り",text:"みかえり"},{desc:"身代わり",text:"みがわり"}],
          む: [{desc:"無意識",text:"むいしき"},{desc:"ムード",text:"むーど"},{desc:"ムードメーカー",text:"むーどめーかー"},{desc:"ムービー",text:"むーびー"},{desc:"ムール貝",text:"むーるがい"},{desc:"ムーンウォーク",text:"むーんうぉーく"},{desc:"無塩バター",text:"むえんばたー"},{desc:"向かい風",text:"むかいかぜ"},],
          め: [{desc:"目当て",text:"めあて"},{desc:"姪",text:"めい"},{desc:"冥王星",text:"めいおうせい"},{desc:"名画",text:"めいが"},{desc:"銘柄",text:"めいがら"},{desc:"迷宮",text:"めいきゅう"},{desc:"名曲",text:"めいきょく"},{desc:"メイク",text:"めいく"},{desc:"名刺",text:"めいし"},],
          も: [{desc:"モアイ",text:"もあい"},{desc:"燃えるゴミ",text:"もえるごみ"},{desc:"モーター",text:"もーたー"},{desc:"目撃",text:"もくげき"},{desc:"木材",text:"もくざい"},{desc:"目次",text:"もくじ"},{desc:"木星",text:"もくせい"}],

          や: [{desc:"刃",text:"やいば"},{desc:"八重歯",text:"やえば"},{desc:"八百屋",text:"やおや"},{desc:"野外",text:"やがい"},{desc:"野外活動",text:"やがいかつどう"},{desc:"館",text:"やかた"},{desc:"屋形船",text:"やかたぶね"},{desc:"ヤギ",text:"やぎ"}],
          ゆ: [{desc:"遊園地",text:"ゆうえんち"},{desc:"誘拐",text:"ゆうかい"},{desc:"夕方",text:"ゆうがた"},{desc:"ユーカリ",text:"ゆーかり"},{desc:"勇気",text:"ゆうき"},{desc:"遊具",text:"ゆうぐ"},{desc:"夕暮れ",text:"ゆうぐれ"},{desc:"勇者",text:"ゆうしゃ"},],
          よ: [{desc:"洋画",text:"ようが"},{desc:"妖怪",text:"ようかい"},{desc:"洋式トイレ",text:"ようしきといれ"},{desc:"妖精",text:"ようせい"},{desc:"幼虫",text:"ようちゅう"},{desc:"腰痛",text:"ようつう"},{desc:"洋服",text:"ようふく"},{desc:"羊毛",text:"ようもう"},],
          
          ら: [{desc:"ラーメン屋",text:"らーめんや"},{desc:"ラー油",text:"らーゆ"},{desc:"雷雨",text:"らいう"},{desc:"来月",text:"らいげつ"},{desc:"来週",text:"らいしゅう"},{desc:"ライス",text:"らいす"},{desc:"来世",text:"らいせ"},{desc:"ライセンス",text:"らいせんす"},],
          り: [{desc:"リアカー",text:"りあかー"},{desc:"料理教室",text:"りょうりきょうしつ"},{desc:"リーグ",text:"りーぐ"},{desc:"リーダー",text:"りーだー"},{desc:"利益",text:"りえき"},{desc:"理科",text:"りか"},{desc:"理解",text:"りかい"},{desc:"陸",text:"りく"}],
          る: [{desc:"ルアー",text:"るあー"},{desc:"ルーズリーフ",text:"るーずりーふ"},{desc:"ルーター",text:"るーたー"},{desc:"ルーツ",text:"るーつ"},{desc:"ルート",text:"るーと"},{desc:"ルービックキューブ",text:"るーびっくきゅーぶ"},{desc:"ルーマニア",text:"るーまにあ"},],
          れ: [{desc:"レアチーズケーキ",text:"れあちーずけーき"},{desc:"霊",text:"れい"},{desc:"レイアウト",text:"れいあうと"},{desc:"例題",text:"れいだい"},{desc:"冷凍庫",text:"れいとうこ"},{desc:"霊能者",text:"れいのうしゃ"},{desc:"レインボーブリッジ",text:"れいんぼーぶりっじ"},],
          ろ: [{desc:"ロイヤルミルクティー",text:"ろいやるみるくてぃー"},{desc:"廊下",text:"ろうか"},{desc:"老人ホーム",text:"ろうじんほーむ"},{desc:"ロウソク",text:"ろうそく"},{desc:"労働",text:"ろうどう"},{desc:"ローキック",text:"ろーきっく"},{desc:"ロースハム",text:"ろーすはむ"},],

          わ: [{desc:"ワールドカップ",text:"わーるどかっぷ"},{desc:"ワイシャツ",text:"わいしゃつ"},{desc:"ワイドショー",text:"わいどしょー"},{desc:"ワイパー",text:"わいぱー"},{desc:"Wi-Fi",text:"わいふ"},{desc:"ワイヤ－",text:"わいやー"},{desc:"ワイヤレス",text:"わいやれす"},{desc:"賄賂",text:"わいろ"}],

        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((err) => {
          console.error("Error writting document:", err);
        })


        await db.collection("dialogs").doc("start").set({
          first: {
            text: "しりとりはじめ",
            from: "opponent"
          },
          greeting: {
            text: "こんにちは！",
            from: "opponent"
          },
          registration: {
            text: "ひらがな で名前を入力してね",
            from: "opponent"
          },
          rules: {
            text: "しりとりのルールは知っているね？",
            from: "opponent"
          }
        })

        await db.collection("dialogs").doc("err").set({
          kanaErr: {
            text: "ひらがな で入力してね",
            from: "opponent"
          }
        })

        await db.collection("dialogs").doc("lose").set({
          endWithN: {
            text: "ん で終わってるよ",
            from: "opponent"
          },
          wrongStart: {
            text: "で始まってないよ",
            from: "opponent"
          }
        })
        

    })();
}

export default writeData;


// TODO 単語写す https://xn--68j8a5fb.net/
// TODO 少ない単語補充
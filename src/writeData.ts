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
        await db.collection("words").add({
          あ: [{desc:"アーモンド",word:"あーもんど"},{desc:"愛",word:"あい"},{desc:"挨拶",word:"あいさつ"},{desc:"アイス",word:"あいす"},{desc:"合図",word:"あいず"},{desc:"アイスティー",word:"あいすてぃー"},{desc:"アイスホッケー",word:"あいすほっけー"},{desc:"相手",word:"あいて"},{desc:"アイデア",word:"あいであ"},{desc:"アイドル",word:"あいどる"},{desc:"アウト",word:"あうと"},{desc:"青",word:"あお"},{desc:"青虫",word:"あおむし"},{desc:"垢",word:"あか"},{desc:"赤信号",word:"あかしんごう"},{desc:"赤身",word:"あかみ"},{desc:"明かり",word:"あかり"},{desc:"空地",word:"あきち"},{desc:"灰汁",word:"あく"},{desc:"悪事",word:"あくじ"},{desc:"悪質",word:"あくしつ"},{desc:"握手",word:"あくしゅ"},{desc:"悪党",word:"あくとう"}],
          い: [{desc:"言い伝え",word:"いいつたえ"},{desc:"言い訳",word:"いいわけ"},{desc:"委員会",word:"いいんかい"},{desc:"委員長",word:"いいんちょう"},{desc:"家",word:"いえ"},{desc:"胃液",word:"いえき"},{desc:"家出",word:"いえで"},{desc:"硫黄",word:"いおう"},{desc:"イカ",word:"いか"},{desc:"胃潰瘍",word:"いかいよう"},{desc:"医学",word:"いがく"},{desc:"如何様",word:"いかさま"},{desc:"胃下垂",word:"いかすい"},{desc:"雷",word:"いかずち"},{desc:"烏賊墨",word:"いかすみ"},{desc:"筏",word:"いかだ"},{desc:"いかフライ",word:"いかふらい"},{desc:"胃カメラ",word:"いかめら"},{desc:"イカ焼き",word:"いかやき"},{desc:"怒り",word:"いかり"},{desc:"錨",word:"いかり"},{desc:"イカリング",word:"いかりんぐ"}],
          う: [{desc:"ウイルス",word:"ういるす"},{desc:"ウインカー",word:"ういんかー"},{desc:"ウインナー",word:"ういんなー"},{desc:"ウール",word:"うーる"},{desc:"烏竜茶",word:"うーろんちゃ"},{desc:"ウェア",word:"うぇあ"},{desc:"ウエハース",word:"うえはーす"},{desc:"ウォーキング",word:"うぉーきんぐ"},{desc:"魚座",word:"うおざ"},{desc:"ウォシュレット",word:"うぉしゅれっと"},{desc:"ウクレレ",word:"うくれれ"},{desc:"受付",word:"うけつけ"},{desc:"兎",word:"うさぎ"},{desc:"牛",word:"うし"},{desc:"牛蛙",word:"うしがえる"},{desc:"渦",word:"うず"},{desc:"薄型テレビ",word:"うすがたてれび"},{desc:"ウスターソース",word:"うすたーそーす"},{desc:"ウズラ",word:"うずら"},{desc:"右折",word:"うせつ"},{desc:"嘘",word:"うそ"}],
          え: [{desc:"エアバッグ",word:"えあばっぐ"},{desc:"エアメール",word:"えあめーる"},{desc:"エアロビクス",word:"えあろびくす"},{desc:"エイ",word:"えい"},{desc:"映画",word:"えいが"},{desc:"英会話",word:"えいかいわ"},{desc:"映画監督",word:"えいがかんとく"},{desc:"永久歯",word:"えいきゅうし"},{desc:"英語",word:"えいご"},{desc:"衛星",word:"えいせい"},{desc:"衛星",word:"えいせい"},{desc:"映像",word:"えいぞう"},{desc:"エイプリルフール",word:"えいぷりるふーる"},{desc:"エリマキトカゲ",word:"えいまきとかげ"},{desc:"英雄",word:"えいゆう"},{desc:"栄養",word:"えいよう"},{desc:"AI",word:"えーあい"},{desc:"A型",word:"えーがた"},{desc:"AB型",word:"えーびーがた"},{desc:"笑顔",word:"えがお"},],
          お: [{desc:"オアシス",word:"おあしす"},{desc:"追打ち",word:"おいうち"},{desc:"追い風",word:"おいかぜ"},{desc:"生い立ち",word:"おいたち"},{desc:"オイル",word:"おいる"},{desc:"お祝い",word:"おいわい"},{desc:"王国",word:"おうこく"},{desc:"王様",word:"おうさま"},{desc:"王女",word:"おうじょ"},{desc:"王手",word:"おうて"},{desc:"お絵描き",word:"おえかき"},{desc:"大雨",word:"おおあめ"},{desc:"大荒れ",word:"おおあれ"},{desc:"大阪",word:"おおさか"},{desc:"大勢",word:"おおぜい"},{desc:"大空",word:"おおぞら"},{desc:"大部屋",word:"おおべや"},{desc:"丘",word:"おか"},{desc:"お金",word:"おかね"},{desc:"沖縄",word:"おきなわ"},{desc:"置物",word:"おきもの"},{desc:"屋外",word:"おくがい"},],

          か: [{desc:"カード", word:"かーど"},{desc:"カーナビ", word:"かーなび"},{desc:"カーペット", word:"かーぺっと"},{desc:"飼い犬", word:"かいいぬ"},{desc:"絵画", word:"かいが"},{desc:"海外", word:"かいがい"},{desc:"貝殻", word:"かいがら"},{desc:"解決", word:"かいけつ"},{desc:"蚕", word:"かいこ"},{desc:"会社", word:"かいしゃ"},{desc:"怪獣", word:"かいじゅう"},{desc:"会場", word:"かいじょう"},{desc:"海水", word:"かいすい"},{desc:"海水浴", word:"かいすいよく"},{desc:"回数", word:"かいすう"},{desc:"解説", word:"かいせつ"},{desc:"海草", word:"かいそう"},{desc:"改造", word:"かいぞう"},{desc:"海賊", word:"かいぞく"},{desc:"懐中電灯", word:"かいちゅうでんとう"},],
          き: [{desc:"気合",word:"きあい"},{desc:"黄色",word:"きいろ"},{desc:"キウイ",word:"きうい"},{desc:"記憶",word:"きおく"},{desc:"機械",word:"きかい"},{desc:"着替え",word:"きがえ"},{desc:"機関車",word:"きかんしゃ"},{desc:"利き手",word:"ききて"},{desc:"気球",word:"ききゅう"},{desc:"菊",word:"きく"},{desc:"着ぐるみ",word:"きぐるみ"},{desc:"記号",word:"きごう"},{desc:"木こり",word:"きこり"},{desc:"記事",word:"きじ"},{desc:"汽車",word:"きしゃ"},],
          く: [{desc:"食いしん坊",word:"くいしんぼう"},{desc:"クイズ",word:"くいず"},{desc:"食逃げ",word:"くいにげ"},{desc:"食い物",word:"くいもの"},{desc:"空気",word:"くうき"},{desc:"空港",word:"くうこう"},{desc:"空想",word:"くうそう"},{desc:"空中",word:"くうちゅう"},{desc:"空白",word:"くうはく"},{desc:"空腹",word:"くうふく"},{desc:"クーラー",word:"くーらー"},{desc:"九月",word:"くがつ"},{desc:"茎",word:"くき"},{desc:"釘",word:"くぎ"}],
          け: [{desc:"毛穴",word:"けあな"},{desc:"経営",word:"けいえい"},{desc:"警戒",word:"けいかい"},{desc:"計画",word:"けいかく"},{desc:"景気",word:"けいき"},{desc:"稽古",word:"けいこ"},{desc:"敬語",word:"けいご"},{desc:"蛍光灯",word:"けいこうとう"},{desc:"警告",word:"けいこく"},{desc:"警察",word:"けいさつ"},{desc:"警察署",word:"けいさつしょ"},{desc:"計算機",word:"けいさんき"},{desc:"軽自動車",word:"けいじどうしゃ"},],
          こ: [{desc:"コアラ",word:"こあら"},{desc:"鯉",word:"こい"},{desc:"高校",word:"こうこう"},{desc:"広告",word:"こうこく"},{desc:"工作",word:"こうさく"},{desc:"子牛",word:"こうし"},{desc:"公式",word:"こうしき"},{desc:"校舎",word:"こうしゃ"},{desc:"高速道路",word:"こうそくどうろ"},{desc:"紅茶",word:"こうちゃ"},{desc:"校庭",word:"こうてい"},{desc:"行動",word:"こうどう"},{desc:"校内",word:"こうない"},{desc:"購入",word:"こうにゅう"},],

          さ: [{desc:"サーカス",word:"さーかす"},{desc:"サービス",word:"さーびす"},{desc:"再会",word:"さいかい"},{desc:"災害",word:"さいがい"},{desc:"最強",word:"さいきょう"},{desc:"細工",word:"さいく"},{desc:"最後",word:"さいご"},{desc:"最高",word:"さいこう"},{desc:"サイコパス",word:"さいこぱす"},{desc:"サイコロ",word:"さいころ"},{desc:"最初",word:"さいしょ"},{desc:"サイズ",word:"さいず"},{desc:"賽銭箱",word:"さいせんばこ"},{desc:"サイダー",word:"さいだー"}],
          し: [{desc:"試合",word:"しあい"},{desc:"飼育",word:"しいく"},{desc:"シーソー",word:"しーそー"},{desc:"椎茸",word:"しいたけ"},{desc:"シートベルト",word:"しーとべると"},{desc:"塩",word:"しお"},{desc:"塩焼き",word:"しおやき"},{desc:"鹿",word:"しか"},{desc:"司会",word:"しかい"},{desc:"視界",word:"しかい"},{desc:"市外",word:"しがい"},{desc:"四角",word:"しかく"},{desc:"資格",word:"しかく"},{desc:"仕掛け",word:"しかけ"}],
          す: [{desc:"巣穴",word:"すあな"},{desc:"スイーツ",word:"すいーつ"},{desc:"水泳",word:"すいえい"},{desc:"すいか",word:"すいか"},{desc:"水車",word:"すいしゃ"},{desc:"スイス",word:"すいす"},{desc:"彗星",word:"すいせい"},{desc:"水素",word:"すいそ"},{desc:"水槽",word:"すいそう"},{desc:"スイッチ",word:"すいっち"},],
          せ: [{desc:"成果",word:"せいか"},{desc:"聖火",word:"せいか"},{desc:"正解",word:"せいかい"},{desc:"正確",word:"せいかく"},{desc:"性格",word:"せいかく"},{desc:"生活",word:"せいかつ"},{desc:"正義",word:"せいぎ"},{desc:"生後",word:"せいご"},{desc:"成功",word:"せいこう"},{desc:"星座",word:"せいざ"}],
          そ: [{desc:"双眼鏡",word:"そうがんきょう"},{desc:"葬儀",word:"そうぎ"},{desc:"遭遇",word:"そうぐう"},{desc:"送迎",word:"そうげい"},{desc:"送迎バス",word:"そうげいばす"},{desc:"倉庫",word:"そうこ"},{desc:"走行",word:"そうこう"},{desc:"総合格闘技",word:"そうごうかくとうぎ"},{desc:"操作",word:"そうさ"},],

          た: [{desc:"ターゲット",word:"たーげっと"},{desc:"鯛",word:"たい"},{desc:"体当たり",word:"たいあたり"},{desc:"体育",word:"たいいく"},{desc:"体温計",word:"たいおんけい"},{desc:"大会",word:"たいかい"},{desc:"対決",word:"たいけつ"},{desc:"太鼓",word:"たいこ"},{desc:"体脂肪",word:"たいしぼう"},{desc:"タラバガニ",word:"たらばがに"},],
          ち: [{desc:"チアリーダー",word:"ちありーだー"},{desc:"地位",word:"ちい"},{desc:"地域",word:"ちいき"},{desc:"チーズ",word:"ちーず"},{desc:"チーター",word:"ちーたー"},{desc:"チーム",word:"ちーむ"},{desc:"知恵",word:"ちえ"},{desc:"チェア",word:"ちぇあ"},{desc:"チェス",word:"ちぇす"},{desc:"チョコレート",word:"ちょこれーと"}],
          つ: [{desc:"ツアー",word:"つあー"},{desc:"追跡",word:"ついせき"},{desc:"ツイッター",word:"ついったー"},{desc:"ツインテール",word:"ついんてーる"},{desc:"通学",word:"つうがく"},{desc:"通信販売",word:"つうしんはんばい"},{desc:"吊り橋",word:"つりばし"},{desc:"釣針",word:"つりばり"},{desc:"鶴",word:"つる"},{desc:"剣",word:"つるぎ"},],
          て: [{desc:"手足",word:"てあし"},{desc:"手当",word:"てあて"},{desc:"手洗",word:"てあらい"},{desc:"ティーカップ",word:"てぃーかっぷ"},{desc:"定休日",word:"ていきゅうび"},{desc:"テイクアウト",word:"ていくあうと"},{desc:"抵抗",word:"ていこう"},{desc:"亭主",word:"ていしゅ"},{desc:"手袋",word:"てぶくろ"},{desc:"テレビ",word:"てれび"},],
          と: [{desc:"トイレ",word:"といれ"},{desc:"トイレットペーパー",word:"といれっとぺーぱー"},{desc:"唐辛子",word:"とうがらし"},{desc:"陶器",word:"とうき"},{desc:"投球",word:"とうきゅう"},{desc:"闘牛",word:"とうぎゅう"},{desc:"東京タワー",word:"とうきょうたわー"},{desc:"トランプ",word:"とらんぷ"},{desc:"鳥",word:"とり"},{desc:"トンネル",word:"とんねる"}],

          な: [{desc:"ナースコール",word:"なーすこーる"},{desc:"内科",word:"ないか"},{desc:"内緒",word:"ないしょ"},{desc:"内職",word:"ないしょく"},{desc:"内臓",word:"ないぞう"},{desc:"ナイト",word:"ないと"},{desc:"ナイフ",word:"ないふ"},{desc:"内部",word:"ないぶ"},{desc:"内容",word:"ないよう"},{desc:"生菓子",word:"なまがし"}],
          に: [{desc:"臭い",word:"におい"},{desc:"二階",word:"にかい"},{desc:"似顔絵",word:"にがおえ"},{desc:"苦み",word:"にがみ"},{desc:"二期作",word:"にきさく"},{desc:"肉",word:"にく"},{desc:"逃げ場",word:"にげば"},{desc:"煮込みハンバーグ",word:"にこみはんばーぐ"},{desc:"濁り",word:"にごり"}],
          ぬ: [{desc:"縫い糸",word:"ぬいいと"},{desc:"ぬいぐるみ",word:"ぬいぐるみ"},{desc:"縫い代",word:"ぬいしろ"},{desc:"縫い針",word:"ぬいばり"},{desc:"縫い目",word:"ぬいめ"},{desc:"縫い物",word:"ぬいもの"},{desc:"ヌー",word:"ぬー"},{desc:"ヌードル",word:"ぬーどる"},{desc:"糠",word:"ぬか"}],
          ね: [{desc:"値上がり",word:"ねあがり"},{desc:"値上げ",word:"ねあげ"},{desc:"寝汗",word:"ねあせ"},{desc:"寝息",word:"ねいき"},{desc:"ネイルアート",word:"ねいるあーと"},{desc:"音色",word:"ねいろ"},{desc:"願い事",word:"ねがいごと"},{desc:"寝返り",word:"ねがえり"},{desc:"寝顔",word:"ねがお"}],
          の: [{desc:"ノイズ",word:"のいず"},{desc:"野苺",word:"のいちご"},{desc:"脳",word:"のう"},{desc:"農業",word:"のうぎょう"},{desc:"ノート",word:"のーと"},{desc:"野原",word:"のはら"},{desc:"飲み会",word:"のみかい"},{desc:"海苔巻き",word:"のりまき"},{desc:"乗り物",word:"のりもの"},{desc:"ノルウエー",word:"のるうぇー"},],

          は: [{desc:"ハート",word:"はーと"},{desc:"ハーモニカ",word:"はーもにか"},{desc:"灰",word:"はい"},{desc:"肺",word:"はい"}],
          ひ: [{desc:"贔屓",word:"ひいき"},{desc:"ヒーター",word:"ひーたー"},{desc:"ヒーロー",word:"ひーろー"},{desc:"冷え症",word:"ひえしょう"},{desc:"控室",word:"ひかえしつ"}],
          ふ: [{desc:"ファイア",word:"ふぁいあ"},{desc:"ファイト",word:"ふぁいと"},{desc:"ファイナル",word:"ふぁいなる"},{desc:"ファイル",word:"ふぁいる"},{desc:"ファスナー",word:"ふぁすなー"},{desc:"ファックス",word:"ふぁっくす"}],
          へ: [{desc:"ヘアアクセサリー",word:"へああくせさりー"},{desc:"陛下",word:"へいか"},{desc:"閉会式",word:"へいかいしき"},{desc:"兵器",word:"へいき"},{desc:"平均台",word:"へいきんだい"},{desc:"平行四辺形",word:"へいこうしへんけい"}],
          ほ: [{desc:"保育士",word:"ほいくし"},{desc:"ホイッスル",word:"ほいっする"},{desc:"ホイップ",word:"ほいっぷ"},{desc:"ホイル焼き",word:"ほいるやき"},{desc:"包囲",word:"ほうい"},{desc:"方向音痴",word:"ほうこうおんち"},{desc:"芳香剤",word:"ほうこうざい"},{desc:"報告",word:"ほうこく"}],

          ま: [{desc:"麻婆豆腐",word:"まーぼーどうふ"},{desc:"舞妓",word:"まいこ"},{desc:"迷子",word:"まいご"},{desc:"舞茸",word:"まいたけ"},{desc:"マイナス",word:"まいなす"},{desc:"マウス",word:"まうす"},{desc:"マウンテンバイク",word:"まうんてんばいく"},{desc:"前置き",word:"まえおき"}],
          み: [{desc:"ミートボール",word:"みーとぼーる"},{desc:"ミイラ",word:"みいら"},{desc:"身動き",word:"みうごき"},{desc:"身内",word:"みうち"},{desc:"見送り",word:"みおくり"},{desc:"見落とし",word:"みおとし"},{desc:"見覚え",word:"みおぼえ"},{desc:"見返り",word:"みかえり"},{desc:"身代わり",word:"みがわり"}],
          む: [{desc:"無意識",word:"むいしき"},{desc:"ムード",word:"むーど"},{desc:"ムードメーカー",word:"むーどめーかー"},{desc:"ムービー",word:"むーびー"},{desc:"ムール貝",word:"むーるがい"},{desc:"ムーンウォーク",word:"むーんうぉーく"},{desc:"無塩バター",word:"むえんばたー"},{desc:"向かい風",word:"むかいかぜ"},],
          め: [{desc:"目当て",word:"めあて"},{desc:"姪",word:"めい"},{desc:"冥王星",word:"めいおうせい"},{desc:"名画",word:"めいが"},{desc:"銘柄",word:"めいがら"},{desc:"迷宮",word:"めいきゅう"},{desc:"名曲",word:"めいきょく"},{desc:"メイク",word:"めいく"},{desc:"名刺",word:"めいし"},],
          も: [{desc:"モアイ",word:"もあい"},{desc:"燃えるゴミ",word:"もえるごみ"},{desc:"モーター",word:"もーたー"},{desc:"目撃",word:"もくげき"},{desc:"木材",word:"もくざい"},{desc:"目次",word:"もくじ"},{desc:"木星",word:"もくせい"}],

          や: [{desc:"刃",word:"やいば"},{desc:"八重歯",word:"やえば"},{desc:"八百屋",word:"やおや"},{desc:"野外",word:"やがい"},{desc:"野外活動",word:"やがいかつどう"},{desc:"館",word:"やかた"},{desc:"屋形船",word:"やかたぶね"},{desc:"ヤギ",word:"やぎ"}],
          ゆ: [{desc:"遊園地",word:"ゆうえんち"},{desc:"誘拐",word:"ゆうかい"},{desc:"夕方",word:"ゆうがた"},{desc:"ユーカリ",word:"ゆーかり"},{desc:"勇気",word:"ゆうき"},{desc:"遊具",word:"ゆうぐ"},{desc:"夕暮れ",word:"ゆうぐれ"},{desc:"勇者",word:"ゆうしゃ"},],
          よ: [{desc:"洋画",word:"ようが"},{desc:"妖怪",word:"ようかい"},{desc:"洋式トイレ",word:"ようしきといれ"},{desc:"妖精",word:"ようせい"},{desc:"幼虫",word:"ようちゅう"},{desc:"腰痛",word:"ようつう"},{desc:"洋服",word:"ようふく"},{desc:"羊毛",word:"ようもう"},],
          
          ら: [{desc:"ラーメン屋",word:"らーめんや"},{desc:"ラー油",word:"らーゆ"},{desc:"雷雨",word:"らいう"},{desc:"来月",word:"らいげつ"},{desc:"来週",word:"らいしゅう"},{desc:"ライス",word:"らいす"},{desc:"来世",word:"らいせ"},{desc:"ライセンス",word:"らいせんす"},],
          り: [{desc:"リアカー",word:"りあかー"},{desc:"料理教室",word:"りょうりきょうしつ"},{desc:"リーグ",word:"りーぐ"},{desc:"リーダー",word:"りーだー"},{desc:"利益",word:"りえき"},{desc:"理科",word:"りか"},{desc:"理解",word:"りかい"},{desc:"陸",word:"りく"}],
          る: [{desc:"ルアー",word:"るあー"},{desc:"ルーズリーフ",word:"るーずりーふ"},{desc:"ルーター",word:"るーたー"},{desc:"ルーツ",word:"るーつ"},{desc:"ルート",word:"るーと"},{desc:"ルービックキューブ",word:"るーびっくきゅーぶ"},{desc:"ルーマニア",word:"るーまにあ"},],
          れ: [{desc:"レアチーズケーキ",word:"れあちーずけーき"},{desc:"霊",word:"れい"},{desc:"レイアウト",word:"れいあうと"},{desc:"例題",word:"れいだい"},{desc:"冷凍庫",word:"れいとうこ"},{desc:"霊能者",word:"れいのうしゃ"},{desc:"レインボーブリッジ",word:"れいんぼーぶりっじ"},],
          ろ: [{desc:"ロイヤルミルクティー",word:"ろいやるみるくてぃー"},{desc:"廊下",word:"ろうか"},{desc:"老人ホーム",word:"ろうじんほーむ"},{desc:"ロウソク",word:"ろうそく"},{desc:"労働",word:"ろうどう"},{desc:"ローキック",word:"ろーきっく"},{desc:"ロースハム",word:"ろーすはむ"},],

          わ: [{desc:"ワールドカップ",word:"わーるどかっぷ"},{desc:"ワイシャツ",word:"わいしゃつ"},{desc:"ワイドショー",word:"わいどしょー"},{desc:"ワイパー",word:"わいぱー"},{desc:"Wi-Fi",word:"わいふ"},{desc:"ワイヤ－",word:"わいやー"},{desc:"ワイヤレス",word:"わいやれす"},{desc:"賄賂",word:"わいろ"}],


        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((err) => {
          console.error("Error writting document:", err);
        })
    })();
}

export default writeData;


// TODO 単語写す https://xn--68j8a5fb.net/
import React from 'react';
import firebase from "firebase";

const writeData = () => {
    (async () => {
        const firebaseConfig = {
          apiKey: "AIzaSyCOIXzz4vmffj94FLMWhEX0mE4t0UMTsxc",
          authDomain: "wordchaingame-3e0fc.firebaseapp.com",
          projectId: "wordchaingame-3e0fc",
          storageBucket: "wordchaingame-3e0fc.appspot.com",
          messagingSenderId: "307489909046",
          appId: "1:307489909046:web:4bb2441c4c44a671406b97"
        };
        const app = firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore(app);

        let docRef = db.collection("words").doc("a");
        await docRef.set({
          a: [{word:"アーモンド",pron:"あーもんど"},{word:"愛",pron:"あい"},{word:"挨拶",pron:"あいさつ"},{word:"アイス",pron:"あいす"},{word:"合図",pron:"あいず"},{word:"アイスティー",pron:"あいすてぃー"},{word:"アイスホッケー",pron:"あいすほっけー"},{word:"相手",pron:"あいて"},{word:"アイデア",pron:"あいであ"},{word:"アイドル",pron:"あいどる"},{word:"アウト",pron:"あうと"},{word:"青",pron:"あお"},{word:"青虫",pron:"あおむし"},{word:"垢",pron:"あか"},{word:"赤信号",pron:"あかしんごう"},{word:"赤身",pron:"あかみ"},{word:"明かり",pron:"あかり"},{word:"空地",pron:"あきち"},{word:"灰汁",pron:"あく"},{word:"悪事",pron:"あくじ"},{word:"悪質",pron:"あくしつ"},{word:"握手",pron:"あくしゅ"},{word:"悪党",pron:"あくとう"}],
          i: [{word:"言い伝え",pron:"いいつたえ"},{word:"言い訳",pron:"いいわけ"},{word:"委員会",pron:"いいんかい"},{word:"委員長",pron:"いいんちょう"},{word:"家",pron:"いえ"},{word:"胃液",pron:"いえき"},{word:"家出",pron:"いえで"},{word:"硫黄",pron:"いおう"},{word:"イカ",pron:"いか"},{word:"胃潰瘍",pron:"いかいよう"},{word:"医学",pron:"いがく"},{word:"如何様",pron:"いかさま"},{word:"胃下垂",pron:"いかすい"},{word:"雷",pron:"いかずち"},{word:"烏賊墨",pron:"いかすみ"},{word:"筏",pron:"いかだ"},{word:"いかフライ",pron:"いかふらい"},{word:"胃カメラ",pron:"いかめら"},{word:"イカ焼き",pron:"いかやき"},{word:"怒り",pron:"いかり"},{word:"錨",pron:"いかり"},{word:"イカリング",pron:"いかりんぐ"},],
          u: [{word:"ウイルス",pron:"ういるす"},{word:"ウインカー",pron:"ういんかー"},{word:"ウインナー",pron:"ういんなー"},{word:"ウール",pron:"うーる"},{word:"烏竜茶",pron:"うーろんちゃ"},{word:"ウェア",pron:"うぇあ"},{word:"ウエハース",pron:"うえはーす"},{word:"ウォーキング",pron:"うぉーきんぐ"},{word:"魚座",pron:"うおざ"},{word:"ウォシュレット",pron:"うぉしゅれっと"},{word:"ウクレレ",pron:"うくれれ"},{word:"受付",pron:"うけつけ"},{word:"兎",pron:"うさぎ"},{word:"牛",pron:"うし"},{word:"牛蛙",pron:"うしがえる"},{word:"渦",pron:"うず"},{word:"薄型テレビ",pron:"うすがたてれび"},{word:"ウスターソース",pron:"うすたーそーす"},{word:"ウズラ",pron:"うずら"},{word:"右折",pron:"うせつ"},{word:"嘘",pron:"うそ"}],
          e: [{word:"エアバッグ",pron:"えあばっぐ"},{word:"エアメール",pron:"えあめーる"},{word:"エアロビクス",pron:"えあろびくす"},{word:"エイ",pron:"えい"},{word:"映画",pron:"えいが"},{word:"英会話",pron:"えいかいわ"},{word:"映画監督",pron:"えいがかんとく"},{word:"永久歯",pron:"えいきゅうし"},{word:"英語",pron:"えいご"},{word:"衛星",pron:"えいせい"},{word:"衛星",pron:"えいせい"},{word:"映像",pron:"えいぞう"},{word:"エイプリルフール",pron:"えいぷりるふーる"},{word:"エリマキトカゲ",pron:"えいまきとかげ"},{word:"英雄",pron:"えいゆう"},{word:"栄養",pron:"えいよう"},{word:"AI",pron:"えーあい"},{word:"A型",pron:"えーがた"},{word:"AB型",pron:"えーびーがた"},{word:"笑顔",pron:"えがお"},],
          o: [{word:"オアシス",pron:"おあしす"},{word:"追打ち",pron:"おいうち"},{word:"追い風",pron:"おいかぜ"},{word:"生い立ち",pron:"おいたち"},{word:"オイル",pron:"おいる"},{word:"お祝い",pron:"おいわい"},{word:"王国",pron:"おうこく"},{word:"王様",pron:"おうさま"},{word:"王女",pron:"おうじょ"},{word:"王手",pron:"おうて"},{word:"お絵描き",pron:"おえかき"},{word:"大雨",pron:"おおあめ"},{word:"大荒れ",pron:"おおあれ"},{word:"大阪",pron:"おおさか"},{word:"大勢",pron:"おおぜい"},{word:"大空",pron:"おおぞら"},{word:"大部屋",pron:"おおべや"},{word:"丘",pron:"おか"},{word:"お金",pron:"おかね"},{word:"沖縄",pron:"おきなわ"},{word:"置物",pron:"おきもの"},{word:"屋外",pron:"おくがい"},],
        });

        docRef = db.collection("words").doc("k");
        await docRef.set({
          a: [{word:"カード", pron:"かーど"},{word:"カーナビ", pron:"かーなび"},{word:"カーペット", pron:"かーぺっと"},{word:"貝", pron:"かい"},{word:"飼い犬", pron:"かいいぬ"},{word:"絵画", pron:"かいが"},{word:"海外", pron:"かいがい"},{word:"貝殻", pron:"かいがら"},{word:"解決", pron:"かいけつ"},{word:"蚕", pron:"かいこ"},{word:"会社", pron:"かいしゃ"},{word:"怪獣", pron:"かいじゅう"},{word:"会場", pron:"かいじょう"},{word:"海水", pron:"かいすい"},{word:"海水浴", pron:"かいすいよく"},{word:"回数", pron:"かいすう"},{word:"解説", pron:"かいせつ"},{word:"海草", pron:"かいそう"},{word:"改造", pron:"かいぞう"},{word:"海賊", pron:"かいぞく"},{word:"懐中電灯", pron:"かいちゅうでんとう"},],
          i: [{word:"気合",pron:"きあい"},{word:"黄色",pron:"きいろ"},{word:"キウイ",pron:"きうい"},{word:"記憶",pron:"きおく"},{word:"機械",pron:"きかい"},{word:"着替え",pron:"きがえ"},{word:"機関車",pron:"きかんしゃ"},{word:"利き手",pron:"ききて"},{word:"気球",pron:"ききゅう"},{word:"菊",pron:"きく"},{word:"着ぐるみ",pron:"きぐるみ"},{word:"記号",pron:"きごう"},{word:"木こり",pron:"きこり"},{word:"記事",pron:"きじ"},{word:"汽車",pron:"きしゃ"},],
          u: [{word:"食いしん坊",pron:"くいしんぼう"},{word:"クイズ",pron:"くいず"},{word:"食逃げ",pron:"くいにげ"},{word:"食い物",pron:"くいもの"},{word:"空気",pron:"くうき"},{word:"空港",pron:"くうこう"},{word:"空想",pron:"くうそう"},{word:"空中",pron:"くうちゅう"},{word:"空白",pron:"くうはく"},{word:"空腹",pron:"くうふく"},{word:"クーラー",pron:"くーらー"},{word:"九月",pron:"くがつ"},{word:"茎",pron:"くき"},{word:"釘",pron:"くぎ"}],
          e: [{word:"毛穴",pron:"けあな"},{word:"経営",pron:"けいえい"},{word:"警戒",pron:"けいかい"},{word:"計画",pron:"けいかく"},{word:"景気",pron:"けいき"},{word:"稽古",pron:"けいこ"},{word:"敬語",pron:"けいご"},{word:"蛍光灯",pron:"けいこうとう"},{word:"警告",pron:"けいこく"},{word:"警察",pron:"けいさつ"},{word:"警察署",pron:"けいさつしょ"},{word:"計算機",pron:"けいさんき"},{word:"軽自動車",pron:"けいじどうしゃ"},],
          o: [{word:"コアラ",pron:"こあら"},{word:"鯉",pron:"こい"},{word:"高校",pron:"こうこう"},{word:"広告",pron:"こうこく"},{word:"工作",pron:"こうさく"},{word:"子牛",pron:"こうし"},{word:"公式",pron:"こうしき"},{word:"校舎",pron:"こうしゃ"},{word:"高速道路",pron:"こうそくどうろ"},{word:"紅茶",pron:"こうちゃ"},{word:"校庭",pron:"こうてい"},{word:"行動",pron:"こうどう"},{word:"校内",pron:"こうない"},{word:"購入",pron:"こうにゅう"},],
        })

        docRef = db.collection("words").doc("s");
        await docRef.set({
          a: [{word:"サーカス",pron:"さーかす"},{word:"サービス",pron:"さーびす"},{word:"再会",pron:"さいかい"},{word:"災害",pron:"さいがい"},{word:"最強",pron:"さいきょう"},{word:"細工",pron:"さいく"},{word:"最後",pron:"さいご"},{word:"最高",pron:"さいこう"},{word:"サイコパス",pron:"さいこぱす"},{word:"サイコロ",pron:"さいころ"},{word:"最初",pron:"さいしょ"},{word:"サイズ",pron:"さいず"},{word:"賽銭箱",pron:"さいせんばこ"},{word:"サイダー",pron:"さいだー"}],
          i: [{word: "試合",pron: "しあい"},{word: "飼育",pron: "しいく"},{word: "シーソー",pron: "しーそー"},{word: "椎茸",pron: "しいたけ"},{word: "シートベルト",pron: "しーとべると"},{word: "塩",pron: "しお"},{word: "塩焼き",pron: "しおやき"},{word: "鹿",pron: "しか"},{word: "司会",pron: "しかい"},{word: "視界",pron: "しかい"},{word: "市外",pron: "しがい"},{word: "四角",pron: "しかく"},{word: "資格",pron: "しかく"},{word: "仕掛け",pron: "しかけ"}],
          u: [{word:"巣穴",pron:"すあな"},{word:"スイーツ",pron:"すいーつ"},{word:"水泳",pron:"すいえい"},{word:"すいか",pron:"すいか"},{word:"水車",pron:"すいしゃ"},{word:"スイス",pron:"すいす"},{word:"彗星",pron:"すいせい"},{word:"水素",pron:"すいそ"},{word:"水槽",pron:"すいそう"},{word:"スイッチ",pron:"すいっち"},],
          e: [{word:"成果",pron:"せいか"},{word:"聖火",pron:"せいか"},{word:"正解",pron:"せいかい"},{word:"正確",pron:"せいかく"},{word:"性格",pron:"せいかく"},{word:"生活",pron:"せいかつ"},{word:"正義",pron:"せいぎ"},{word:"生後",pron:"せいご"},{word:"成功",pron:"せいこう"},{word:"星座",pron:"せいざ"}],
          o: [{word:"双眼鏡",pron:"そうがんきょう"},{word:"葬儀",pron:"そうぎ"},{word:"遭遇",pron:"そうぐう"},{word:"送迎",pron:"そうげい"},{word:"送迎バス",pron:"そうげいばす"},{word:"倉庫",pron:"そうこ"},{word:"走行",pron:"そうこう"},{word:"総合格闘技",pron:"そうごうかくとうぎ"},{word:"操作",pron:"そうさ"},]
        });

        docRef = db.collection("words").doc("t");
        await docRef.set({
            a: [{word:"ターゲット",pron:"たーげっと"},{word:"鯛",pron:"たい"},{word:"体当たり",pron:"たいあたり"},{word:"体育",pron:"たいいく"},{word:"体温計",pron:"たいおんけい"},{word:"大会",pron:"たいかい"},{word:"対決",pron:"たいけつ"},{word:"太鼓",pron:"たいこ"},{word:"体脂肪",pron:"たいしぼう"},{word:"タラバガニ",pron:"たらばがに"},],
            i: [{word:"チアリーダー",pron:"ちありーだー"},{word:"地位",pron:"ちい"},{word:"地域",pron:"ちいき"},{word:"チーズ",pron:"ちーず"},{word:"チーター",pron:"ちーたー"},{word:"チーム",pron:"ちーむ"},{word:"知恵",pron:"ちえ"},{word:"チェア",pron:"ちぇあ"},{word:"チェス",pron:"ちぇす"},{word:"チョコレート",pron:"ちょこれーと"}],
            u: [{word:"ツアー",pron:"つあー"},{word:"追跡",pron:"ついせき"},{word:"ツイッター",pron:"ついったー"},{word:"ツインテール",pron:"ついんてーる"},{word:"通学",pron:"つうがく"},{word:"通信販売",pron:"つうしんはんばい"},{word:"吊り橋",pron:"つりばし"},{word:"釣針",pron:"つりばり"},{word:"鶴",pron:"つる"},{word:"剣",pron:"つるぎ"},],
            e: [{word:"手足",pron:"てあし"},{word:"手当",pron:"てあて"},{word:"手洗",pron:"てあらい"},{word:"ティーカップ",pron:"てぃーかっぷ"},{word:"定休日",pron:"ていきゅうび"},{word:"テイクアウト",pron:"ていくあうと"},{word:"抵抗",pron:"ていこう"},{word:"亭主",pron:"ていしゅ"},{word:"手袋",pron:"てぶくろ"},{word:"テレビ",pron:"てれび"},],
            o: [{word:"トイレ",pron:"といれ"},{word:"トイレットペーパー",pron:"といれっとぺーぱー"},{word:"唐辛子",pron:"とうがらし"},{word:"陶器",pron:"とうき"},{word:"投球",pron:"とうきゅう"},{word:"闘牛",pron:"とうぎゅう"},{word:"東京タワー",pron:"とうきょうたわー"},{word:"トランプ",pron:"とらんぷ"},{word:"鳥",pron:"とり"},{word:"トンネル",pron:"とんねる"}],
        });

        docRef = db.collection("words").doc("n");
        await docRef.set({
            a: [{word:"ナースコール",pron:"なーすこーる"},{word:"内科",pron:"ないか"},{word:"内緒",pron:"ないしょ"},{word:"内職",pron:"ないしょく"},{word:"内臓",pron:"ないぞう"},{word:"ナイト",pron:"ないと"},{word:"ナイフ",pron:"ないふ"},{word:"内部",pron:"ないぶ"},{word:"内容",pron:"ないよう"},{word:"生菓子",pron:"なまがし"}],
            i: [{word:"臭い",pron:"におい"},{word:"二階",pron:"にかい"},{word:"似顔絵",pron:"にがおえ"},{word:"苦み",pron:"にがみ"},{word:"二期作",pron:"にきさく"},{word:"肉",pron:"にく"},{word:"逃げ場",pron:"にげば"},{word:"煮込みハンバーグ",pron:"にこみはんばーぐ"},{word:"濁り",pron:"にごり"}],
            u: [{word:"縫い糸",pron:"ぬいいと"},{word:"ぬいぐるみ",pron:"ぬいぐるみ"},{word:"縫い代",pron:"ぬいしろ"},{word:"縫い針",pron:"ぬいばり"},{word:"縫い目",pron:"ぬいめ"},{word:"縫い物",pron:"ぬいもの"},{word:"ヌー",pron:"ぬー"},{word:"ヌードル",pron:"ぬーどる"},{word:"糠",pron:"ぬか"}],
            e: [{word:"値上がり",pron:"ねあがり"},{word:"値上げ",pron:"ねあげ"},{word:"寝汗",pron:"ねあせ"},{word:"寝息",pron:"ねいき"},{word:"ネイルアート",pron:"ねいるあーと"},{word:"音色",pron:"ねいろ"},{word:"願い事",pron:"ねがいごと"},{word:"寝返り",pron:"ねがえり"},{word:"寝顔",pron:"ねがお"}],
            o: [{word:"ノイズ",pron:"のいず"},{word:"野苺",pron:"のいちご"},{word:"脳",pron:"のう"},{word:"農業",pron:"のうぎょう"},{word:"ノート",pron:"のーと"},{word:"野原",pron:"のはら"},{word:"飲み会",pron:"のみかい"},{word:"海苔巻き",pron:"のりまき"},{word:"乗り物",pron:"のりもの"},{word:"ノルウエー",pron:"のるうぇー"},],
        })

        docRef = db.collection("words").doc("h");
        await docRef.set({
          a: [{word:"ハート",pron:"はーと"},{word:"ハーモニカ",pron:"はーもにか"},{word:"灰",pron:"はい"},{word:"肺",pron:"はい"}],
          i: [{word:"贔屓",pron:"ひいき"},{word:"ヒーター",pron:"ひーたー"},{word:"ヒーロー",pron:"ひーろー"},{word:"冷え症",pron:"ひえしょう"},{word:"控室",pron:"ひかえしつ"}],
          u: [{word:"ファイア",pron:"ふぁいあ"},{word:"ファイト",pron:"ふぁいと"},{word:"ファイナル",pron:"ふぁいなる"},{word:"ファイル",pron:"ふぁいる"},{word:"ファスナー",pron:"ふぁすなー"},{word:"ファックス",pron:"ふぁっくす"}],
          e: [{word:"ヘアアクセサリー",pron:"へああくせさりー"},{word:"陛下",pron:"へいか"},{word:"閉会式",pron:"へいかいしき"},{word:"兵器",pron:"へいき"},{word:"平均台",pron:"へいきんだい"},{word:"平行四辺形",pron:"へいこうしへんけい"}],
          o: [{word:"保育士",pron:"ほいくし"},{word:"ホイッスル",pron:"ほいっする"},{word:"ホイップ",pron:"ほいっぷ"},{word:"ホイル焼き",pron:"ほいるやき"},{word:"包囲",pron:"ほうい"},{word:"方向音痴",pron:"ほうこうおんち"},{word:"芳香剤",pron:"ほうこうざい"},{word:"報告",pron:"ほうこく"}],
        })

        docRef = db.collection("words").doc("m");
        await docRef.set({
          a: [{word:"麻婆豆腐",pron:"まーぼーどうふ"},{word:"舞妓",pron:"まいこ"},{word:"迷子",pron:"まいご"},{word:"舞茸",pron:"まいたけ"},{word:"マイナス",pron:"まいなす"},{word:"マウス",pron:"まうす"},{word:"マウンテンバイク",pron:"まうんてんばいく"},{word:"前置き",pron:"まえおき"}],
          i: [{word:"ミートボール",pron:"みーとぼーる"},{word:"ミイラ",pron:"みいら"},{word:"身動き",pron:"みうごき"},{word:"身内",pron:"みうち"},{word:"見送り",pron:"みおくり"},{word:"見落とし",pron:"みおとし"},{word:"見覚え",pron:"みおぼえ"},{word:"見返り",pron:"みかえり"},{word:"身代わり",pron:"みがわり"}],
          u: [{word:"無意識",pron:"むいしき"},{word:"ムード",pron:"むーど"},{word:"ムードメーカー",pron:"むーどめーかー"},{word:"ムービー",pron:"むーびー"},{word:"ムール貝",pron:"むーるがい"},{word:"ムーンウォーク",pron:"むーんうぉーく"},{word:"無塩バター",pron:"むえんばたー"},{word:"向かい風",pron:"むかいかぜ"},],
          e: [{word:"目当て",pron:"めあて"},{word:"姪",pron:"めい"},{word:"冥王星",pron:"めいおうせい"},{word:"名画",pron:"めいが"},{word:"銘柄",pron:"めいがら"},{word:"迷宮",pron:"めいきゅう"},{word:"名曲",pron:"めいきょく"},{word:"メイク",pron:"めいく"},{word:"名刺",pron:"めいし"},],
          o: [{word:"モアイ",pron:"もあい"},{word:"燃えるゴミ",pron:"もえるごみ"},{word:"モーター",pron:"もーたー"},{word:"目撃",pron:"もくげき"},{word:"木材",pron:"もくざい"},{word:"目次",pron:"もくじ"},{word:"木星",pron:"もくせい"}],
        });

        docRef = db.collection("words").doc("y");
        await docRef.set({
          a: [{word:"刃",pron:"やいば"},{word:"八重歯",pron:"やえば"},{word:"八百屋",pron:"やおや"},{word:"野外",pron:"やがい"},{word:"野外活動",pron:"やがいかつどう"},{word:"館",pron:"やかた"},{word:"屋形船",pron:"やかたぶね"},{word:"ヤギ",pron:"やぎ"}],
          u: [{word:"遊園地",pron:"ゆうえんち"},{word:"誘拐",pron:"ゆうかい"},{word:"夕方",pron:"ゆうがた"},{word:"ユーカリ",pron:"ゆーかり"},{word:"勇気",pron:"ゆうき"},{word:"遊具",pron:"ゆうぐ"},{word:"夕暮れ",pron:"ゆうぐれ"},{word:"勇者",pron:"ゆうしゃ"},],
          o: [{word:"洋画",pron:"ようが"},{word:"妖怪",pron:"ようかい"},{word:"洋式トイレ",pron:"ようしきといれ"},{word:"妖精",pron:"ようせい"},{word:"幼虫",pron:"ようちゅう"},{word:"腰痛",pron:"ようつう"},{word:"洋服",pron:"ようふく"},{word:"羊毛",pron:"ようもう"},],
        })

        docRef = db.collection("words").doc("r");
        await docRef.set({
          a: [{word:"ラーメン屋",pron:"らーめんや"},{word:"ラー油",pron:"らーゆ"},{word:"雷雨",pron:"らいう"},{word:"来月",pron:"らいげつ"},{word:"来週",pron:"らいしゅう"},{word:"ライス",pron:"らいす"},{word:"来世",pron:"らいせ"},{word:"ライセンス",pron:"らいせんす"},],
          i: [{word:"リアカー",pron:"りあかー"},{word:"料理教室",pron:"りょうりきょうしつ"},{word:"リーグ",pron:"りーぐ"},{word:"リーダー",pron:"りーだー"},{word:"利益",pron:"りえき"},{word:"理科",pron:"りか"},{word:"理解",pron:"りかい"},{word:"陸",pron:"りく"}],
          u: [{word:"ルアー",pron:"るあー"},{word:"ルーズリーフ",pron:"るーずりーふ"},{word:"ルーター",pron:"るーたー"},{word:"ルーツ",pron:"るーつ"},{word:"ルート",pron:"るーと"},{word:"ルービックキューブ",pron:"るーびっくきゅーぶ"},{word:"ルーマニア",pron:"るーまにあ"},],
          e: [{word:"レアチーズケーキ",pron:"れあちーずけーき"},{word:"霊",pron:"れい"},{word:"レイアウト",pron:"れいあうと"},{word:"例題",pron:"れいだい"},{word:"冷凍庫",pron:"れいとうこ"},{word:"霊能者",pron:"れいのうしゃ"},{word:"レインボーブリッジ",pron:"れいんぼーぶりっじ"},],
          o: [{word:"ロイヤルミルクティー",pron:"ろいやるみるくてぃー"},{word:"廊下",pron:"ろうか"},{word:"老人ホーム",pron:"ろうじんほーむ"},{word:"ロウソク",pron:"ろうそく"},{word:"労働",pron:"ろうどう"},{word:"ローキック",pron:"ろーきっく"},{word:"ロースハム",pron:"ろーすはむ"},],
        })

        docRef = db.collection("words").doc("w");
        await docRef.set({
          a: [{word:"ワールドカップ",pron:"わーるどかっぷ"},{word:"ワイシャツ",pron:"わいしゃつ"},{word:"ワイドショー",pron:"わいどしょー"},{word:"ワイパー",pron:"わいぱー"},{word:"Wi-Fi",pron:"わいふ"},{word:"ワイヤ－",pron:"わいやー"},{word:"ワイヤレス",pron:"わいやれす"},{word:"賄賂",pron:"わいろ"}],
        })

        docRef = db.collection("words").doc("g");
        await docRef.set({
          a: [
            
          ]
        })




    })();
}

export default writeData;


// TODO 単語写す https://xn--68j8a5fb.net/
import firebase from "firebase";
import dialogs from "./dialogs";
import words from "./words";
import words2 from "./words2";
import news from "./news";
import friends from "./friends"

const writeData = () => {
    (async () => {
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

        const db = firebase.firestore();
        // await db.collection("words").doc("49cDTcDttW3Tpj3DMYA0").set(words);
        // await db.collection("words").doc("49cDTcDttW3Tpj3DMYA0").set(words2, {merge: true});

        // await db.collection("dialogs").doc("start").set(dialogs.start);
        // await db.collection("dialogs").doc("err").set(dialogs.err);
        // await db.collection("dialogs").doc("lose").set(dialogs.lose);
        // await db.collection("dialogs").doc("win").set(dialogs.win);

        // await db.collection("friends").doc("q4oGMmq2fDtBAVxxTsyE").set(friends);
        await db.collection("news").doc("icdnozZavk733qBA1Qoy").set(news);
    })();
}

export default writeData;
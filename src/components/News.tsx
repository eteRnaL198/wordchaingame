import { useEffect, useState } from "react";
import firebase from "firebase";
import { Article } from "./index";

type Content = {
  title: string,
  subTitle: string,
  day: string,
  text: string,
}

const News = () => {
  const [news, setNews] = useState<Content[]>();

  useEffect(() => {
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
    (async () => {
      const db = firebase.firestore();
      const doc = await db.collection("news").doc("icdnozZavk733qBA1Qoy");
      await doc.get().then((doc) => {
        setNews(doc.get("contents"));
      })
    })();
  }, [])

  return (
    <section className="mt-3">
      <p className="font-medium mb-3 ml-5 sticky tracking-wide text-gray-500 text-3xl">
        News
      </p>
      <div className="max-h-full">
        {(news) ? news.map((content,idx)=> (
          <Article key={idx} content={content} />
          )) : 
          <div className="bg-white m-auto mb-4 px-10 py-6 rounded-lg shadow-md w-4/5">
            <p>Now Loading ...</p>
          </div>
        }
      </div>
    </section>
  )
}

export default News;
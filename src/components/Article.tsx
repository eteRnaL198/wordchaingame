type Props = {
  content: Content
}

type Content = {
  title: string,
  subTitle: string,
  day: string,
  text: string
}

const Article = (props: Props) => {
  return (
    <article className="bg-white m-auto mb-4 px-10 py-6 rounded-lg shadow-md w-4/5">
      <div className="flex justify-between">
        <span className="font-light text-gray-600">{props.content.day}</span>
        <span className="bg-blue-400 font-bold px-3 py-1 rounded-full text-white text-sm">{props.content.subTitle}</span>
      </div>
      <div className="mt-2">
        <h3 className="font-bold mb-2 text-gray-700 text-xl">{props.content.title}</h3>
        <p className="mt-2 text-grey-600 whitespace-pre-line">{props.content.text}</p>
      </div>
    </article>
  )
}

export default Article;
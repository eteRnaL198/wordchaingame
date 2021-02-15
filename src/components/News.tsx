type Props = {
  content: Content
}

type Content = {
  title: string,
  subTitle: string,
  text: string
}

const News = (props: Props) => {
  return (
    <div className="bg-white flex m-auto mb-4 p-4 rounded shadow w-4/5">
      <div className="text-left">
        <h3 className="mb-2 text-gray-700">{props.content.title}</h3>
        <p className="text-grey-600 text-sm">{props.content.text}</p>
      </div>
    </div>
  )
}

export default News;
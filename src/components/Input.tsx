import { useState } from 'react'

type Props = {
  onPlayerWordAdd: (text: string) => void
  placeholderText?: string
};

const Input = (props: Props) => {
  const [inputWord, setInputWord] = useState("");

  const handlePlayerWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputWord(e.target.value);
  }

  const handlePlayerWordAdd = (text: string) => {
    props.onPlayerWordAdd(text);
    setInputWord("");
  }

  const handleClick = () => {
    console.log('textbox was clicked');
  }

  return (
  <div className="border-t-2 border-gray-200 flex flex-col h-1/10 justify-center px-4">
    <div className="flex">
      <input
        className="w-full focus:outline-none focus:placeholder-gray-400 mr-3 text-gray-700 placeholder-gray-600 pl-4 pr-4 bg-gray-200 rounded-full "
        onChange={handlePlayerWordChange}
        onClick={handleClick}
        placeholder={props.placeholderText}
        type="text"
        value={inputWord}
      />
      <button type="button" onClick={() => handlePlayerWordAdd(inputWord)} className="inline-flex items-center justify-center rounded-full h-12 w-16 transition duration-200 ease-in-out text-white bg-blue-400 hover:bg-blue-300 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 transform rotate-90">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      </button>
    </div>
  </div>
)
}

export default Input;


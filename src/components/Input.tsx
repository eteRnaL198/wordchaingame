import { useState } from 'react'
import '../assets/styles/Input.css';

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

  return (
    // <div className="input_wrapper">
    //   <input
    //     className="input_textBox"
    //     placeholder={props.placeholderText}
    //     type="text"
    //     value={inputWord}
    //     onChange={handlePlayerWordChange}
    //   />
    //   <button className="input_button" onClick={() => handlePlayerWordAdd(inputWord)}>SEND</button>
    // </div>
  <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 h-1/10">
    <div className="relative flex">
      <input
        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-full py-3 mr-3"
        onChange={handlePlayerWordChange}
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


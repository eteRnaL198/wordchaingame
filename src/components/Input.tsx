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
    <div className="input_wrapper">
      <input
        className="input_textBox"
        placeholder={props.placeholderText}
        type="text"
        value={inputWord}
        onChange={handlePlayerWordChange}
      />
      <button className="input_button" onClick={() => handlePlayerWordAdd(inputWord)}>SEND</button>
    </div>
  )
}

export default Input;


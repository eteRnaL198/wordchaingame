import React, { useState, useRef } from 'react'
import '../assets/styles/Input.css';

type Props = {
  onWordAdd: (text: string) => void
  lastChar?: string
};

const Input = (props: Props) => {
  const [inputWord, setInputWord] = useState("");

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputWord(e.target.value);
  }

  const handleWordAdd = (text: string) => {
    props.onWordAdd(text);
  }

  return (
    <div className="input_wrapper">
      <input
        className="input_textBox"
        placeholder={props.lastChar}
        type="text"
        value={inputWord}
        onChange={handleWordChange}
      />
      {/* <button className="input_button" onClick={() => handleWordAdd(inputWord)}>SEND</button> */}
      <button className="input_button" onClick={() => handleWordAdd(inputWord)}>SEND</button>
    </div>
  )
}

export default Input;


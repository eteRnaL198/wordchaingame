import React, { useState } from 'react'
import '../assets/styles/Input.css';

type Props = {
    onWordAdd: (text: string) => void
    lastChar: string
};

const Input = (props: Props) => {
    const [inputWord, setInputWord] = useState("");

    const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputWord(e.target.value);
    }

    const handleWordAdd = (text: string) => {
        props.onWordAdd(text);
        setInputWord("");
    }

    return (
        <div className="input_wrapper">
            <input
                className="input_textBox"
                placeholder={`「${props.lastChar}」から始まる単語を入力`}
                type="text"
                value={inputWord}
                onChange={handleWordChange}
            />
            <button className="input_button" onClick={() => handleWordAdd(inputWord)}>SEND</button>
        </div>
    )
}

export default Input;


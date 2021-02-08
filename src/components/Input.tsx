import React, { useState } from 'react'
import '../assets/styles/Input.css';

type Props = {
    onTextAdd: (text: string) => void
};

const Input = (props: Props) => {
    const [inputText, setInputText] = useState("");

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const handleTextAdd = (text: string) => {
        props.onTextAdd(text);
        setInputText("");
    }

    return (
        <div className="input_wrapper">
            <input
                className="input_textBox"
                type="text"
                value={inputText}
                onChange={handleTextChange}
            />
            <button className="input_button" onClick={() => handleTextAdd(inputText)}>SEND</button>
        </div>
    )
}

export default Input;


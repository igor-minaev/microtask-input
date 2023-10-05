import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"}
    ])

    const [title, setTitle] = useState<string>('')

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
        setTitle('')
    }

    const callBackHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name="+" callBack={callBackHandler}/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
        </div>
    );
}

export default App;

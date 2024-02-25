import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState('')

    const addMessage = (newMessageText: string) => {
        const newMessage = {message: newMessageText}
        setMessage([newMessage, ...message])
    }
    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*1 variant*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            {/* 2 variant*/}
            <Input title={title} setTitle={setTitle}/>
            <Button name="+" onClick={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;

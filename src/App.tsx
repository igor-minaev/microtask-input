import './App.css'
import {useState} from "react";
// import {FullInput} from "./components/FullInput.tsx";
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";

function App() {
    const [message, setMessage] = useState([
            {message: "message1"},
            {message: "message2"},
            {message: "message3"}
        ]
    )
    const [title, setTitle] = useState("")
    console.log(title)

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="app">
            <Input title={title} setTitle={setTitle}/>
            <Button name="+" callBack={callBackButtonHandler}/>
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((m, i) => (
                <div key={i}>{m.message}</div>
            ))}
        </div>
    )
}

export default App

import './App.css'
import {useState} from "react";
import {FullInput} from "./components/FullInput.tsx";

function App() {
    const [message, setMessage] = useState([
            {message: "message1"},
            {message: "message2"},
            {message: "message3"}
        ]
    )

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div className="app">
            <FullInput addMessage={addMessage}/>
            {message.map((m, i) => (
                <div key={i}>{m.message}</div>
            ))}
        </div>
    )
}

export default App

import {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};


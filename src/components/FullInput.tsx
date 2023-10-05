import React, {ChangeEvent, useState} from 'react';

type FullInputProsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputProsType) => {
    const [title, setTitle] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};


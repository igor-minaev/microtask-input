import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (newMessageText: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

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


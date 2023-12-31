import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}
export const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeHandler}/>
    );
};

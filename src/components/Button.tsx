import React from 'react';

type ButtonType = {
    name: string
    onClick: () => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => props.onClick()
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};


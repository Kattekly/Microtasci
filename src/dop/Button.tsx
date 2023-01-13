import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    const {callback} = props

    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickButtonHandler}>+</button>
    );
};

export default Button;
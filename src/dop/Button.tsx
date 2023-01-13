import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

const Button: React.FC<ButtonType> = (props) => {
    const {name, callback} = props

    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

export default Button;
import React, {ChangeEvent} from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
}

const Input: React.FC<InputType> = (props) => {
    const {title, setTitle} = props

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)

    }
    return (
        <input value={title} onChange={onChangeInputHandler}/>
    );
};

export default Input;
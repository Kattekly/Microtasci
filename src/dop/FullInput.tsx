import React, {ChangeEvent, useState} from 'react';

type InputType= {
    addMessage: (title: string) => void
}

const FullInput = (props: InputType) => {
   const {addMessage} = props

    let [title, setTitle] = useState('')

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)

    }

    let onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default FullInput;
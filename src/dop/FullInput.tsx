import React, {ChangeEvent, useState} from 'react';

type InputType= {
    addMessage: (title: string) => void
}

const FullInput = (props: InputType) => {
   const {addMessage} = props

    let [title, setTitle] = useState('')

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    let onClickButtonHandler = (title: string) => {
        addMessage(title)
    }


    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={() => onClickButtonHandler(title)}>+</button>
        </div>
    );
};

export default FullInput;
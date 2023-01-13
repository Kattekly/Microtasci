import React, {ChangeEvent, useState} from 'react';

type InputType= {
    addMessage: () => void
}

const FullInput = (props: InputType) => {
   const {addMessage} = props

    let [title, setTitle] = useState('')

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    let onClickButtonHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    }


    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={addMessage}>+</button>
        </div>
    );
};

export default FullInput;
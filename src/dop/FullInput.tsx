import React, {ChangeEvent, useState} from 'react';

type InputType= {
    callback: () => void
}

const FullInput = (props: InputType) => {
   const {callback} = props

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
            <button onClick={callback}>+</button>
        </div>
    );
};

export default FullInput;
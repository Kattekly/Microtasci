import React, {ChangeEvent, useState} from 'react';

const FullInput = () => {
    let [title, setTitle] = useState('')

    let onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }

    let onClickButtonHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    }


    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default FullInput;
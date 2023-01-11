import React from 'react';


type UniversalButtonType = {
    name: string
    callback: () => void
}

const UniversalButton = (props: UniversalButtonType) => {

    const onClickHandler = () => {
        props.callback
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default UniversalButton;
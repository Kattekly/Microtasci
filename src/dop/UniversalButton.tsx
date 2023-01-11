import React from 'react';


type UniversalButtonType = {
    name: string
}

const UniversalButton = (props: UniversalButtonType) => {

    const onClickHandler = () => {

    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default UniversalButton;
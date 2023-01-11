import React from 'react';


type UniversalButtonType = {
    name: string
}

const UniversalButton = (props: UniversalButtonType) => {
    return (
        <button>{props.name}</button>
    );
};

export default UniversalButton;
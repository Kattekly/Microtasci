import React from 'react';
import UniversalButton from "./UniversalButton";

const ButtonFile = () => {

    const ButFoo1 = () => {
        alert('11111')
    }

    const ButFoo2 = () => {
        alert('22222')
    }

    return (
        <div>
            <UniversalButton name={'My'} callback={ButFoo1}/>
            <UniversalButton name={'You'} callback={ButFoo2}/>
        </div>
    );
};

export default ButtonFile;
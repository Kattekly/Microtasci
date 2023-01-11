import React from 'react';
import UniversalButton from "./UniversalButton";

const ButtonFile = () => {

    const ButFoo1 = (sub: string) => {
        alert(sub)
    }

    const ButFoo2 = (sub: string) => {
        alert(sub)
    }

    return (
        <div>
            <UniversalButton name={'My'} callback={() => ButFoo1('1111')}/>
            <UniversalButton name={'You'} callback={() => ButFoo2('2222')}/>
        </div>
    );
};

export default ButtonFile;
import React, {useState} from 'react';
import UniversalButton from "./UniversalButton";

const ButtonFile = () => {

    const ButFoo1 = (sub: string, age: number) => {
       console.log(sub, age)
    }

    const ButFoo2 = (sub: string) => {
        alert(sub)
    }

    const ButFoo3 = () => {
        console.log('Im stupid button')
    }

    return (
        <div>
            <UniversalButton name={'My'} callback={() => ButFoo1('1111', 21)}/>
            <UniversalButton name={'You'} callback={() => ButFoo2('2222')}/>
            <UniversalButton name={'3'} callback={ButFoo3}/>

        </div>
    );
};

export default ButtonFile;
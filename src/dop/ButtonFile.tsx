import React from 'react';

const ButtonFile = () => {
    const FirstSubs = () => {
        alert('Hello Yo')
    }

    return (
        <div>
            <button onClick={(event)=>{alert('Hello')}}>MyChanel-1</button>
            <button onClick={FirstSubs}>MyChanel-2</button>
        </div>
    );
};

export default ButtonFile;
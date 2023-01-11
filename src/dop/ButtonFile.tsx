import React from 'react';

const ButtonFile = () => {
    const FirstSubs = () => {
        alert('Hello Yo')
    }

    const FirstSubs2 = () => {
        alert('Hello Marry')
    }

    return (
        <div>
           {/* <button onClick={(event)=>{alert('Hello')}}>MyChanel-1</button>*/}
            <button onClick={FirstSubs}>MyChanel-1</button>
            <button onClick={FirstSubs2}>MyChanel-2</button>
        </div>
    );
};

export default ButtonFile;
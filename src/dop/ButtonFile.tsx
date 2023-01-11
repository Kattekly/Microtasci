import React from 'react';

const ButtonFile = () => {
/*    const FirstSubs = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Hello Yo')
    }

    const FirstSubs2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Hello Marry')
    }*/

    const onClickHandler = (name: string) => {
        alert(name)
    }

    return (
        <div>
           {/* <button onClick={(event)=>{alert('Hello')}}>MyChanel-1</button>*/}
            <button onClick={() => {onClickHandler('Dasha')}}>MyChanel-1</button>
            <button onClick={() => {onClickHandler('Dima')}}>MyChanel-2</button>
        </div>
    );
};

export default ButtonFile;
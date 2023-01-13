import React, {useState} from 'react';

const FullInput = () => {
    let[title, setTitle] = useState()

    return (
        <div>
            <input/>
            <button>+</button>
        </div>
    );
};

export default FullInput;
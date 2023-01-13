import {useState} from "react";
import FullInput from "./FullInput";

export function InputFile() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        let newMessage = {message: 'newMessage'}
        setMessage([...message, newMessage])
    }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}
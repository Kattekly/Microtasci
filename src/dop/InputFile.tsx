import {useState} from "react";
import FullInput from "./FullInput";
import Input from "./Input";
import Button from "./Button";

export function InputFile() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    return (
        <div className="App">
            <Input title={title} setTitle={setTitle}/>
            <Button name={'+'} callback={() => {}}/>

           {/* <FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}
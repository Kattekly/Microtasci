import React, {useState} from 'react';
import './App.css';
import {Header} from "./Task1/Header";
import {Body} from "./Task1/Body";
import {Footer} from "./Task1/Footer";
import {NewComponent} from "./Task2/NewComponent";
import {Button} from "./Task3/Components/Button";
import {NewMoney} from "./Task5/NewComponent";
import {FullInput} from "./Task6/FullInput";

function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
    ])

 const addMessage = (title: string) => {
        let newMessage = {message: 'messageNew'};
     setMessage([ newMessage,...message])
    }

    return (
        <div className={'App'}>
            <FullInput addMessage={addMessage}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )

            })}
        </div>
    )
}

export default App;


/*
const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100}
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


/* const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello, im Vasya!')

    }
    const myFirstSubscriber2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello, im Ivan!')
    }*/

/*const onClickHandler = (name: string) => {
    console.log(name)
}
const foo1 = () => {
console.log(100200)
}
const onClickHandler = (name: string) => {
        console.log(name)}
const foo2 = (nam: number) => {
console.log(nam)*/


/*

    type FilterType = "ALL" | "Dollars" | "RUBLS"

    const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
])

    const[filter, setFilter] = useState<FilterType>()
    let currentMoney = money;

    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "RUBLS")
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === "Dollars")
    }


const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
}

    return (
        <NewMoney money={money} currentMoney ={currentMoney } onClickFilterHandler = {onClickFilterHandler}/>
    )




    /* let a = 1
     let[a, setA] = useState(1)
 const onClickHandler = () => {
         setA(++a)
     console.log(a)
 }

 const deleteHandler = () => {
         setA(a=0)
     console.log(a)
 }


     return (
         <div className="App">
             <h1>{a}</h1>
             <button onClick={onClickHandler}>number</button>
             <button onClick={deleteHandler}>0</button>
         </div>
     )

 /*const Button1Foo = (subscrible: string, age: number, adress: string) => {
 console.log(subscrible, age, adress)
 }
     const Button2Foo = (subscrible: string) => {
         console.log(subscrible)
     }
     const Button3Foo = () => {
     console.log('Im Styped Button')
     }

         return (
             <div className="App">
                 <Button name={"MyYouTubeChanel-1"} callBack={() => Button1Foo("Im Vasya", 21, "live in Minsk")}/>
                 <Button name={"MyYouTubeChanel-2"} callBack={() => Button2Foo("Im Ivan")}/>
             <Button name={"StypedButton"} callBack={Button3Foo} />
             </div>
         )
         /*    <button
                     onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler("Vasya")}>MyYouTubeChanel-1
                 </button>
                 <button
                     onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler("Ivan")}>MyYouTubeChanel-2
                 </button>
                 <button onClick={foo1}>1</button>
                 <button onClick={() => foo2(100200)}>2</button>

                  <button onClick={() => onClickHandler("some info")}>MyYouTubeChanel-3</button>
                  <button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChanel-1</button>
         return (
              <div>
                  <NewComponent topCars={topCars} />
              </div>
          )


         return (
              <div>
                  <NewComponent students={students} />
              </div>
          )
          (
              <>
                  <Header title={"NEW HEADER"}/>
                  <Body titleForBody={"NEW BODY"}/>
                  <Footer titleForFooter={"NEW FOOTER"}/>
              </>
          ); */

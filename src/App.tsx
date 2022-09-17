import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Task1/NewComponent";

const students =  [
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

function App() {
    const myFirstSubscriber = () => {
        console.log('Hello, im Vasya!')

    }
    const myFirstSubscriber2 = () => {
        console.log('Hello, im Ivan!')
    }

    return (
        <div className="App">
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
            <button onClick={myFirstSubscriber2}>MyYouTubeChanel-2</button>
        </div>
    )

   /* <button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChanel-1</button>
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
}

export default App;

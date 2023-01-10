import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentType>
}

type CarType = {
    manufacturer: string
    model: string
}

type CarsType = {
    topCars: Array<CarsType>
}

const NewComponent = (props: CarsType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <table>
            {props.topCars}

            <tr>
                <th></th>
            </tr>
        </table>
    )



    /* return (
         <ul>
             {props.students.map((el) => {
                 return (
                     <li key={el.id}>
                         <span>{el.name}</span>
                         <span>{` ${el.age}`}</span>
                     </li>)
             })}
         </ul>
     );*/
};

export default NewComponent;
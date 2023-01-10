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
    topCars: Array<CarType>
}

const NewComponent = (props: CarsType) => {
    return (
        <table>
            {props.topCars.map((el, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                )
            })}


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
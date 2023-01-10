import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentType = {
    students: Array<StudentType>
}


const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((el, id) => {
                return (<li key={el.id}>
                    <span>{el.name}</span>
                    <span>{` ${el.age}`}</span>
                </li>)
            })}
        </ul>
    );
};

export default NewComponent;
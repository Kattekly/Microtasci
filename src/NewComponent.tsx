import React from 'react';

type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {props.students.map((objectArray, index) => {
                return (
                    <li key={objectArray.id}>
                        <span> {objectArray.name}</span>
                        <span> age: {objectArray.age}</span>
                    </li>
                )
            })}
        </ul>
    );
};
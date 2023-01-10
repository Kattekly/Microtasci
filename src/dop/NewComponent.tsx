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
        <div>
            new component
        </div>
    );
};

export default NewComponent;
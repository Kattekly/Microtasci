import React from 'react';

/*type NewComponentType = {
    students: Array<StudentType>
    //StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
} */

type NewComponentType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <table>
            {props.topCars.map((carsArray, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{carsArray.manufacturer}</td>
                        <td>{carsArray.model}</td>
                    </tr>
                )
            })
            }
        </table>
    )
}
/*  return (
      <ul>
          {props.students.map((objectFromStudentArray, index) => {
              return (
                  <li key={objectFromStudentArray.id}>
                      <span>{objectFromStudentArray.name}</span>
                      <span> age: {objectFromStudentArray.age}</span>
                  </li>
              )
          })}
      </ul>
  );
}; */
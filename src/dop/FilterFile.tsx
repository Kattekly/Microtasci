import React, {useState} from 'react';

const FilterFile = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    let currentMoney = money.filter((m) => m.banknots === 'RUBLS')

    const onClickHandler = () => {

    }

    return (
        <>
            <ul>
                {currentMoney.map((objArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objArr.banknots}</span>
                            <span>{objArr.value}</span>
                            <span>{objArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={onClickHandler}>ALL</button>
                <button onClick={onClickHandler}>RUBLS</button>
                <button onClick={onClickHandler}>DOLLARS</button>
            </div>
        </>);
};

export default FilterFile;
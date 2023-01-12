import React, {useState} from 'react';

const FilterFile = () => {
    type FilterType = "ALL" | "Dollars" | "RUBLS"

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
    const [filter, setFilter] = useState<FilterType>('ALL')
    let currentMoney = money
    if (filter === 'RUBLS') {
        currentMoney = money.filter((m) => m.banknots === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((m) => m.banknots === 'Dollars')
    }

    const onClickHandler = (name: FilterType) => {
        setFilter(name)
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
                <button onClick={() => onClickHandler('ALL')}>ALL</button>
                <button onClick={() => onClickHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickHandler('Dollars')}>DOLLARS</button>
            </div>
        </>);
};

export default FilterFile;
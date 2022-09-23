import React, {useState} from 'react';


type NewMoneyType = {
    FMoney: MoneyType[]
}

type MoneyType = {
    banknots: string,
    value: number,
    number: number
}

export const NewMoney = (props: any) => {
    console.log(props.currentMoney)
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr: any, index: number) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })

                }
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler("ALL")}>ALL</button>
                <button onClick={() => props.onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler("Dollars")}>DOLLARS</button>
            </div>
        </>)
};


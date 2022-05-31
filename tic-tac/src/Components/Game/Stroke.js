import React from "react";
import Cell from "./Cell";


const Stroke = (props) => {
    return (
        <tr>
            {props.arr.map((curr, index) => {
                return(
                    <Cell
                        registerScore={props.registerScore}
                        key={index}
                        arr={curr}
                        turn={props.turn}
                        isGameEnd={props.isGameEnd}
                        isReset={props.isReset}
                    />
                )
            })}
        </tr>
    )
}

export default Stroke;



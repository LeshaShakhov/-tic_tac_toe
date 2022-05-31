import React, {useEffect, useState} from "react";
import cn from "classnames";


const Cell = (props) => {
    const [isClicked, setClicked] = useState(false);
    const [turn, setTurn] = useState(null);

    useEffect(()=>{
        setClicked(false);
        setTurn(null);
    },[props.isReset])
    const handleOnClick = () => {
        if(!isClicked && !props.isGameEnd){
            setClicked(true);
            props.registerScore(props.arr.join(''));
            setTurn(props.turn);
        }
    }
    return (
        <td onClick={handleOnClick} className={cn('cell', {cross: isClicked && turn === 1}, {zero: isClicked && turn === 2}) }></td>
    )
}

export default Cell;



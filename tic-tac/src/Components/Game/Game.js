import React, {useEffect, useState} from "react";
import arrayCreator from "../../Utils/arrayCreator";
import Stroke from "./Stroke";
import './Game.css'

const FIELD_SIZE = 3;

const COMBS = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
    [11, 21, 31],
    [12, 22, 32],
    [13, 23, 33],
    [11, 22, 33],
    [31, 22, 13]
];

const Game = () => {
    const [turn, setTurn] = useState(1);
    const [player1, setPlayer1Score] = useState([]);
    const [player2, setPlayer2Score] = useState([]);
    const [isGameStart, startGame] = useState(false);
    const [isGameEnd, endGame] = useState(0);
    const [isReset, reset] = useState(false);

    const registerScore = (arr) => {
        startGame(true);
        if(turn === 1){
            setPlayer1Score([...player1, +arr]);
        } else if(turn===2){
            setPlayer2Score([...player2, +arr]);
        }
    }
    const resetGame = () => {
        setPlayer1Score([]);
        setPlayer2Score([]);
        setTurn(1);
        startGame(false);
        endGame(0);
        reset(true);
        setTimeout(()=>{reset(false)},500)
    }
    useEffect(()=>{
        if(isGameStart){
            if(turn === 1){
                checkWinner(player1);
            } else if(turn===2){
                checkWinner(player2);
            }
        }
    },[player1, player2]);

    useEffect(()=>{

    })

    const checkWinner = (arr) => {
        if(arr.length >= FIELD_SIZE){
            let cou;
            for(let i = 0; i < COMBS.length; i++){
                cou = 0;
                for (let j = 0; j < arr.length; j++){
                    if(COMBS[i].includes(arr[j])){
                        cou += 1;
                    }
                    if(cou > 2){
                        endGame(1);
                        return
                    }
                }
            }
        }
        if(arr.length > 4){
            endGame(2);
            return
        }
        if(turn === 1 ){
            setTurn(2);
        } else if(turn===2){
            setTurn(1);
        }
    }
    return (
        <>
        <table className='game-field'>
            <tbody>
                {arrayCreator(FIELD_SIZE).map( (curr, index) => {
                        return(
                            <Stroke
                                isGameEnd={isGameEnd}
                                registerScore={registerScore}
                                turn={turn}
                                key={index}
                                arr={curr}
                                isReset={isReset}
                            />
                        )
                })}
            </tbody>
        </table>
            {
                {
                    1 : <div>Player {turn} win!</div>,
                    0 : <div>Players {turn} turn</div>,
                    2 : <div>Draw</div>
                }[isGameEnd]
            }
            <button onClick={resetGame}>Reset</button>
        </>

    )
}
export default Game;
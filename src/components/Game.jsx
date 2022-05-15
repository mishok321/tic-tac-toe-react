import React, { useState } from 'react';
import calculateWinner from '../calculateWinner';
import Board from './Board';
import './Game.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(''))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определить, был ли клик по ячейке или игра закончена
        if (winner || boardCopy[index]) return null
        // Определить чей ход Х ? О
        boardCopy[index] = xIsNext ? 'X' : 'O'
        // Обновить стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    return (
        <div className='wrapper'>
            <Board 
                squares = { board }
                handleClick = { handleClick }
             />  
        </div>
    );
}

export default Game;

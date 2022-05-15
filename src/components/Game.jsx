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

    const isDraw = () => {
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                return false
            }
        }
        return true
    }

    const startNewGame = () => {
        return <button
            className='start__btn'
            onClick={() => setBoard(Array(9).fill(''))}>
                Очистить поле
            </button>
    }

    const currentInfoGame = () => {
        if (isDraw()) return 'Ничья!'
        return winner ? `Победитель - ${winner}!` : `Сейчас ходит ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div className='wrapper'>
            { startNewGame() }
            <Board 
                squares = { board }
                handleClick = { handleClick }
             /> 
             {isDraw()}
             <p className='game__info'>
                 { currentInfoGame() }
             </p>
        </div>
    );
}

export default Game;

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
        if (winner || boardCopy[index]) return null
        
        boardCopy[index] = xIsNext ? 'X' : 'O'
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
        return 
    }

    const currentInfoGame = () => {
        if (isDraw()) return 'Draw!'
        return winner ? `Winner is ${winner}!` : `Next move: ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div className='wrapper'>
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(''))}>
                Clear Board
            </button>

            <Board 
                squares = { board }
                handleClick = { handleClick }
             /> 
             <p className='game__info'>
                { currentInfoGame() }
             </p>
        </div>
    );
}

export default Game;

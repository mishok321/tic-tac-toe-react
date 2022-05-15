import React from 'react';
import './Board.css'
import Square from './Square';

const Board = ({ squares, handleClick }) => {
    const squaresArr = squares.map((square, index) => <Square
        key={ index }
        value={ square }
        handleClick={ (e) => handleClick(index) }
    />)

    return (
        <div className='board'>
            {squaresArr}
        </div>
    );
}

export default Board;

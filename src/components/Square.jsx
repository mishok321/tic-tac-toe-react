import React from 'react';
import './Square.css';

const Square = ({ value, handleClick }) => {
    return (
        <button onClick={ handleClick } className='square'>
            { value }
        </button>
    );
}

export default Square;

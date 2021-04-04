import React from 'react';

export const Button = (props) => {
    const { value, clickFunction } = props;

    const handleClick = () => {
        clickFunction()
    }

    return (
        <button className="btn input-btn" onClick={handleClick}>
            { value }
        </button>
    )
}
import React from 'react';
import "./Utiles.css"

const Button = ({ children, onclick }) => {
    return (
        <div>
            <button className='button'>{children}</button>
        </div>
    );
};

export default Button;
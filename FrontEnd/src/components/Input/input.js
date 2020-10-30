import React from 'react';
import './input.scss';

const Input = ({ label, type }) => {
    return (
        <div className="input-layout">
            <h5 className="input-text">{label}</h5>
            <input type={type} className="input-area"/>
        </div>
    );
};

export default Input;
import './Button.css'
import React from 'react';

const Button = props => {

    return (
        <div className={`Button ${props.style}`} onClick={props.onClick}>
            {props.title}
        </div>
    )
}

export default Button
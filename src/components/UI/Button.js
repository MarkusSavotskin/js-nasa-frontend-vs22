import './Button.css'
import React from 'react';

const Button = ({title, onClick}) => {
    const handlePress = () => {
        console.log('button clicked')
    }
    return (
        <div onClick={handlePress} className='Button'>
            {title}
        </div>
    )
}

export default Button
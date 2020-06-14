import React from 'react';
import './Button.css'
const Button = ({ handleClicks, text, children }) => {
    return (

        <button onClick={handleClicks}>
            {text} { //text is part of props and passes text information of button partent

            }
            {children} {//children is an thumbsup logo or heart ot whatever
            }
         
        </button>


    );
}



export default Button;

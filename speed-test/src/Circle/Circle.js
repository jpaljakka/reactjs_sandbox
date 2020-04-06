import React from 'react';
import "./Circle.css"

const Circle = (props) =>{
     
    return(
<>
        <button className="circles" onClick={props.circleClick}></button>
      
</>

    )
    
}

export default Circle
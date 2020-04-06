import React from 'react'



const View = (props) => {
    
    return (
        <div>
            <h1>This is your input</h1>
            <p>Firstname: {props.firstname}  </p>
            <p>Last name: {props.lastname}</p>
            <p>Phone: {props.phone}</p>
            <p>MESSAGE: {props.message}</p>
            
        </div>
        
    )
    
}

export default View

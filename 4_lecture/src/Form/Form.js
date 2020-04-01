import React from 'react'

const Form = () => {
   
    return (
        <>
            <h1>This is your Form</h1>
            <form className="formContainer" method="post">
            <label for="fname">First name:</label>
            <input type="text" name="fname"/>
            <label for="lname">Last name:</label>
            <input type="text" name="lname"/>
            <label for="phone">Phone</label>
            <input type="text" name="phone"/>
            <label for="message">Message:</label>
            <input type="textfield" name="message" />
            </form>
        </>
    )
}

export default Form
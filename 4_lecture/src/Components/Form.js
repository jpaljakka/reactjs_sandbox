import React from 'react'


const Form = (props) => {
    
    return (
      <>
            <h1>This is your Form</h1>
            <form>
            
            <label for="firstname">First name:</label>
            <input type="text" name="firstname" onChange={props.valueChange} />
            
            <label for="lastname">Last name:</label>
            <input type="text" name="lastname" onChange={props.valueChange} />
            
            <label for="phone">Phone</label>
            <input type="text" name="phone" onChange={props.valueChange} />
            
            <label for="message">Message:</label>
            <input type="textfield" name="message" onChange={props.valueChange} />
            </form>
   </>
    )
  

};
export default Form


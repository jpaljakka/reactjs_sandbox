import React from 'react';
import './Person.css';

class Person extends React.Component{
    
        render() {
            return (<div className="card"> 
    <p>Hello, my name is {this.props.name} and i'm {this.props.age} years old </p>
    </div> );
    }
}

export default Person;


    
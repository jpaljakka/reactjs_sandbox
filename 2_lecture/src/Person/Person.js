import React from 'react';
import './Person.css';

class Person extends React.Component{
    render() {
    return <p>Hello, my name is {this.props.name}</p>
    }
}
export default Person;


    
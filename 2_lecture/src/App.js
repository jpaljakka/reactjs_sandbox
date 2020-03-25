import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component{
  state = {
    persons: [
      {name: 'Margit', age: 39},
      {name: 'karim', age: 39},
      {name: 'crisel', age: 39},
      {name: 'kaisa', age: 39},
      {name: 'liina', age: 39}
    ]
  };

  render () {
    return (
      <div> 
        <h1>Hello World</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  };
};




export default App;

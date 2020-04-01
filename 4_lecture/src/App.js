import React, { Component } from 'react'
import './App.css';
import Form from './Form/Form';
import View from './View/View';

class App extends Component{
  
 

  render(){
    return(
      <>
        <div className="container">
          <div className="form">
        <Form />
          </div>
      <div className="display">
        <View />
      </div>
        </div>
      </>
    );
  }
};


export default App;

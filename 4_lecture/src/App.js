import React from 'react'
import './App.css';
import Form from './Components/Form.js';
import View from './Components/View';


class App extends React.Component{
  
  state ={
    firstname: '',
    lastname: '',
    phone: '',
    message: ''
  };

  eventHandler = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  };
    render() {
    return (
      <>
     <div className="wrapper">
    {/*form*/} 
      <div className="form">
      <Form valueChange={this.eventHandler} />
      </div>
      {/*view*/}
      <div className="view">
      <View firstname={this.state.firstname} lastname={this.state.lastname} phone={this.state.phone} message={this.state.message} />
      </div>
      </div>
      </>
      );
  }
  };
  
  export default App;
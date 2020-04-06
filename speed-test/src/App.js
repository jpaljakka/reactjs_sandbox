
import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle'

class App extends Component{

render(){
  return(
    <>
    <div className="container">
    <div className="circleWrapper">
    <header>
      <h1>SPEEDTEST</h1>
      <p>Your score:</p>
        </header>
    <Circle/>
    <Circle/>
    <Circle/>
    <Circle/>
    </div>
    <div>
      
  
      <div>
      <button> START </button>
      <button> STOP </button>
      </div>
      </div>
    </div>
    </>
    )
}

}

export default App;

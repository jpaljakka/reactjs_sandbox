
import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle'

class App extends Component{
  state = {
    score: 0,
    currenty: '',
    gameover: ''
  };
 // eventHandler handlee datan clickId voi olla mitä tahansa ja ohjaa handler toimintoja
  eventHandler = (clickId) =>{
    console.log("i was fucked in ass", clickId)
    this.setState({
      score: this.state.score + 1
    });
  }

render(){
  return(
    <>
    <div className="container">
    <div className="circleWrapper">
    <header>
      <h1>SPEEDTEST</h1>
      <p>Your score: {this.state.score}</p>
        </header>
    <Circle circleClick={this.eventHandler.bind(this, 1)}/>
    <Circle circleClick={this.eventHandler.bind(this ,2)}/>
    <Circle circleClick={this.eventHandler.bind(this, 3 )}/>
    <Circle circleClick={this.eventHandler.bind(this ,4)}/>
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


import React, { Component } from 'react';
import './App.css';
import Circle from './Circle/Circle'
import GameOver from './Gameover/GameOver'

/**
 *  Random number generator for LET NEXTACTIVE = INTEGERROUND(1,4)
 * its generating 
 */
const integerRound = (min, max) => {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOver: false, // default not showing gameover window
    rounds: 0,
    pace: 0,
    nextActive: undefined,
  };

  pace = 1000;
  timer = undefined;

  //makes sure to not pick same number
  next = () => {
    if (this.state.rounds >= 3){ // handling amount of rounds
      this.handleEnds();
      return;
    }
    let nextActive = undefined
    do {
      nextActive = integerRound(1, 4)
    } while (nextActive === this.state.current)
    this.setState({
      current: nextActive,
      rounds: this.state.rounds +1,
    });
    //timer 
  
    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace)
    console.log(this.state.current)
    console.log(this.state.pace)
  };

  // handleClicks handlee datan clickId voi olla mitä tahansa ja ohjaa handler toimintoja
  handleClicks = (clickId) => {
    let audio = new Audio()
    console.log("i was clicked by button", clickId)

    if(this.state.current !== clickId) {
      this.handleEnds();
      return;
    }
    audio.play();
    this.setState({
      score: this.state.score +1,
      rounds: 0,
    });
  }
  //starting the timer
  handleStarts = () => {
    console.log("started")
    this.next();
  }

  // clears timer 
  handleEnds = () => {
    console.log("ended")
    clearTimeout(this.timer);
    this.setState({  //when end button is clicked, show the window
      gameOver: true,
      pace: 0,
    
    
    })  }

  render() {
    return (
      <>
     
        <div className="container">
          <div className="circleWrapper">
            <header>
              <h1>Hoarding spree</h1>
              <p className="score">Your toilet paper count: {this.state.score}</p>
            </header>
            <Circle active={this.state.current === 1} buttonColor="green" circleClick={this.handleClicks.bind(this, 1)} />
            <Circle active={this.state.current === 2} buttonColor="blue"circleClick={this.handleClicks.bind(this, 2)} />
            <Circle active={this.state.current === 3} buttonColor="red"circleClick={this.handleClicks.bind(this, 3)} />
            <Circle active={this.state.current === 4} buttonColor="yellow"circleClick={this.handleClicks.bind(this, 4)} />
          </div>
          <div> 
          {this.state.gameOver && <GameOver score={this.state.score} />} 

            <div>
              <button onClick={this.handleStarts}> START </button>
              <button onClick={this.handleEnds}> STOP </button>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default App;

import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

class App extends React.Component{
state = {
  likes: 0,
  dislikes: 0,
  total_likes: 0
};

addLikes = () => {
  this.setState({
    likes: this.state.likes+1,
    total_likes: this.state.total_likes+1
    
  });
  (this.state.likes % 2 == 0) ? document.getElementById("background_likes").style.background = "orange" :  document.getElementById("background_likes").style.background = "blue"
  
};

disLikes = () => {
  this.setState({
    dislikes: this.state.dislikes+1,
    total_likes: this.state.total_likes-1
  });
  (this.state.dislikes % 2 == 0) ? document.getElementById("background_dislike").style.background = "orange" :  document.getElementById("background_dislike").style.background = "blue"
};



resetForm = () => {
  this.setState({
    likes: this.state.likes = 0,
    dislikes: this.state.dislikes = 0,
    total_likes: this.state.total_likes = 0
  });
  (this.state.total_likes = 0) ? document.getElementById("background_likes").style.background = "unset" :  document.getElementById("background_likes").style.background = "unset" && (this.state.total_likes = 0) ? document.getElementById("background_dislike").style.background = "unset" :  document.getElementById("background_dislike").style.background = "unset"
  
};

  render() {
  return (
    <>
    <Header/>
    <div className="wrapper">
    <div className="calculator_wrapper">
    <div className="card" id="background_likes">
    <h1 className="thumbsup">Thumbs up: {this.state.likes} </h1>
    </div>
    <div className="card" id="background_dislike">
    <h1 className="thumbsdown">Thumbs down: {this.state.dislikes}</h1>
    </div>
    <div className="card" id="background_total">
    <h1 className="total">Total: {this.state.total_likes}</h1>
    </div>
    </div>
    <div className="buttons_wrapper">
    <button className="buttons" onClick={this.addLikes}>Thumbs up</button>
    <button className="buttons" onClick={this.disLikes}>Thumbs down</button>
    <button className="buttons" onClick={this.resetForm}>Reset likes</button>
    </div>
    </div>
    
    <Footer/>
    </>
    );
}
};


export default App;

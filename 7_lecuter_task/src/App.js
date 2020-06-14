import React, {useState} from 'react';
import './App.css';
import Vote from './Vote/Vote.js'
import Button from './Buttons/Button.js'

const App = () => {
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
// eventhandlers
  const positiveVote = () => setPositive(positive + 1);
  const negativeVote = () => setNegative(negative +1);
  const resetVotes = () => {
    setNegative(0);
    setPositive(0);
  };
  return (
    <>

    <div className="container">

    <div className="voteCard">
      
      <Button handleClicks={positiveVote} text={"positive"}/> 
      
      <Button handleClicks={negativeVote} text={"negative"}/> 

      <Button handleClicks={resetVotes} text={"reset"}/> 
      <Vote positive={positive} negative={negative}/>
    </div>
    </div>
    </>
  );
}
//todo: add buttons andd vote.js content and do styling

export default App;



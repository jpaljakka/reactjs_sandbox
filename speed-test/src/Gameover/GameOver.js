import React from 'react';
import "./GameOver.css"
const closeHandler = () =>{
    window.location.reload();
}
const GameOver = (props) => {

    return (
        <>
         
            <div id="overlay">
                <div id="container">
                    <button id="button" onClick={closeHandler}>close</button>
                    <div id="gameover">Game Over</div>
                    <div id="score">Your toilet paper count: <span>{props.score}</span></div>
                </div>
            </div>
        </>
    )

}

export default GameOver
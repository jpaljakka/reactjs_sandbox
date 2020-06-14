/* import React, { Component } from 'react';
import './Vote.css'

class Vote extends Component {
    state = {
        votes: 0,
    };

    addHandler = () => this.setState({votes: this.state.votes + 1})
    removeHandler = () => this.setState({votes: this.state.votes - 1})
    resetHandler = () => this.setState({votes: 0})
    render() {

        return (
            <>
                <h1>Votes: {this.state.votes}</h1>
                <button onClick={this.addHandler}>Up vote</button>
                <button onClick={this.removeHandler}>Down vote</button>
                <button onClick={this.resetHandler}>Reset</button>
            </>
        )
    }
}

export default Vote */


import React, {useState} from 'react';
import './Vote.css'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.click}></button>
        </div>
    );
}

const Vote = () => {
    const [votes, setvotes] = useState(0);

    const addHandler = () => setvotes(votes + 1);
    const removeHandler = () => setvotes (votes -1);
    const resetHandler = () => setvotes (0);

    return (
   <>
        <div>
        <h1>Votes: {votes}</h1>
        <Button click={addHandler}/>
        <Button click={removeHandler}/>
        <Button click={resetHandler}/>
        </div>
    </>
    );
}

export default Vote;

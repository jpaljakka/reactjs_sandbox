import React, { Component } from 'react'
const myArray = [1,2,3,4,5,6,7,8,9,10];
export default class MapTwo extends Component {
    state = {
        numbers: myArray

    }

    clickHandler = (listingindx) =>{
       const oldArray = this.state.numbers; 
       //const oldArray = this.state.numbers.slice(0,4); // if no given atributes its slicing array
    //const oldArray = [...this.state.numbers];
       oldArray.splice(listingindx, 1 ); //
       this.setState({number:oldArray});
    }
    render() {
        const listItems = this.state.numbers.map((number, index) => (
        <li key={index} onClick={this.clickHandler.bind(this, index)}>{number}</li>));  //this. always in class components .state to declare staste of variable numbers
        return (
            <div>
                MAPTWO
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

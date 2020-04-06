import React, { Component } from 'react'

export const MContext = React.createContext();

class MyProvider extends Component {
state = {
    lastname: ""
}
render(){
    return (
    <MContext.Provider value {
      ...
        { state: this.state,
            setlastName: (value) => this.setState({

                lastname: value })}}>
            
        {this.props.children}
        </MContext.Provider>
   

    )
}

}

export default MyProvider;
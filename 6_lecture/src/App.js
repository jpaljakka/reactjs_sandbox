import React, {Component} from 'react';
import Lecture from './Lecture/Lecture';
import MapMethod from './Lecture/MapMethod';
import MapTwo from './Lecture/MapTwo'

class App extends Component {
  render() {
    return (
      <>
      <div> DOING LISTS WITH MARGIT</div>
      <Lecture />
      <hr/>
      <MapMethod />
      <hr/>
      <MapTwo/>
      </>
    );
  }
}

export default App;
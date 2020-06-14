import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
        </Switch>
    </Router>

  );
}

export default App;

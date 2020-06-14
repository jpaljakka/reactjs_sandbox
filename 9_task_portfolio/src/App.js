import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'

function App() {
  return (
    <Router>
    <Header />
    <Route exact path="/" component={Home}/> 
    <Route path="/about" component={About}/> 
    <Route path="/contact" component={Contact}/> 
    <Route path="/blog" component={Blog}/> 
    </Router>
  );
}

export default App;

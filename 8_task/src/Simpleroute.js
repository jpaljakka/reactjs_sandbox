import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <h1>LOL HOME</h1>
        </div>
    );
}

const About = () => {
    return (
        <div>
            <h1>LOL ABOUT</h1>
        </div>
    );
}


const Contact = () => {
    return (
        <div>
            <h1>LOL CONTACT</h1>
        </div>
    );
}





const Simpleroute = () => {
    return (
        <div>
            <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Switch>

        <Route path='/'exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
            </Switch>
            </Router>
        </div>
    );
}

export default Simpleroute;

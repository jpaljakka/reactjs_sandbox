import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
            <li>
               <Link exact to='/'> Home</Link>
            </li>
            <li>
               <Link to='/about'>About</Link>
            </li>
            <li>
               <Link to='/blog'>Blog</Link>
            </li>
        </ul>
        </div>
    );
}

export default Navbar;

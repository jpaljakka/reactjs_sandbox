import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';

import Navbar from '../Nav/Navbar'
const Header = () => {
    return (
        <nav>
        <Link to='/'><h1 className="logo">Jonne Paljakka</h1></Link> 
        <Navbar />
         </nav>
    );
}


export default Header;

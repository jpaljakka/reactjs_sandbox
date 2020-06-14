import React from 'react';
import Nav from '../Nav/Nav'
import { Route, Switch, NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/"><h1>LOGO</h1></Link>
            <Nav/>
        </div>
    );
}

export default Header;

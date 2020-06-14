import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <form method="POST">
                <labe for="firstname">firstname</labe>
                <input type="text" placeholder="name"/>
                <labe for="lastname">lastname</labe>
                <input type="text" placeholder="lastname"/>
                <labe for="phone">phone</labe>
                <input type="text" placeholder="phone"/>
                <input type="button" value="submit"/>
            </form>
        </div>
    );
}

export default Contact;

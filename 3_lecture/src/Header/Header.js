import React from 'react';
import './Header.css';


class Header extends React.Component{

      render() {
        const date = new Date();
      return (
       
        <header>
        <h1 className="logo"> <p className="thumbs">Thumb</p> <br/> Counter</h1>
        <p className="date">{date.toDateString()}</p>
        </header>

        
        );
    }
    };


export default Header;
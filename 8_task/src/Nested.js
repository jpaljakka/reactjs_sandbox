import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams} from 'react-router-dom';


const Nav = () => {
    return (
        <nav>
        <ul>
            <li>
               <Link to='/'> Home</Link>
            </li>
            <li>
               <Link to='/about'>About</Link>
            </li>
            <li>
               <Link to='/courses'>Courses</Link>
            </li>
        </ul>
    </nav>
    );
}



const Home = () => {
    return (
        <div>
           <div> HOME</div>
        </div>
    );
}

const About = () => {
    return (
        <div>
            <div>LOL</div>
        </div>
    );
}

const Courses = () => {

    let {path, url } = useRouteMatch
    return (
        <div>
          
<ul>
    <li>
        <Link to={`${url}/html&css`}>HTML CSS</Link>
    </li>
    <li>
        <Link to={`${url}/react`}>REACT</Link>
    </li>
    <li>
        <Link to={`${url}/prototyping`}>PROTOTYPING</Link>
    </li>
</ul>
<Switch>
    <Topic/>
</Switch>

        </div>
    );
}

const Topic = () =>{
    let  {CourseId} = useParams();
    return <h1>This page {CourseId}</h1>
}


const Nested = () => {
    return (
     
           <Router>
            <Nav />

           <main>
               <Switch>
                   <Route exact path='/' component={Home} />
                   <Route path='/about' component={About} />
                   <Route path='/courses' component={Courses} />
               </Switch>
           </main>
      
           </Router>
    );
}

export default Nested;

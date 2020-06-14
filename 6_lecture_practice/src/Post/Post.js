import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <>
            <div className="card" onClick={props.click}> 
            <img className="hero" src={props.img} alt={props.title} />
            <h1 className="post">{props.title}</h1>
            <h3 className="post">{props.author}</h3>
            <p className="post">{props.desc}</p>
            
            </div>
        </>
    );
}

export default Post;

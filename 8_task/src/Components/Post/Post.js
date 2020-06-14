import React from 'react';
import './Post.css'
import postdata from '../../postdata'
import { Link, useParams } from 'react-router-dom';

const Post = () => {
  let { postId } = useParams();
  const post = postdata.find((p) => p.title === postId);

  return (
    <div>
      <div>
        <img src={post.img} alt={post.title} />
      </div>
      <div>
        <h1>{post.title}</h1>
        <p>{post.desc}</p> <br />
        <p>{post.content}</p>
        <Link to='/blog'> back </Link>
      </div>

    </div>

  );
}

export default Post;

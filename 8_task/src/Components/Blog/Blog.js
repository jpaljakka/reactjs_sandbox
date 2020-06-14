import React from 'react';
import Post from '../Post/Post';
import postdata from '../../postdata'
import './Blog.css';

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
const Blog = () => {


  let match = useRouteMatch();
  const post = postdata;
  const blogList = post.map((post) => {
    return (
      <>
        <div className="flex-container">

          <div className="container" key={post.id}>
            <img src={post.img} alt={post.title} />
            <div>
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <Link className='readmore' to={`${match.url}/${post.title}`}>READ</Link>
            </div>
          </div>
        </div>
      </>
    );

  });


  return (
    <div>
      <Switch>
        <Route path='/blog/:postId'>
          <Post />
        </Route>
        <Route path={match.path}>{blogList}</Route>
      </Switch>
    </div>
  );
};


export default Blog;
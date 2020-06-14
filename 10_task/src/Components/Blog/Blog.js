import React, { useState, useEffect } from "react";

import PostCard from "../PostCard/PostCard";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Axios from "axios";
import postdata from "../../postdata";
import FullPost from "../FullPost/FullPost";

const Blog = () => {
const [post, setPost] = useState([])
  let match = useRouteMatch();
  useEffect(() => {

    Axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
      const post = res.data.slice(0, 10);
      console.log(post)
      setPost(post)
    });
  }, [2]);

  const PostList = post.map((p) => {
    return (
      <PostCard
        key={p.id}
        title={p.title}
        desc={p.desc}
        img={p.img}
        link={`${match.url}/${p.id}`}
      />
    );
  });

  return (
    <>
      <Switch>
        <Route path="/blog/:postId">
          <FullPost />
        </Route>
        <Route path={match.path}>
          <div>
            <h1>Blog</h1>
            {PostList}
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default Blog;

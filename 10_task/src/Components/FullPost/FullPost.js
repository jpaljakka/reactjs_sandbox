import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./FullPost.css";
import Axios from 'axios';
import postdata from "../../postdata";

const FullPost = () => {
  const [loadedPost, setLoadedPost] = useState();
  let { postId } = useParams();
  
useEffect(() =>{
  if (!loadedPost){

    Axios.get(`https://jsonplaceholder.typicode.com/photos/${postId}`)
    .then((res) =>{
      console.log(res.data)
      setLoadedPost(res.data)
    })
  }
});
let postData = undefined;

if (postId){
  postData = <h1>Loading....</h1>
} 
 
if (loadedPost) {
postData = (

  
  <div className="fullPost">
  <h1>Post {loadedPost.id}</h1>
  <p>{loadedPost.title}</p>
  <img src={loadedPost.img} alt={loadedPost.title} />
  </div>

)
}
  return postData;
};

export default FullPost;

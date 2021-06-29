import React, {useState, useEffect} from "react";
import axios from "axios";
import Post from "../components/post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/postsAction";

const Posts = () =>{
   const dispatch = useDispatch()
   const { posts } = useSelector(s => s.postsReducer)
   useEffect(()=>{
    dispatch(getPosts())
   },[])

   return (<>  
    
     <h1>Posts page  </h1> 
    {
     posts.map(post=>{
               return <Post 
        key = {post.id}
        userId={post.userId}
        id={post.id}
        title={post.title}
        body={post.body}
        />
    })
   }
      </>)
}

export default Posts;
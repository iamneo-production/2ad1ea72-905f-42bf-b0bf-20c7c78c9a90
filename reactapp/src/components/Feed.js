import React from 'react'
import { Posts } from "../data";
import Post from "./Post"
import "./Feed.css";


function Feed() {
  return (
    <div className="feed">
    <div className="feedWrapper">
     
     {Posts.map((p) => (
      <Post key= {p.id} post={p} />
     ))}
    
    </div>
    </div>
  )
}

export default Feed;
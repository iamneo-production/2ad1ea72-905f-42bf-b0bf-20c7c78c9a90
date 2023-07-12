import React from 'react'
import "./Post.css"
import { Users } from "../data";
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IosShareIcon from '@mui/icons-material/IosShare';


const Post = ({ post }) => {
    console.log (post);
  return (
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">
                    {Users.filter((u) => u.id === post.userId)[0].username}
                </span>
                <span className="postDate">{post.date}</span>
             
                </div>
                <div className="postTopRight">
                    <IconButton>
                    <MoreVertIcon className="postVertButton" />
                    </IconButton>
                        </div>       
        </div> 
        <div className="postCenter">
          
            <img src= {post.photo} alt="" className="postImg" />
        </div>
        <hr className="footerHr" />
        <div className="postBottomFooter">
            <div className="postBottomFooterItem">
               <FavoriteBorderIcon className="footerIcon" />
               <span className="footerText">Like</span>
               </div>
               <div className="postBottomFooterItem">
               <ChatBubbleOutlineIcon className="footerIcon" />
               <span className="footerText">Comment</span>
               </div>
               <div className="postBottomFooterItem">
               <IosShareIcon className="footerIcon" />
               <span className="footerText">Share</span>
            </div>
            </div>
        </div>
        </div>    
         
  )
}

export default Post;
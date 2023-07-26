import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentCard = () => {
    const [isCommentLiked, setIsCommentLiked] = useState();
    const handleLikedComment =()=> {
        setIsCommentLiked(!isCommentLiked);
    }
  return (
    <div>
        <div className='flex items-center justify-between py-5'>
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2022/10/27/16/58/pelican-7551248__340.jpg" alt="" />
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>
                        <span className='ml-2'>nice post</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                        <span>1 min ago</span>
                        <span>23 likes</span>
                    </div>
                </div>
            </div>
            {isCommentLiked?<AiFillHeart onClick={handleLikedComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' />:<AiOutlineHeart onClick={handleLikedComment} className='text-xs hover:opacity-50 cursor-pointer' />}
        </div>
    </div>
  )
}

export default CommentCard
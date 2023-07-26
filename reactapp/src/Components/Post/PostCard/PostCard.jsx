import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import './PostCard.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import CommentModal from '../../Comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';
import ShareModal from '../../ShareComponent/ShareModal';

const PostCard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  }

  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  }

  const handleSave = () => {
    setIsSaved(!isSaved);
  }

  const handleOpenCommentModal = () => {
    onOpen()
  }

  const handleShareModalOpen = () => {
    setIsShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setIsShareModalOpen(false);
  };

  return (

    <div>
      <div className='border rounded-md w-full'>
        <div className='flex justify-between items-center w-full py-4 px-5'>
          <div className='flex items-center'>
            <Link to="/username">
              <img
                className='h-12 w-12 rounded-full'
                src="https://cdn.pixabay.com/photo/2023/03/15/22/10/blackbird-7855547__340.jpg"
                alt=""
              />
            </Link>

            <div className='pl-2'>
              <Link to="/username">
                <p className='font-semibold text-sm'>Username</p>
              </Link>
              <p className='font-thin text-sm'>Location</p>
            </div>
          </div>
          <div className='dropdown'>
            <BsThreeDots className='dots' onClick={handleClick} />
            <div className='dropdown-content'>
              {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <img className='w-full' src="https://cdn.pixabay.com/photo/2022/11/03/20/17/autumn-7568367__340.jpg" alt="" />
        </div>
        <div className='flex justify-between items-center w-full px-5 py-4'>
          <div className='flex items-center space-x-2'>
            {isPostLiked ? (
              <AiFillHeart
                className='text-2xl hover:opacity-50 cursor-pointer text-red-600'
                onClick={handlePostLike} />
            ) : (
              <AiOutlineHeart
                className='text-2xl hover:opacity-50 cursor-pointer'
                onClick={handlePostLike} />
            )

            }
            <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer' />
            <ShareModal isOpen={isShareModalOpen} onClose={handleShareModalClose} className='text-xl hover:opacity-50 cursor-pointer' />
          </div>
          <div className='cursor-pointer'>
            {isSaved ? (
              <BsBookmarkFill
                className='text-xl hover:opacity-50 cursor-pointer'
                onClick={handleSave} />
            ) : (
              <BsBookmark className='text-xl hover:opacity-50 cursor-pointer'
                onClick={handleSave} />
            )}
          </div>
        </div>

        <div className='w-full py-2 px-5'>
          <p>10 Likes</p>
          <p className='opacity-50 py-2 cursor-pointer'>View all 10 comments</p>
        </div>

        <div className='border border-t w-full'>
          <div className='flex w-full items-center px-5'>
            <BsEmojiSmile />
            <input className='commentInput' type='text' placeholder='Add a comment...' />
          </div>
        </div>
      </div>

      <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handleSave={handleSave} isPostLiked={isPostLiked} isSaved={isSaved} />

    </div>
  )
}

export default PostCard
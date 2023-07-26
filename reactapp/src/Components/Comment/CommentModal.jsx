import React, { useState } from 'react'
import { Modal, ModalContent, ModalOverlay, ModalBody } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from 'react-icons/ri'
import { BsBookmarkFill, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import './CommentModal.css'
import CommentCard from './CommentCard'

const CommentModal = ({ onClose, isOpen }) => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handlePostLike = () => {
    setIsPostLiked(!isPostLiked);
  }

  const handleSave = () => {
    setIsSaved(!isSaved);
  }
  return (
    <div>
      <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='flex h-[75vh]'>
                <div className='w-[45%] flex flex-col justify-center'>
                  <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2022/11/03/20/17/autumn-7568367__340.jpg" alt="" />
                </div>
                <div className='w-[55%] pl-10 relative'>
                  <div className='flex justify-between items-center py-5'>
                    <div className='flex items-center'>
                      <div>
                        <img className='h-9 w-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381__340.jpg" alt="" />
                      </div>
                      <div className='ml-2'>
                        <p>Username</p>
                      </div>
                    </div>
                    <BsThreeDots />
                  </div>
                  <hr />
                  <div className='comment'>
                    {[1, 1, 1,].map(() => <CommentCard />)}
                  </div>
                  <div className='absolute bottom-0 w-[90%]'>
                    <div className='flex justify-between items-center w-full py-4'>
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
                        <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
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
                    <div className='w-full py-2'>
                      <p>10 Likes</p>
                      <p className='opacity-50 text-sm'>1 day ago</p>
                    </div>

                    <div className='flex items-center w-full'>
                      <BsEmojiSmile />
                      <input className='commentInputs' type='text' placeholder='Add a comment...' />
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export default CommentModal
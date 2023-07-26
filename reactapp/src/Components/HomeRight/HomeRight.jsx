import React from 'react'
import { Link } from 'react-router-dom';
import SuggestionsUserCard from './SuggestionsUserCard'

const HomeRight = () => {
  return (
    <div className=''>
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div>
              <Link to="/username">
                <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/01/08/05/31/indian-chat-7704561__340.jpg" alt="" />
              </Link>
            </div>
            <div className='ml-3'>
              <Link to="/username">
                <p>Full Name</p>
              </Link>
              <p className='opacity-70'>Username</p>
            </div>
          </div>
          <div>
            <p className='text-blue-700 font-semibold'>Switch</p>
          </div>
        </div>
        <div className='space-y-5 mt-10'>
          {[1, 1, 1, 1, 1].map((item) => <SuggestionsUserCard />)}
        </div>
      </div>
    </div>
  )
}

export default HomeRight
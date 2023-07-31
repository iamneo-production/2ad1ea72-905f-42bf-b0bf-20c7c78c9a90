import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation

const SuggestionsUserCard = ({ image, username, description }) => {
  const userProfileUrl = `/${username}`;

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center'>
        <img className='w-9 h-9 rounded-full' src={image} alt="" />
        <div className='ml-2'>
     
          <Link to={userProfileUrl} className='text-sm font-semibold'>
            {username}
          </Link>
          <p className='text-sm font-semibold opacity-70'>{description}</p>
        </div>
      </div>
      <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  );
};

export default SuggestionsUserCard;

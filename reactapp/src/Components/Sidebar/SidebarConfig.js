import { AiFillCompass, AiFillHome, AiFillMessage, AiOutlineCompass, AiOutlineHome, AiOutlineMessage, AiOutlineSearch, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle } from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg'
import { BsFillSearchHeartFill } from "react-icons/bs";


export const menu = [
    {
        title: "Home", 
        icon: <AiOutlineHome className='text-2xl mr-5'></AiOutlineHome>, 
        activeIcon: <AiFillHome className='text-2xl mr-5 text-blue-600'></AiFillHome>
    },
    {
        title: "Search", 
        icon: <AiOutlineSearch className='text-2xl mr-5'></AiOutlineSearch>, 
        activeIcon: <BsFillSearchHeartFill className='text-2xl mr-5 text-red-600'></BsFillSearchHeartFill>
    },
    // {
    //     title: "Explore", 
    //     icon: <AiOutlineCompass className='text-2xl mr-5'></AiOutlineCompass>, 
    //     activeIcon: <AiFillCompass className='text-2xl mr-5'></AiFillCompass>
    // },
    // {
    //     title: "Reels", 
    //     icon: <RiVideoLine className='text-2xl mr-5'></RiVideoLine>, 
    //     activeIcon: <RiVideoFill className='text-2xl mr-5'></RiVideoFill>
    // },
    {
        title: "Message", 
        icon: <AiOutlineMessage className='text-2xl mr-5'></AiOutlineMessage>, 
        activeIcon: <AiFillMessage className='text-2xl mr-5 text-blue-600'></AiFillMessage>
    },
    {
        title: "Notification", 
        icon: <AiOutlineHeart className='text-2xl mr-5'></AiOutlineHeart>, 
        activeIcon: <AiFillHeart className='text-2xl mr-5 text-red-600'></AiFillHeart>
    },
    {
        title: "Create", 
        icon: <AiOutlinePlusCircle className='text-2xl mr-5'></AiOutlinePlusCircle>, 
        activeIcon: <AiFillPlusCircle className='text-2xl mr-5 text-blue-600'></AiFillPlusCircle>
    },
    {
        title: "Profile", 
        icon: <CgProfile className='text-2xl mr-5'></CgProfile>, 
        activeIcon: <FaUserCircle className='text-2xl mr-5 text-blue-700'></FaUserCircle>
    },
]


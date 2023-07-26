import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProfileUserDetails from '../../Components/ProfilePageCard/UserDetailCard'
import ReqUserPostPart from '../../Components/ProfilePageCard/ProfilePostsPart'

import { isFollowing, isReqUser } from '../../Config/Logic'
import { findByUsernameAction, getUserProfileAction } from '../../Redux/User/Action'

const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  const { user } = useSelector(store => store);

  const isRequser = isReqUser(user.reqUser?.id, user.findByUsername?.id);
  const isFollowed = isFollowing(user.reqUser, user.findByUsername);
  console.log(user)

  useEffect(() => {
    const data = {
      token,
      username
    }
    dispatch(getUserProfileAction(token))
    dispatch(findByUsernameAction(data))
  }, [username])

  return (
    <div className='px-20'>
      <div>
        <ProfileUserDetails user={isRequser ? user.reqUser : user.findByUsername} isFollowing={isFollowed} isRequser={isRequser} />
      </div>
      <div>
        <ReqUserPostPart user={isRequser ? user.reqUser : user.findByUsername} />
      </div>
    </div>
  )
}

export default Profile


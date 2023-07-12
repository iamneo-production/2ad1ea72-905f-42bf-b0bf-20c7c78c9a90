import React, { useEffect, useState } from 'react'
import { getCurrentUserDetail, isLoggedIn } from '../auth/authenticate'

const Home = () => {

  const currentUser = getCurrentUserDetail();

  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color:"Red" }}>
      <h2>Welcome Back   </h2>
      {currentUser && (
        <div style={{marginLeft:'10px', color:"blue"}}>
          <h1>{currentUser.name}</h1>
        </div>
      )}
    </div>

  )
}

export default Home
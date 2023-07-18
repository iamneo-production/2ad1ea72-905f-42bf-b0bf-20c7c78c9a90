import { Button, Container, Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';


const followersData = [
];

export default function FollowersPage() {
  const location = useLocation();
  const followers = location.state?.followers || followersData;
  const [updatedFollowers, setUpdatedFollowers] = useState(followers);

  const handleFollowClick = (followerId) => {
    const updatedData = updatedFollowers.map((follower) => {
      if (follower.id === followerId) {
        return { ...follower, isFollowing: !follower.isFollowing };
      }
      return follower;
    });
    setUpdatedFollowers(updatedData);
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h3>Followers</h3>
      {updatedFollowers.map((follower) => (
        <div key={follower.id} className="d-flex align-items-center my-3">
          <Image src={follower.profilePic} alt="Follower Profile" style={{ width: '40px', height: '40px' }} roundedCircle />
          <div className="ml-3">
            <div style={{ marginLeft: '0px' }}>{follower.name}</div>
            <div style={{ marginLeft: '25px' }}>{follower.username}</div>
          </div>
          <div style={{ marginLeft: '60px', marginRight: '10px' }}>
            <Button
              variant="primary"
              style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}
              onClick={() => handleFollowClick(follower.id)}
            >
              {follower.isFollowing ? 'Following' : 'Follow'}
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
}
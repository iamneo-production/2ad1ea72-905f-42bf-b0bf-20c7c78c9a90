import React, { useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import post3 from '../../assets/love4.jpg';
import post4 from '../../assets/tree1.jpg';

const followingData = [
  { id: 1, name: 'Paddu', username: 'Paddu123', profilePic: post3, isFollowing: true },
  { id: 2, name: 'Geetha', username: 'Geetha456', profilePic: post4, isFollowing: true },
];

export default function FollowingPage() {
  const [following, setFollowing] = useState(followingData);

  const handleUnfollowClick = (followingId) => {
    const updatedData = following.map((follow) => {
      if (follow.id === followingId) {
        return { ...follow, isFollowing: !follow.isFollowing };
      }
      return follow;
    });
    setFollowing(updatedData);
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h3>Following</h3>
      {following.map((follow) => (
        <div key={follow.id} className="d-flex align-items-center my-3">
          <Image src={follow.profilePic} alt="Following Profile" style={{ width: '40px', height: '40px' }} roundedCircle />
          <div className="ml-3">
            <div style={{ marginLeft: '0px' }}>{follow.name}</div>
            <div style={{ marginLeft: '25px' }}>{follow.username} </div>
          </div>
          <div style={{ marginLeft: '60px', marginRight: '10px' }}>
            <Button
              variant="primary"
              style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}
              onClick={() => handleUnfollowClick(follow.id)}
            >
              {follow.isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
}

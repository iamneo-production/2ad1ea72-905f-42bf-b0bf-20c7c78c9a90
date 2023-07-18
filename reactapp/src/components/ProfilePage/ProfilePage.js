import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import ProfilePic from '../../assets/kiara.jpg';
import post1 from '../../assets/nature2.jpg';
import post2 from '../../assets/nature3.jpg';
import post3 from '../../assets/love4.jpg';
import post4 from '../../assets/tree1.jpg';
import nlogo from '../../assets/nlogo.jpeg';
import home from '../../assets/home.jpeg';
import profile from '../../assets/profile.jpeg';
import plus from '../../assets/plus.jpeg';
import settings from '../../assets/settings.jpeg';
import noti from '../../assets/noti.jpeg';
import msg from '../../assets/msg.jpeg';
import post5 from '../../assets/nature5.jpg';
import post6 from '../../assets/nature1.jpg';
import { useNavigate } from 'react-router-dom'; 


export default function ProfilePage() {
  const navigate = useNavigate();

  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState([]);

  const navigateToFollowersPage = () => {
    navigate('/followers', { state: { followers } });
  };

  const navigateToFollowingPage = () => {
    navigate('/following', { state: { followingCount } });
  };
  

  const navigateToEditProfilePage = () => {
    navigate('/editProfile');
  };

  const navigateToPostPage = () => {
    navigate('/post');
  };
  const followingData = [
    { id: 1, name: 'Paddu', username: 'Paddu123', profilePic: post3 },
    { id: 2, name: 'Geetha', username: 'Geetha456', profilePic: post4 },
  ];

  const [followingCount] = useState(followingData.length);
  

  const followersCount = followers.length;

 
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  
    if (!isFollowing) {
      const newFollower = { id: followers.length + 1, name: 'Newname', username: 'Newuserid', profilePic: post5 };
      setFollowers([...followers, newFollower]);
    
      return (
        <div className="new-follower">
          <div style={{ marginRight: '0px' }}>{newFollower.name}</div>
          <div style={{ marginRight:'25px' }}>{newFollower.username}</div>
        </div>
      );
    }
  };
  
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar" style={{ padding: 0 }}>
          <Nav className="flex-column" style={{ height: '90vh' }}>
            <Nav.Item className="sidebar-item" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src={nlogo} alt="App Logo" className="sidebar-logo" style={{ width: '40px', height: '40px', marginRight: '0px' }} />
              <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }}>
                SOCIALOGRAM
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidebar-item" style={{ flex: 1 }}>
              <Image src={home} alt="home Logo" className="sidebar-logo" style={{ width: '30px', height: '30px', marginRight: '0px' }} />
              <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }}>
                Home <div style={{ marginLeft: '10px' }}></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidebar-item" style={{ flex: 1 }}>
              <Image src={profile} alt="profile Logo" className="sidebar-logo" style={{ width: '30px', height: '30px', marginRight: '0px' }} />
              <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }}>
                Profile <div style={{ marginLeft: '10px' }}></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidebar-item" style={{ flex: 1 }}>
            <Image
              src={plus}
              alt="post Logo"
              className="sidebar-logo"
              style={{ width: '30px', height: '30px', marginRight: '0px' }}
            />
            <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }} onClick={navigateToPostPage}>
              Create Post
              <div style={{color: 'black', marginLeft: '30px' }}></div>
            </Nav.Link>
          </Nav.Item>
            <Nav.Item className="sidebar-item" style={{ flex: 1 }}>
              <Image src={settings} alt="settings Logo" className="sidebar-logo" style={{ width: '30px', height: '30px', marginRight: '0px' }} />
              <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }}>
                Settings <div style={{ marginLeft: '40px' }}></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidebar-item" style={{ flex: 1 }}>
              <Image src={msg} alt="msg logo" className="sidebar-logo" style={{ width: '30px', height: '30px', marginRight: '0px' }} />
              <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }}>
                Messages <div style={{ marginLeft: '30px' }}></div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="sidebar-item" style={{ flex: 1 }}>
              <Image src={noti} alt="noti Logo" className="sidebar-logo" style={{ width: '30px', height: '30px', marginRight: '0px' }} />
              <Nav.Link className="sidebar-link" href="#" style={{ color: 'black' }}>
                Notifications <div style={{ marginLeft: '30px' }}></div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={3} className="d-flex align-items-center justify-content-center">
              <img src={ProfilePic} style={{ width: '100px', height: '100px' }} />
            </Col>
            <Col md={9}>
              <Card.Title>Saivennela</Card.Title>
              <Card.Text>Hope is the only thing stronger than Fear</Card.Text>
              <Button
      variant="primary"
      style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}
      onClick={toggleFollow}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </Button>
    
              <Button
                variant="primary"
                style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}
                onClick={navigateToFollowersPage}
              >
                {followersCount} Followers
              </Button>
              <Button
            variant="primary"
            style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}
            onClick={navigateToFollowingPage}
          >
            {followingCount} Following
          </Button>
              <Button variant="primary" style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}   onClick={navigateToEditProfilePage}>Edit Profile</Button>
              
            </Col>
          </Row>
          <h3 style={{ marginLeft: 10, marginTop: 8 }}><b>Posts</b></h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flexBasis: '33.33%', padding: '4px' }}>
              <img src={post1} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ flexBasis: '33.33%', padding: '4px' }}>
              <img src={post2} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ flexBasis: '33.33%', padding: '4px' }}>
              <img src={post3} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ flexBasis: '33.33%', padding: '4px' }}>
              <img src={post4} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ flexBasis: '33.33%', padding: '4px' }}>
              <img src={post5} style={{ width: '100%', height: '100%' }} />
            </div>
            <div style={{ flexBasis: '33.33%', padding: '4px' }}>
              <img src={post6} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
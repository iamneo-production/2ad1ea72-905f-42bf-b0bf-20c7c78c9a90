import React, { useState } from 'react';
import { Button,Col,Form,Row,Container } from 'react-bootstrap';
import dp from '../../assets/kiara.jpg';

const handleInputChange = (e, setter) => {
  setter(e.target.value);
};

export default function Editprofile() {
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [dob, setDob] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [place, setPlace] = useState('');
  const [bio, setBio] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
/*
  function nameHandler(e) {
    setName(e.target.value);
  }
  function contactHandler(e) {
    setContact(e.target.value);
  }
  function dobHandler(e) {
    setDob(e.target.value);
  }
  function surNameHandler(e) {
    setSurname(e.target.value);
  }
  function addressHandler(e) {
    setAddress(e.target.value);
  }
  function pincodeHandler(e) {
    setPincode(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function placeHandler(e) {
    setPlace(e.target.value);
  }
  function bioHandler(e) {
    setBio(e.target.value);
  }
  */
  function saveHandler() {
    const data = {
      name: name,
      contact: contact,
      dob: dob,
      pincode: pincode,
      address: address,
      surname: surname,
      email: email,
      place: place,
      bio: bio,
    };
    console.log(data);
    setName('');
    setContact('');
    setDob('');
    setAddress('');
    setPincode('');
    setSurname('');
    setEmail('');
    setPlace('');
    setBio('');
  }

  const buttonStyle = {
    backgroundColor: isHovered ? 'blue' : 'green',
  };

  return (
    <Container className="run">
      <div className="container shadow-lg rounded bg-white mt-5 mb-5" style={{ width: '65%' }}>
        <Row className="d-flex justify-content-between">
          <Col md={4} className="border" style={{ borderColor: 'red' }}>
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src={dp} alt="" />
              <Button variant="primary" style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px', marginTop: '20px' }}>
                Change Photo
              </Button>
              <Button variant="primary" style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px', marginTop: '20px' }}>
                Delete Photo
              </Button>
            </div>
          </Col>
          <Col md={8} className="border">
            <div className="p-3 py-5">
              <div className="d-flex align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <hr />
              <Form>
                <Row className="mt-2">
                  <Col md={6}>
                    <Form.Label className="labels">Name</Form.Label>
                    <Form.Control type="text" className="shadow-sm" placeholder="first name" value={name} onChange={(e) => handleInputChange(e, setName)} />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="mt-1 labels">Surname</Form.Label>
                    <Form.Control type="text" className="shadow-sm" value={surname} placeholder="surname" onChange={(e) => handleInputChange(e, setSurname)} />
                  </Col>
                  <Col md={12}>
                    <Form.Label className="mt-1 labels">Bio</Form.Label>
                    <Form.Control as="textarea" className="shadow-sm" value={bio} placeholder="bio" onChange={(e) => handleInputChange(e, setBio)} />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={12}>
                    <Form.Label className="mt-1 labels">Mobile Number</Form.Label>
                    <Form.Control type="text" className="mt-1 shadow-sm" placeholder="enter phone number" value={contact} onChange={(e) => handleInputChange(e, setContact)} />
                  </Col>
                  <Col md={12}>
                    <Form.Label className="mt-1 labels">Address</Form.Label>
                    <Form.Control type="text" className="mt-1 shadow-sm" placeholder="enter address" value={address} onChange={(e) => handleInputChange(e, setAddress)} />
                  </Col>
                  <Col md={12}>
                    <Form.Label className="mt-1 labels">Pincode</Form.Label>
                    <Form.Control type="text" className="mt-1 shadow-sm" placeholder="enter pincode" value={pincode} onChange={(e) => handleInputChange(e, setPincode)} />
                  </Col>
                  <Col md={12}>
                    <Form.Label className="mt-1 labels">Email ID</Form.Label>
                    <Form.Control type="text" className="shadow-sm" placeholder="enter email id" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col md={6}>
                    <Form.Label className="mt-1 labels">D.O.B</Form.Label>
                    <Form.Control type="date" className=" mt-1 shadow-sm" placeholder="country" value={dob} onChange={(e) => handleInputChange(e, setDob)} />
                  </Col>
                  <Col md={6}>
                    <Form.Label className="mt-1 labels">Country</Form.Label>
                    <Form.Control type="text" className="mt-1 shadow-sm" value={place} placeholder="country" onChange={(e) => handleInputChange(e, setPlace)} />
                  </Col>
                </Row>
                <div className="mt-5 text-center">
                  <Button
                    className="btn btn-primary profile-button"
                    onClick={saveHandler}
                    type="button"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Save Profile
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

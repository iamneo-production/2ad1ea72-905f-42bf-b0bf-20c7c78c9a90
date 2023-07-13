import React, { useEffect, useState } from 'react'
import { getCurrentUserDetail, isLoggedIn } from '../auth/authenticate'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo1.jpg';


const LandingPage = () => {

  const currentUser = getCurrentUserDetail();
  const platformName = 'SocialoGram';
  
  return (
    <div style={styles.container}>
      <img src={logo} alt="Logo" style={styles.logo} />
      {isLoggedIn() ? (
        <>
          <h2 style={styles.heading}>Welcome Back</h2>
          {currentUser && (
            <div style={styles.userContainer}>
              <h1 style={styles.username}>{currentUser.name}</h1>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 style={styles.heading}>Welcome to {platformName}</h2>
          <h4 style={styles.description}>Explore and enjoy!</h4>
          <div style={styles.buttonContainer}>
            <Link to="/login">
              <button style={styles.button}>Enter the Community</button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default LandingPage

// Styles
const styles = {
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '20%',
    height: '160px',
    marginBottom: '20px',
    borderRadius: '5px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  userContainer: {
    marginTop: '20px',
    marginBottom: '40px',
  },
  username: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#777',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
};

// Button hover effect
styles.button[':hover'] = {
  backgroundColor: '#0056b3',
};
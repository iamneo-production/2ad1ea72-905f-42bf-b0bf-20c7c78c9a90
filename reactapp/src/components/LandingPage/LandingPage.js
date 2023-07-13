import React, { useEffect, useState } from 'react'
import { getCurrentUserDetail, isLoggedIn } from '../auth/authenticate'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo1.jpg';


const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = getCurrentUserDetail();
  const platformName = 'SocialoGram';
  
  useEffect(() => {
    // Simulating loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={styles.container}>
      {isLoading ? (
        <div style={styles.loader}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <div style={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
          </div>
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
              <p style={styles.description}>Explore and enjoy!</p>
              <div style={styles.buttonContainer}>
                <Link to="/login">
                  <button style={styles.button}>Login</button>
                </Link>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

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
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    fontSize: '20px',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    width: '200px',
    height: 'auto',
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
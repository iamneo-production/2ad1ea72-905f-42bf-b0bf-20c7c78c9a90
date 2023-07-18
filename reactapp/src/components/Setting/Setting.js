import React,{useState} from 'react';
import'./setting.css';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Main from '../Signup/Main';
const Setting = () => {
  const [currentTab, setCurrentTab] = useState('account');
  const [gender, setGender] = useState('');

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [reason, setReason] = useState('');


  const switchTab = (tab) => {
    setCurrentTab(tab);
  };
  
  const handleSaveContactInfo = (e) => {
    e.preventDefault();

    const formData = {
      email,
      phone,
      birthday,
    };

    axios.post('http://localhost:8080/update-contact-info', formData)
      .then((response) => {
        console.log(response.data);
        if(response.data === "Contact info updated successfully"){
          window.alert("Contact info saved successfully");
        }
        else{
          window.alert("User not found");
        }
        
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to save contact info");
      });
  };

  const handleSavePasswordChange = (e) => {
    e.preventDefault();

  const formData = {
    email,
    password,
    newPassword,
  };

  axios.put('http://localhost:8080/change-password', formData)
    .then((response) => {
      console.log(response.data);
      if (response.data === 'Password changed successfully') {
        window.alert('Password changed successfully');
      } else if (response.data === 'User not found') {
        window.alert('User not found');
      } else {
        window.alert('Invalid credentials');
      }
    })
    .catch((error) => {
      console.log("Error occurred:", error);
      window.alert("An error occurred. Please try again.");
    });
  };
  
  const handleSaveReport = (e) => {
    e.preventDefault();

    const formData = {
      userId,
      reason,
    };

    axios
      .put('http://localhost:8080/report-user', formData)
      .then((response) => {
        console.log(response.data);
        if (response.data === 'User reported successfully') {
          window.alert('Reported successfully');
        } else if (response.data === 'User not found') {
          window.alert('User not found');
        } else {
          window.alert('Invalid credentials');
        }
      })
      .catch((error) => {
        console.log('Error occurred:', error);
        window.alert('An error occurred. Please try again.');
      });
  };

  function handleCancel(){

  };
  const handlePrivacyToggle = () => {
    
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleNotificationToggle = () => {
    
  };

  const handleLanguageChange = (event) => {
    
    const selectedLanguage = event.target.value;
    console.log(selectedLanguage);
  };

  return(
  <div className='setting'>
  <div className='containerstg'>
    <div className='Tableft'> 
      <ul>
      
        <li id='side_button' className={currentTab === 'account' ? 'active' : 'tabs'} onClick={() => switchTab('account')}>
          Account
        </li>
        <li id='side_button' className={currentTab === 'notification' ? 'active' : 'tabs'} onClick={() => switchTab('notification')}>
          Notification
        </li>
        <li id='side_button' className={currentTab === 'language' ? 'active' : 'tabs'} onClick={() => switchTab('language')}>
          Language
        </li>
        <li id='side_button' className={currentTab === 'Report and Block' ? 'active' : 'tabs'} onClick={() => switchTab('Report and Block')}>
        Report & Block
        </li>
        <li id='side_button' className={currentTab === 'options' ? 'active' : 'tabs'} onClick={() => switchTab('options')}>
          Options
        </li>
        <li id='side_button' className={currentTab === 'Logout' ? 'active' : 'tabs'} onClick={() => switchTab('Logout')}>
          Logout
        </li>
      </ul>
    </div>
    <div className="Tabright">
      {currentTab === 'account' && (
        <div className='act'>
          <h2>Account Settings</h2>
          <p>
            <input type="checkbox" id="privacyToggle" onChange={handlePrivacyToggle} />
            <label htmlFor="privacyToggle">Switch Account Privacy to Public</label>
          </p>
          <h2>Update Contact Details</h2>
          <form onSubmit={handleSaveContactInfo}>
              <label htmlFor='phone'>Phone number:</label>
                <input
                  type="phone"
                  id='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
              <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="birtday">Birthday:</label>
                <input
                  type="birthday"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
                <br />
                <button className="save-button" type="submit">
                  Save
                </button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </form>
          <h2>Change Password</h2>
          <form onSubmit={handleSavePasswordChange}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Current password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="newPassword">New password:</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <button className="save-button" type="submit">
              Save
            </button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>
      )}
      {currentTab === 'notification' && (
        <div>
          <h2>Notification Settings</h2>
          <p>
            <input type="checkbox" id="notificationToggle" onChange={handleNotificationToggle} />
            <label htmlFor="notificationToggle">Turn On/Off Notifications</label>
          </p>
          <div>
            <h3>Likes</h3>
            <p>
            <label>
              <input type="radio" name="Likes" value="onLike" checked={gender === 'onLike'} onChange={handleGenderChange} />
              ON
            </label>
            <br/>
            <label>
              <input type="radio" name="Likes" value="OffLike" checked={gender === 'OffLike'} onChange={handleGenderChange} />
              OFF
            </label>
          </p>
          </div>
          <div>
          <p>
          <h3>Comments</h3>
            <label>
              <input type="radio" name="comments" value="oncomments" checked={gender === 'oncomments'} onChange={handleGenderChange} />
              ON
            </label>
            <br />
            <label>
              <input type="radio" name="comments" value="offcomments" checked={gender === 'offcomments'} onChange={handleGenderChange} />
              OFF
            </label>
            <br />
          </p>
          </div>
          <div>
          <p>
            <h3>Follower requset</h3>
            <label>
              <input type="radio" name="Follower requset" value="onFollowerrequset" checked={gender === 'onFollowerrequset'} onChange={handleGenderChange} />
              ON
            </label>
            <br />
            <label>
              <input type="radio" name="Follower requset" value="offFollowerrequset" checked={gender === 'offFollowerrequset'} onChange={handleGenderChange} />
              OFF
            </label>
            </p>
            </div>
            <div>
            <h3>Accepted follower requset</h3>
            <p>
            <label>
              <input type="radio" name="Accepted follower requset" value="OnAcceptedfollowerrequset" checked={gender === 'OnAcceptedfollowerrequset'} onChange={handleGenderChange} />
              ON
            </label>
            <br/>
            <label>
              <input type="radio" name="Accepted follower requset" value="OffAcceptedfollowerrequset" checked={gender === 'OffAcceptedfollowerrequset'} onChange={handleGenderChange} />
              OFF
             </label>
             </p>
              <button className="save-button">Save</button>
              <button className="cancel-button">Cancel</button>
           </div>
        </div>
      )}
      {currentTab === 'language' && (
        <div>
          <h2>Language Settings</h2>
          <p>
            <label htmlFor="language">Select Language:</label>
            <select id="language" onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </select>
          </p>
          <br />
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      )}
    
      {currentTab === 'Report and Block' && (
        <div>
          <h2>Report and Block</h2>
          <label htmlFor="userid">UserId:</label>
            <input
              type="text"
              id="userid"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <br/>
          <label htmlFor="reason">Valid reason to report:</label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={(e) =>setReason(e.target.value)}
            />          
        <br />
        <button className="save-button">Save</button>
        <button className="cancel-button">Cancel</button>
        </div>
      )}
      {currentTab === 'options' && (
        <div>
          <h2>Options</h2>
          <p>Options content goes here</p>
          <br />
          <button className="save-button">Save</button>
          <button className="cancel-button">Cancel</button>
        </div>
      )}
      {currentTab === 'Logout' && (
        <div>
          <h2>Logout</h2>
          <p>Do You want logout?</p>
          <Link to="/Login" style={{textDecoration:"none"}}>
          <button className="save-button">Yes</button>
          </Link>
          <Link to="/Setting" style={{textDecoration:"none"}}>
          <button className="cancel-button">No</button>
          </Link>
          
          
        </div>
      )}
    </div>
  </div>
</div>
);
};
export default Setting;
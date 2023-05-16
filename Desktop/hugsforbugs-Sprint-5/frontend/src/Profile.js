import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
function Profile() {
  const username = localStorage.getItem('username');
  const name = localStorage.getItem('name');
  const surname = localStorage.getItem('surname');
  const email = localStorage.getItem('email');
  const memberstatus = localStorage.getItem('memberstatus');
  const navigate = useNavigate();
  if(memberstatus === 'null'){
    localStorage.setItem('memberstatus', 'Customer');
  }
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('surname');
    localStorage.removeItem('email');
    localStorage.removeItem('memberstatus');
    navigate('/', { replace: true });
    window.history.pushState(null, null, window.location.pathname); // Replace the current history state with the homepage URL
    window.addEventListener('popstate', function (event) {
      if (event.state) {
        window.history.pushState(null, null, window.location.pathname);
      }
    });
  };

  const handleEditProfile = () => {
    navigate('/editprofile');
    console.log('Edit profile button clicked');
  };

  const handleBecomeOrganizer = () => {
    navigate('/becomeorganizer');
    console.log('Become Organizer button clicked');
  };

  return (
    <div>
      <Navbar />
      <body>
        <div className="profile-container">
          <div className="profile-header">
            <h1 className="profile-title">User Profile</h1>
            <button className="edit-profile-button" onClick={handleEditProfile}>
              Edit Profile
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="profile-content">
            <div className="profile-section">
              <h2 className="profile-section-title">Personal Information</h2>
              <div className="profile-info">
                <div className="profile-info-label profile-info-bold">Username:</div>
                <div className="profile-info-value">{username}</div>
              </div>
              <div className="profile-info">
                <div className="profile-info-label profile-info-bold">Name:</div>
                <div className="profile-info-value">{name}</div>
              </div>
              <div className="profile-info">
                <div className="profile-info-label profile-info-bold">Surname:</div>
                <div className="profile-info-value">{surname}</div>
              </div>
              <div className="profile-info">
                <div className="profile-info-label profile-info-bold">Email:</div>
                <div className="profile-info-value">{email}</div>
              </div>
              <div className="profile-info">
                <div className="profile-info-label profile-info-bold">Status:</div>
                <div className="profile-info-value">{memberstatus}</div>
              </div>
            </div>
          </div>
          {memberstatus === 'Customer' && (
                <button className="become-organizer-button" onClick={handleBecomeOrganizer}>
                  Become an Organizer
                </button>
              )}x
        </div>
      </body>
    </div>
  );
}

export default Profile;

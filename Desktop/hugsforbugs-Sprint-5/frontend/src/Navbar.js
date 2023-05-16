import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const username = localStorage.getItem('username');

  const renderSearchBar = () => {
    if (location.pathname === '/showevents') {
      return (
        <form className="form-inline">
          <div className="input-group">
            <input className="form-control" type="search" placeholder="Search An Event" aria-label="Search"  style={{ width: '600px' }} />
            <div style={{width:'10px'}}></div>
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
          </div>
        </form>
      );
    }
    return null;
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/homepage">HugsForBugs</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <li className={`nav-item ${location.pathname === '/homepage' ? 'active' : ''}`}>
            <Link to="/homepage" className="nav-link">Home Page </Link>
          </li>
          <li className={`nav-item ${location.pathname === '/showevents' ? 'active' : ''}`}>
            <Link to="/showevents" className="nav-link">Events</Link>
          </li>
          
        </ul>
        <div className='mx-auto'>{renderSearchBar()}</div>
      </div>
      <div className="ml-auto dropdown">
        <Link to="/profile" className="btn btn-primary rounded-pill">{username}</Link>
      </div>
    </nav>
  );
}

export default Navbar;

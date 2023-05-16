import React from 'react'
import  {Link} from 'react-router-dom'
import Navbar from './Navbar' ;
import './Homepage.css';
import backgroundImage from './concert.jpg';

function Homepage(){



  return (
    
    <div>
    <Navbar />  {}
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100' style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
           
        }}>

    <div>
    <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '48px', fontWeight:'bold', textAlign: 'center' }}>
          Welcome to HugsForBugs
        </h1>
        <p style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontSize: '18px', fontWeight: 'lighter', fontFamily:'sans-serif', textAlign: 'center' }}>
        Discover and enjoy amazing events with our ticket website. Explore a variety of amazing experiences, effortlessly buy your tickets, and prepare yourself to unforgettable moments.
        </p>
    
    </div>
    </div>

    </div>
   
  )
}

export default Homepage

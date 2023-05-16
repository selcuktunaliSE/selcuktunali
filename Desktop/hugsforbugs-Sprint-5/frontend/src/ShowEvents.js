import React from 'react';
import './ShowEvents.css';
import Navbar from './Navbar';

function ShowEvents() {
    const events = [

        {
          title: 'Art Exhibit',
          date: '2023-08-20',
          time: '8:30 PM',
          location: 'Museum of Modern Art, San Francisco',
          quota : '2400',
        },
        {
            title: 'Edis Konseri',
            date: '2023-08-17',
            time: '7:30 PM',
            location: 'Harbiye,İstanbul',
            quota : '5000',
          },
          {
            title: 'Jazz Festival',
            date: '2023-08-28',
            time: '9:00 PM',
            location: 'Vega, Denmark',
            quota : '6000',
          },
          {
            title: 'Pera ',
            date: '2023-05-14',
            time: '8:30 PM',
            location: 'Dorock XL,İstanbul',
            quota : '1000',
          },
          {
            title: 'RAISED ON RHYTHM',
            date: '2023-04-13',
            time: '8:00 PM',
            location: 'Royal Dramatic Theater, Sweden',
            quota : '250',
          },
          {
            title: 'Louis C.K. Show',
            date: '2023-09-12',
            time: '8:30 PM',
            location: 'Yuk Yuks,America',
            quota : '1000',
          }
      ];
  return (
    <div>
      <Navbar />  {}
    <div className='d-flex justify-content-center align-items-center  vh-100'>
    <div>
      <h1 style={{ position: 'absolute', top: 0, left: 700  }}></h1>
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time :{event.time}</p>
            <p>Location :{event.location}</p>
            <p>Quota of the event : {event.quota}</p>
            <button  className='btn btn-success w-100 green-btn'> Buy Ticket </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
  );
}

export default ShowEvents;

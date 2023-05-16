import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';
import './BecomeOrganizer.css';

function BecomeOrganizer() {
  const username = localStorage.getItem('username');
  const name = localStorage.getItem('name');
  const surname = localStorage.getItem('surname');
  const email = localStorage.getItem('email');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const handleCheckboxChange = (e) => {
    setAcceptedTerms(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Please accept the terms and conditions.');
      return;
    }
    const serviceId = 'service_si63jmo';
    const templateId = 'template_7u6rbjj';
    const userId = 'rlSdHQ97qitfpMB5n';

    emailjs.send(serviceId, templateId, {
      to_email: 'selcuktunaliSE@outlook.com', 
      from_name: username,
      from_email: email,
      message: `User with the following credentials requested to become an organizer:
      Name: ${name}
      Surname: ${surname}
      Email: ${email}`,
    }, userId)
      .then((response) => {
        console.log('Email sent successfully:', response.text);
        setSubmissionStatus('success');
        alert('Your request has been received.');
        window.location.href = '/profile'; 
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setSubmissionStatus('error');
      });
  };

  return (
    <div>
    <Navbar />
    <div className="become-organizer-container">
      <h1>Become an Organizer</h1>
      <div className="terms-and-conditions">
        <h2>Terms and Conditions</h2>
        <ul>
          <li>Term 1 - Lorem ipsum dolor sit amet</li>
          <li>Term 2 - Consectetur adipiscing elit</li>
          <li>Term 3 - Sed do eiusmod tempor incididunt</li>
          <li>Term 4 - Ut enim ad minim veniam, quis nostrud exercitation</li>
          <li>Term 5 - Duis aute irure dolor in reprehenderit in voluptate</li>
          {/* Add more terms as needed */}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="terms-checkbox">
          <input
            type="checkbox"
            id="terms-checkbox"
            checked={acceptedTerms}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terms-checkbox">I accept the terms and conditions.</label>
        </div>
        <button type="submit" disabled={!acceptedTerms}>
          Submit
        </button>
        {submissionStatus === 'error' && (
            <p className="submission-error">An error occurred. Please try again later.</p>
          )}
      </form>
    </div>
  </div>
  
  );
}

export default BecomeOrganizer;

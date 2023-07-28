import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Feedback.css';

const FeedForm = () => {
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:9876/addfed",formdata)
    navigate("/home");
    console.log(formdata);
  }
  

  return (
    <div className="down">
      <div className="login-form">
        <h2>FEEDBACK</h2>
        <form onSubmit={handleSubmit} >
          <input
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          />
          <input
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          />
             <input
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          />
            <input
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          />
          <button type='submit' onChange={handleSubmit}>Submit</button>
          <div className="button">
         
          </div>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;
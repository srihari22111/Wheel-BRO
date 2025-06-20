import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [signupMessage, setSignupMessage] = useState('');
  const [visible, setVisible] = useState(true);

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/register', values);
      setSignupMessage(response.data); // Success message from the backend
    } catch (error) {
      setSignupMessage(error.response ? error.response.data : "Registration failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Modal className="box" isOpen={visible} onRequestClose={() => setVisible(true)}>
        <div className="close-btn" onClick={() => setVisible(false)}>&times;</div>
        <h1 className="signuptitle">Sign-Up</h1><br />
        {signupMessage && <p className="message">{signupMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input type="text" placeholder="Enter Name" name="name"
              onChange={handleInput} className="iptxt" />
          </div>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email"
              onChange={handleInput} className="iptxt" />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password"
              onChange={handleInput} className="iptxt" />
          </div>
          <button type="submit" className="btn1">Signup</button><br /><br />
          <p className="words">Already have an account? <Link to="/login" className="btn2">Login</Link></p>
        </form>
      </Modal>
    </div>
  );
}

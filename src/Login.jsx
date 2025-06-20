import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [loginMessage, setLoginMessage] = useState('');
  const [visible, setVisible] = useState(true);

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', values);
      setLoginMessage(response.data); // Success message from the backend
    } catch (error) {
      setLoginMessage(error.response ? error.response.data : "Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Modal className="box" isOpen={visible} onRequestClose={() => setVisible(true)}>
        <div className="close-btn" onClick={() => setVisible(false)}>&times;</div>
        <h1 className="logintitle">Login</h1><br />
        {loginMessage && <p className="message">{loginMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label><br />
            <input type="email" placeholder="Enter Email" name="email"
              onChange={handleInput} className="iptxt" />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label><br />
            <input type="password" placeholder="Enter Password" name="password"
              onChange={handleInput} className="iptxt" />
          </div>
          <Link to="/home"><button type="submit" className="btn1">Login</button></Link><br /><br />
          <p className="words">Don't have an account? <Link to="/signup" className="btn2">Create Account</Link></p>
        </form>
      </Modal>
    </div>
  );
}

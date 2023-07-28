import React, { useState } from 'react';
import '../styles/LoginSignUp.css';
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
    setError('');
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Validate login fields
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
      // Perform login logic here
      console.log('Logged in:', email, password);
    } else {
      // Validate signup fields
      if (!name || !email || !password) {
        setError('Please fill in all fields');
        return;
      }
      // Perform signup logic here
      console.log('Signed up:', name, email, password);
    }

    // Reset error and form fields
    setError('');
    setName('');
    setEmail('');
    setPassword('');
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!validateEmail(email) && email && (
            <p className="error">Please enter a valid email address</p>
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span className="switch-form" onClick={handleSwitchForm}>
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default LoginSignUp;

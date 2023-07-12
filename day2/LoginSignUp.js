import React, { useState } from 'react';
import './LoginSignUp.css'; // Import your custom CSS file

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!email || !password) {
      console.log('Please fill in all fields');
      return;
    }

    if (isLogin) {
      // Perform login logic here
      console.log('Logged in:', email, password);
    } else {
      // Perform signup logic here
      console.log('Signed up:', name, email, password);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
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
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
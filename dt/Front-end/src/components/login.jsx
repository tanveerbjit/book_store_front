import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './login.css'; // Import your CSS file

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h2 className="form-signin-heading">Please login</h2>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Email Address"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="checkbox">
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{' '}
          Remember me
        </label>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
        >
          Login
        </button>
        <div style={{width:"100%",display:'flex', paddingTop:'10px', justifyContent:'flex-end'}}><p>Need an account? <Link to="/registration">Sign up</Link></p></div>
      </form>
    </div>
  );
}

export default LoginForm;

import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.jpg"; // Update the path as needed

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="info-section">
        <div className="box2">
         <h2 className="tagline">Check Fraud Automobile Insurance</h2>
         <h1 className="main-heading">
          PROTECTING YOU <br /> BY AI POWERED <br /> FRAUD DETECTION.
         </h1>
         <p className="signup-text">
          Don’t have an account?<br></br> <span>Create account →</span>
         </p>
         <div className="rectangle">
          <h1>About us</h1>
          <p>We use AI to detect fraudulent automobile insurance claims by analyzing image tampering and metadata. Our technology ensures fair and accurate claim processing.</p>
         </div>
        </div>
      </div>
      
      
      {/* Right Section */}
      <div className="image-section">
        <div className="login-container">
          <h3 className="login-title">Login to your account</h3>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-options">
              
              <a href="#" className="forgot-password">Forgot your password?</a>
            </div>

            <button type="submit" className="login-button">Login</button>
          </form>

          <div className="image-preview">
            <img src="https://via.placeholder.com/300x100" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

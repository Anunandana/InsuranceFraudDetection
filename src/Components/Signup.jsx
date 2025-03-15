import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Profile Image:", profileImage ? profileImage.name : "No image uploaded");
  };

  return (
    <div className="signup-page">
      {/* Left Section */}
      <div className="info-section">
        <div className="box2">
          <h2 className="tagline">Join Our Fraud Detection System</h2>
          <h1 className="main-heading">
            SECURE YOUR INSURANCE <br /> WITH AI-POWERED <br /> FRAUD DETECTION.
          </h1>
          <p className="login-text">
            Already have an account?<br></br> <span>Login →</span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <div className="signup-container">
          <h3 className="signup-title">Create Your Account</h3>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <label>Upload Profile Picture (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />

            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

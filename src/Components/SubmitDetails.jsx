import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [vehicleNo, setVehicleNo] = useState("");
  const [district, setDistrict] = useState("");
  const [place, setPlace] = useState("");
  const [pincode, setPincode] = useState(""); // Added Pincode field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vehicle No:", vehicleNo);
    console.log("District:", district);
    console.log("Place:", place);
    console.log("Pincode:", pincode);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Image:", image ? image.name : "No image uploaded");
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="info-section">
        <div className="box2">
          <h2 className="tagline">Report Insurance Claim Details</h2>
          <h1 className="main-heading">
            HELP US DETECT <br /> INSURANCE FRAUD <br /> WITH AI.
          </h1>
          <p className="signup-text">
            Ensure you provide accurate details.<br></br> <span>Secure your claim →</span>
          </p>
          <div className="rectangle">
            <h1>Why We Need These Details?</h1>
            <p>We use AI to verify claim authenticity by analyzing images and metadata. This helps prevent fraud and ensures fair claim processing.</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="image-section">
        <div className="login-container">
          <h3 className="login-title">Submit Claim Details</h3>
          <form onSubmit={handleSubmit}>
            <label>Vehicle Number</label>
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              value={vehicleNo}
              onChange={(e) => setVehicleNo(e.target.value)}
              required
            />

            <label>District</label>
            <input
              type="text"
              placeholder="Enter District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />

            <label>Place</label>
            <input
              type="text"
              placeholder="Enter Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              required
            />

            <label>Pincode</label> 
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />

            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <label>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />

            <button type="submit" className="login-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from "axios";
import "./FormStyles.css";

const Signup = ({ setAuthMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/signup", {
        email,
        password,
      });

      if (res.status === 201) {
     alert("Signup successful! Redirecting to login...");
     setAuthMode("login");

      }
    } catch (err) {
      if (err.response?.status === 409) {
        alert("User already exists. Please login.");
      } else {
        console.error("Signup error:", err);
        alert("Signup failed. Try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleClick} className="auth-form">
        <h2>Signup</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

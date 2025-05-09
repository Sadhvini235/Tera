import React, { useState } from "react";
import axios from "axios";
import "./FormStyles.css";

const Login = ({ goToHome, setUserEmail }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     
      const res = await axios.post("http://localhost:8000/api/auth/signin", 
      {
        email,
        password
      }, 
      {
        withCredentials: true
      }
    );

    console.log("Res: ", res)

      if (res.status === 200) {
        alert("Login successful!");
        setUserEmail(email); 
        goToHome();          
      } else {
        alert("Unexpected response. Try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleClick} className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import "./Form.css";

function AdminLogin(){

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Admin Login Successful");
  }

  return(
    <div className="form-container">

      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        placeholder="Admin Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        required
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
        />

        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default AdminLogin;
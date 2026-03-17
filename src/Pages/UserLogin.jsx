import React, { useState } from "react";
import "./Form.css";

function UserLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Login Successful");
  };

  return (
    <div className="form-container">

      <h2>User Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default UserLogin;
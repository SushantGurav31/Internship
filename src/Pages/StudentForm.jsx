import React, { useState } from "react";
import "./Form.css";

function StudentForm(){

  const [student,setStudent]=useState({
    name:"",
    email:"",
    course:""
  });

  const handleChange=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Student Registered Successfully");
  }

  return(
    <div className="form-container">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
        type="text"
        name="name"
        placeholder="Student Name"
        onChange={handleChange}
        required
        />

        <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
        />

        <input
        type="text"
        name="course"
        placeholder="Course Name"
        onChange={handleChange}
        required
        />

        <button type="submit">Register</button>

      </form>

    </div>
  )
}

export default StudentForm;
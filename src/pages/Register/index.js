import React, { useState } from "react";
// import axios from 'axios';
import TextInput from "../../components/TextInput";
import alogo from "../../imgs/logo.png";
import Button from "../../components/Button";
import "./register.css"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setAgeError("");
    e.preventDefault();

    if (!name) {
      setNameError("Enter Your Name");
    }

    if (!email) {
      setEmailError("Please enter your email");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if (!password) {
      console.log(password);
      setPasswordError("Enter Your Password");
      return;
    } else if (password.length < 6) {
      setPasswordError("Your Password is SHORT")
      return;
    }

    if (!age) {
      setAgeError("Enter Your Age");
      return;
    } else if (isNaN(age)) {
      setAgeError("Not a NUMBER");
    }

  }

  return (
    <div className="inputs">
      <img id="alogo" src={alogo} alt="logo.png" />
      <form onSubmit={handleSubmit}>
        <div className="info">
          <TextInput in_type="text" u_input="Name" value={name} place="Enter Your Name" onChange={(e) => setName(e.target.value)} required />
          {nameError && <p className="error">{nameError}</p>}
          <TextInput in_type="text" u_input="Email" value={email} place="Enter Your Email" onChange={(e) => setEmail(e.target.value)} required />
          {emailError && <p className="error">{emailError}</p>}
          <TextInput in_type="password" u_input="Password" value={password} place="Enter Your Password" onChange={(e) => setPassword(e.target.value)} required />
          {passwordError && <p className="error">{passwordError}</p>}
          <TextInput in_type="text" u_input="Age" value={age} place="Enter Your Age" onChange={(e) => setAge(e.target.value)} required />
          {ageError && <p className="error">{ageError}</p>}
        </div>
        <div className="jButton">
          <Button className="new">SignUp</Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
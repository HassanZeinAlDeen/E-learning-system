import { useState } from "react";
import alogo from "../../imgs/logo.png";
import Button from "../../components/Button";
import "./login.css";


function Login() {
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");

  const backHome = () => {
    window.location.href = "http://localhost:3000/"
  }

  const toreg = () => {
    window.location.href="http://localhost:3000/register"
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setEmailError("");
    setMessage("");
    setPasswordError("");

    if (!formData.get("email")) {
      setEmailError("Enter your Email");
      return;
    }

    if (!formData.get("password")) {
      setPasswordError("Enter Your Password");
      return;
    }
  }


  return (
    <>
      <div className="post">
        <a className="back" onClick={backHome}>Home Page</a>
      </div>
      <div className="inputs">
        <img id="alogo" src={alogo} alt="logo.png" />
        <form onSubmit={handleSubmit}>
          <div className="info">
            <p className="titl">Email</p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email">
            </input>
            {emailError && <p className="error">{emailError}</p>}
            <p className="titl">Password</p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password">
            </input>
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <a className="toreg" onClick={toreg}>Don't have an account?</a>
          <div className="jButton">
            <Button className="new">Login</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
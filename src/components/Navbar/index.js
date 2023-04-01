import Mylogo from "../../imgs/logo.png";
import Button from "../Button";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (<div className="nav">
    <div className="content">
      <div className="logo">
        <img id="logo" src={Mylogo} alt="logo.png" />
      </div>
      <div className="right">
        <a id="about">About Us</a>
        <Button>Login</Button>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
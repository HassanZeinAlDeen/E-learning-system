import React from "react";
import "./input.css";

const TextInput = (props) => {
  const { u_input, value, onChange, place, in_type } = props;
  
  return (
    <div className="container">
      <label>{u_input}</label>
      <input className="input-margin" type={in_type} value={value} onChange={onChange} placeholder={place}></input>
    </div>
  );
}

export default TextInput; 
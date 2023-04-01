import "./button.css";

const Button = ({ children, onClick, disabled }) => (
  <button className="log" onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
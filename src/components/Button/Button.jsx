import React from "react";
import "./Button.css";

const Button = ({
  children = "Verify PAN",
  type = "button",
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-success w-100 fw-semibold fs-22 rounded-14 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

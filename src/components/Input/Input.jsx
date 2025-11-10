import { useState } from "react";

const Input = ({
  label,
  value = "",
  checked = false,
  name,
  disabled = false,
  required = false,
  onChange,
  className = "",
  type = "text",
  placeholder = "",
  labelClassName = "",
  containerClassName = "",
  children,
}) => {
  // Checkbox ke liye different JSX
  if (type === "checkbox") {
    return (
      <div className={`form-check ${containerClassName}`}>
        <input
          className={`form-check-input ${className}`}
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <label className={`form-check-label ${labelClassName}`} htmlFor={name}>
          {children || label}
          {required && <span className="text-danger ms-1">*</span>}
        </label>
      </div>
    );
  }

  // Normal input ke liye
  return (
    <div className={`mb-3 ${containerClassName}`}>
      {label && (
        <label htmlFor={name} className={`form-label fw-500 ${labelClassName}`}>
          {label}
          {required && <span className="text-danger ms-1">*</span>}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default Input;

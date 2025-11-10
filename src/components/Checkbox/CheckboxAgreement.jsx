// src/components/ui/CheckboxAgreement.jsx
import React from "react";

const CheckboxAgreement = ({
  id = "agreement",
  checked,
  onChange,
  required = false,
  labelPrefix = "I Confirm That The Above Details Are Correct And I Agree To The",
  linkText = "Terms & Policies",
  linkHref = "#",
  className = "",
  error = "",
}) => {
  return (
    <div className={`form-check ${className}`}>
      <input
        className={`form-check-input ${error ? "is-invalid" : ""}`}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label className="form-check-label" htmlFor={id}>
        {labelPrefix}{" "}  
        <a
          href={linkHref}
          className="link-success fw-semibold"
          target="_blank"
          rel="noreferrer"
        >
          {linkText}
        </a>
      </label>

      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
};

export default CheckboxAgreement;

import React from "react";
import verification from "../../assets/img/Group 1000009062.png";
const Card = ({
  title = "",
  description = "the number registered in SEBI/KRA records",
  onContinue,
  className,
  style,
}) => {
  return (
    <div
      className={`${className}`}
      style={{
        padding: "10px 16px",
        border: "1px solid #d3d3d3",
        borderRadius: "10px",
        ...style,
      }}
      
    >
      <div className="d-flex justify-content-between align-items-center position-relative">
        <span className="fw-bold" style={{ fontSize: "14px" }}>
          {title}
        </span>
        <img
          src={verification}
          alt="instant verification"
          style={{
            position: "absolute",
            top: "-14px",
            right: "0px",
            width: "75px",
            height: "15px",
          }}
        />
      </div>
      <div
        className="d-flex justify-content-between align-items-start mt-2"
        style={{ fontSize: "10px" }}
      >
        <p style={{ fontSize: "10px" }}>{description}</p>
        <button
          className="btn btn-dark "
          onClick={onContinue}
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: "0",
            paddingBottom: "0",
            fontSize: "10px",
          }}
        >
          Continue <i className="fas fa-arrow-right"></i>
          {/* Add arrow icon here */}
        </button>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
// import { ArrowLeft } from "react-bootstrap-icons";
import {banner} from "../../public/assets/img/img1.png"
function Home() {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center px-3">
      <div
        className="card border-0 shadow-sm w-100 p-4"
        style={{
          maxWidth: "420px",
          borderRadius: "18px",
        }}
      >
        {/* Back Arrow */}
        <button
          className="btn btn-link text-dark p-0 mb-3"
          style={{ textDecoration: "none" }}
        >
          
          {/* <ArrowLeft size={22} /> */}
        </button>

        {/* Icon */}
        <div className="text-center mb-3">
          <img
            src={banner}
            alt="PAN"
            className="img-fluid"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Headings */}
        <div className="text-center mb-4">
          <h5 className="fw-semibold mb-1">Enter Your PAN</h5>
          <p className="text-muted small mb-0">
            We'll verify your details with SEBI/KRA records.
          </p>
        </div>

        {/* Form */}
        <form>
          <div className="mb-3">
            <label htmlFor="panNumber" className="form-label fw-medium">
              PAN NUMBER
            </label>
            <input
              type="text"
              id="panNumber"
              className="form-control text-uppercase"
              placeholder="ABCDE1234F"
              maxLength={10}
            />
            <small className="text-muted">
              Your PAN should be 10 characters (e.g., ABCDE1234F)
            </small>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-success w-100 py-2 fw-semibold"
          >
            Verify PAN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

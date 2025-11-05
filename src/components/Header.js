import React from "react";
import { Link } from "react-router-dom"; // Use Link from React Router

function Header() {
  return (
    <div className="appHeader bg-primary text-light">
      {/* Left section */}
      <div className="left">
        {/* Navigation using React Router */}
        <Link to="/" className="headerButton" aria-label="Go back">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </Link>
      </div>

      {/* Center logo */}
      <div className="pageTitle">
        <img
          src="assets/img/logo.png"
          alt="StockYari logo"
          className="logo"
        />
      </div>

      {/* Right section */}
      <div className="right">
        <Link to="/notifications" className="headerButton" aria-label="Notifications">
          <ion-icon name="notifications-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "./CorporateFooter.css";

const CorporateFooter = () => {
  return (
    <nav className="td-footer">
      <a href="#"><i className="bi bi-house"></i><span>Home</span></a>
      <a href="#"><i className="bi bi-star"></i><span>Watchlist</span></a>
      <a href="#"><i className="bi bi-briefcase"></i><span>Portfolio</span></a>
      <a href="#" className="active"><i className="bi bi-megaphone"></i><span>Announcements</span></a>
      <a href="#"><i className="bi bi-person"></i><span>Profile</span></a>
    </nav>
  );
};

export default CorporateFooter;

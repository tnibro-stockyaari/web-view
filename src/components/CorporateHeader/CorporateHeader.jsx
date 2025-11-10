import React from "react";
import "./CorporateHeader.css";

const CorporateHeader = () => {
  return (
    <header className="td-header">
      <h6 className="title mb-0">Corporate Announcements</h6>
      <div className="icons">
        <i className="bi bi-search"></i>
        <i className="bi bi-bell"></i>
      </div>
    </header>
  );
};

export default CorporateHeader;

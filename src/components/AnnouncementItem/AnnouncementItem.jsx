import React from "react";
import "./AnnouncementList.css";
const AnnouncementItem = ({ logo, title, badge, date, time, subtitle, description }) => {
  return (
    <div className="announcement-row">
      <img className="announcement-avatar" src={logo} alt={title} />
      <div className="announcement-body">
        <div className="announcement-top">
          <div>
            <h6 className="announcement-title">{title}</h6>
            <div className="announcement-badge">{badge}</div>
          </div>
          <div className="meta-right">
            <i className="bi bi-calendar"></i>
            <span>{date}</span>•<span>{time}</span>
            <span className="dot"></span>
          </div>
        </div>
        <p className="announcement-subtitle">{subtitle}</p>
        <p className="announcement-desc">{description}</p>
      </div>
    </div>
  );
};

export default AnnouncementItem;

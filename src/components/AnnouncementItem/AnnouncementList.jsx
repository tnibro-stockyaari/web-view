import React from "react";
import AnnouncementItem from "./AnnouncementItem";
import "./AnnouncementList.css";

const AnnouncementList = ({ announcements = [] }) => {
  console.log(announcements, "announcementsList")
  return (
    <div className="announcement-list">
      {announcements.length > 0 ? (
        announcements.map((a, idx) => <AnnouncementItem key={idx} {...a} />)
      ) : (
        <p className="no-announcements">No announcements available.</p>
      )}
    </div>
  );
};

export default AnnouncementList;

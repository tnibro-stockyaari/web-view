import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnnouncements } from "../api/AnnouncementService";

function GetCorporateAnnouncementList() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await getAnnouncements();
        const list = response.data.data || response.data || [];
        setAnnouncements(list);
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
        setError("Something went wrong while loading announcements.");
      } finally {
        setLoading(false);
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <section className="section text-center p-4">
        <div id="loader">
          <img
            src="/assets/img/loading-icon.png"
            alt="Loading"
            className="loading-icon"
          />
        </div>
        <p className="mt-3">Loading announcements...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section text-center p-4">
        <div className="alert alert-danger">{error}</div>
      </section>
    );
  }

  return (
    <section className="section container py-3">
      <h4 className="text-center mb-3">Corporate Announcements</h4>

      {announcements.length > 0 ? (
        announcements.map((item) => (
          <div
            key={item.announcement_id}
            className="card shadow-sm p-3 mb-3"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body p-2">
              <h5 className="card-title" style={{ fontSize: "1rem" }}>
                {item.news_headline}
              </h5>
              <p className="mb-1 fw-semibold" style={{ fontSize: "0.9rem" }}>
                {item.company_name} ({item.symbol_nse_name})
              </p>
              <p
                className="text-muted mb-2"
                style={{ fontSize: "0.8rem", color: "#666" }}
              >
                {item.descriptor_name} | {item.trade_date}
              </p>
              <Link
  to={`/announcement-detail/${item.announcement_id}`}
  className="btn btn-primary btn-sm w-100"
>
  View Details
</Link>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info text-center">
          No announcements found.
        </div>
      )}
    </section>
  );
}

export default GetCorporateAnnouncementList;

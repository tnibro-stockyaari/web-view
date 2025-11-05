import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function GetCorporateAnnouncementList() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch API
    fetch(`${process.env.REACT_APP_API_BASE_URL}/get-corporate-announcement-list/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setAnnouncements(data?.data || []); // same as PHP $data['data']
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-5">Loading announcements...</p>;
  if (error) return <p className="text-center mt-5 text-danger">Error: {error}</p>;

  return (
    <div className="container py-3">
      <h4 className="text-center mb-3">Corporate Announcements</h4>

      {announcements.length > 0 ? (
        announcements.map((item) => (
          <div className="card shadow-sm p-3 mb-3" key={item.announcement_id}>
            <div className="card-body p-2">
              <h5 className="card-title">{item.news_headline}</h5>
              <p className="company-name mb-1 fw-semibold">
                {item.company_name} ({item.symbol_nse_name})
              </p>
              <p className="small-text mb-2 text-muted">
                {item.descriptor_name} | {item.trade_date}
              </p>
              <a
                href={`/announcement-detail/${item.announcement_id}`}
                className="btn btn-primary btn-sm w-100"
              >
                View Details
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info text-center">No announcements found.</div>
      )}
    </div>
  );
}

export default GetCorporateAnnouncementList;

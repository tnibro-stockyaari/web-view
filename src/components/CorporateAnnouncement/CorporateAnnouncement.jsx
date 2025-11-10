import React, { useEffect, useState } from "react";
import CorporateHeader from "../CorporateHeader/CorporateHeader";
import CorporateFooter from "../CorporateFooter/CorporateFooter";
import AnnouncementList from "../AnnouncementItem/AnnouncementList";
import axiosConfig from "../../axios/axiosConfig";

const PAGE_SIZE = 50; // Show 50 items per page

const CorporateAnnouncement = () => {
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(true);

  // ✅ Step 1: Fetch all data once
  useEffect(() => {
    const fetchAllAnnouncements = async () => {
      setLoading(true);
      try {
        const res = await axiosConfig({
          method: "get",
          url: "/get-corporate-announcement-list/",
        });

        const data = res?.data?.data || [];
        const formatted = data.map((item) => {
          const [date, time] = item.trade_date?.split(" ") || ["", ""];
          return {
            logo: "/default-logo.png",
            title: item.company_name,
            badge: item.announcement_type?.replace(/_/g, " "),
            date,
            time,
            subtitle: item.news_headline || item.descriptor_name,
            description: item.news_body,
          };
        });

        setAllAnnouncements(formatted);
        // first 50 only
        setVisibleAnnouncements(formatted.slice(0, PAGE_SIZE));
        if (formatted.length <= PAGE_SIZE) setHasMore(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load announcements. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllAnnouncements();
  }, []);

  // ✅ Step 2: Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !loading &&
        hasMore
      ) {
        setLoading(true);
        setTimeout(() => {
          const nextPage = page + 1;
          const nextData = allAnnouncements.slice(0, nextPage * PAGE_SIZE);
          setVisibleAnnouncements(nextData);
          setPage(nextPage);
          if (nextData.length >= allAnnouncements.length) {
            setHasMore(false);
          }
          setLoading(false);
        }, 400); // small delay for UX
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, allAnnouncements, hasMore, loading]);

  return (
    <>
      <AnnouncementList announcements={visibleAnnouncements} />

      {loading && (
        <div className="text-center py-3">
          <div className="spinner-border text-success" role="status"></div>
          <p className="mt-2 mb-0">Loading more...</p>
        </div>
      )}

      {!hasMore && !loading && (
        <p className="text-center text-muted mt-3">
          All announcements loaded ✅
        </p>
      )}

      {error && (
        <p className="text-center text-danger mt-3 fw-semibold">{error}</p>
      )}
    </>
  );
};

export default CorporateAnnouncement;

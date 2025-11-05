import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnnouncementDetail } from "../api/AnnouncementService";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function GetCorporateAnnouncementDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);

  // Fetch announcement detail
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getAnnouncementDetail(id);
        const data = response.data.data?.[0] || null;
        setDetail(data);
      } catch (err) {
        console.error("Error fetching announcement detail:", err);
        setError("Failed to load announcement detail.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDetail();
  }, [id]);

  // Convert Base64 → Blob
  const base64ToBlob = (base64, type = "application/pdf") => {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new Blob([bytes], { type });
  };

  // 📄 View PDF
  const handleViewPDF = async () => {
    try {
      setPdfLoading(true);
      const res = await axios.get(`${API_BASE}/get-corporate-announcement-file/${id}`);
      if (res.data?.pdf_base64) {
        const pdfBlob = base64ToBlob(res.data.pdf_base64);
        const pdfURL = URL.createObjectURL(pdfBlob);
        window.open(pdfURL, "_blank");
      } else {
        alert("No PDF found for this announcement.");
      }
    } catch (err) {
      console.error("Error viewing PDF:", err);
      alert("Failed to view PDF.");
    } finally {
      setPdfLoading(false);
    }
  };

  // 💾 Download PDF
  const handleDownloadPDF = async () => {
    try {
      setPdfLoading(true);
      const res = await axios.get(`${API_BASE}/get-corporate-announcement-file/${id}`);
      if (res.data?.pdf_base64) {
        const pdfBlob = base64ToBlob(res.data.pdf_base64);
        const link = document.createElement("a");
        link.href = URL.createObjectURL(pdfBlob);
        link.download = `announcement_${id}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert("No PDF available for download.");
      }
    } catch (err) {
      console.error("Error downloading PDF:", err);
      alert("Failed to download PDF.");
    } finally {
      setPdfLoading(false);
    }
  };

  if (loading) return <p className="text-center p-4">Loading announcement...</p>;
  if (error) return <p className="alert alert-danger text-center">{error}</p>;
  if (!detail) return <p className="alert alert-warning text-center">No details found.</p>;

  return (
    <section className="section container py-3">
      <button
        className="btn btn-outline-secondary btn-sm mb-3"
        onClick={() => window.history.back()}
      >
        &larr; Back
      </button>

      <div className="card shadow-sm p-3" style={{ borderRadius: "15px" }}>
        <div className="card-body">
          <h5 className="mb-2">{detail.news_headline}</h5>
          <p className="text-muted mb-3">
            {detail.company_name} ({detail.symbol_nse_name})
          </p>

          <p><strong>Trade Date:</strong> {detail.trade_date}</p>
          <p><strong>Type:</strong> {detail.descriptor_name}</p>
          <p><strong>Announcement Type:</strong> {detail.announcement_type}</p>

          <hr />
          <p><strong>Details:</strong></p>
          <p style={{ whiteSpace: "pre-wrap" }}>{detail.news_body}</p>

          <div className="d-flex justify-content-between mt-3">
            <button
              onClick={handleViewPDF}
              className="btn btn-outline-primary w-50 me-2"
              disabled={pdfLoading}
            >
              🧾 {pdfLoading ? "Loading..." : "View PDF"}
            </button>

            <button
              onClick={handleDownloadPDF}
              className="btn btn-primary w-50"
              disabled={pdfLoading}
            >
              💾 {pdfLoading ? "Downloading..." : "Download PDF"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetCorporateAnnouncementDetail;

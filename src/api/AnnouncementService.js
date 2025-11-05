import apiClient from "./apiClient";

export const getAnnouncements = () => {
  return apiClient.get("/get-corporate-announcement-list/");
};

export const getAnnouncementDetail = (id) => {
  return apiClient.get(`/get-corporate-announcement-detail/${id}`);
};

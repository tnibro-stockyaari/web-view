import { Routes, Route } from "react-router-dom";
import GetCorporateAnnouncementList from "./pages/GetCorporateAnnouncementList";
import GetCorporateAnnouncementDetail from "./pages/GetCorporateAnnouncementDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetCorporateAnnouncementList />} />
      <Route path="/announcement-detail/:id" element={<GetCorporateAnnouncementDetail />} />
    </Routes>
  );
}

export default App;

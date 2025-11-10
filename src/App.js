import "./assets/css/global.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import KycSelectMobile from "./pages/KycSelectMobile";
import EnterPanKyc from "./pages/EnterPanKyc";
import PanDetails from "./pages/PanDetails";
import SelectMobile from "./pages/SelectMobile";
import SelectEmail from "./pages/SelectEmail";
import KycSubmit from "./pages/KycSubmit";
import CorporateAnnouncement from "./components/CorporateAnnouncement/CorporateAnnouncement";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<CorporateAnnouncement />} />
            <Route path="/kyc/select-mobile" element={<KycSelectMobile />} />
            <Route path="/kyc/enter-pan" element={<EnterPanKyc />} />
            <Route path="/kyc/pan-details" element={<PanDetails />} />
             <Route path="/kyc/select-mobile-no" element={<SelectMobile />} />
            <Route path="/kyc/select-email" element={<SelectEmail />} />
            <Route path="/kyc/submit" element={<KycSubmit />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <CorporateAnnouncement/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<KycSelectMobile />} />
          <Route path="/enter-pan" element={<EnterPanKyc />} />
          <Route path="/pan-detail" element={<PanDetails />} />
          <Route path="/select-mobile" element={<SelectMobile />} />
          <Route path="/select-email" element={<SelectEmail />} />
          <Route path="/kyc-submit" element={<KycSubmit />} />
          <Route />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

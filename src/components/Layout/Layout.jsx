import { Children } from "react";
import CorporateHeader from "../CorporateHeader/CorporateHeader";
import CorporateFooter from "../CorporateFooter/CorporateFooter";
import { Outlet } from "react-router-dom";

const Layout = ({ Children }) => {
    console.log("Outlet rendered");

  return (
    <>
      <CorporateHeader />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <CorporateFooter />
    </>
  );
};

export default Layout;

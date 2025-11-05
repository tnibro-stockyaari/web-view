import React from "react";

function Footer() {
  return (
    <>
      {/* App Footer */}
      {/* <div className="appFooter">
        <div className="footer-title">
          Copyright © Finapp 2021. All Rights Reserved.
        </div>
        <p>Bootstrap 5 based mobile template.</p>
      </div> */}
      {/* * App Footer */}

      {/* App Bottom Menu */}
      <div className="appBottomMenu">
        <a href="/" className="item active">
          <div className="col">
            <ion-icon name="pie-chart-outline"></ion-icon>
            <strong>Overview</strong>
          </div>
        </a>
        <a href="/" className="item">
          <div className="col">
            <ion-icon name="document-text-outline"></ion-icon>
            <strong>Pages</strong>
          </div>
        </a>
        <a href="/" className="item">
          <div className="col">
            <ion-icon name="apps-outline"></ion-icon>
            <strong>Components</strong>
          </div>
        </a>
        <a href="/" className="item">
          <div className="col">
            <ion-icon name="card-outline"></ion-icon>
            <strong>My Cards</strong>
          </div>
        </a>
        <a href="/" className="item">
          <div className="col">
            <ion-icon name="settings-outline"></ion-icon>
            <strong>Settings</strong>
          </div>
        </a>
      </div>
      {/* * App Bottom Menu */}
    </>
  );
}

export default Footer;

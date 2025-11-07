import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IonIcon } from "@ionic/react";
import {
  chevronBackOutline,
  closeCircle,
  arrowUpCircleOutline,
  pieChartOutline,
  documentTextOutline,
  appsOutline,
  cardOutline,
  settingsOutline,
  addOutline,
  arrowDownOutline,
  arrowForwardOutline,
  chatbubbleOutline,
  logOutOutline,
} from "ionicons/icons";

const InputsPage = () => {
  return (
    <div className="appContainer bg-light min-vh-100">
      {/* Loader */}

      {/* Header */}
      <div className="appHeader d-flex justify-content-between align-items-center p-3 border-bottom bg-white">
        <div className="left">
          <a href="#" className="headerButton">
            <IonIcon icon={chevronBackOutline} />
          </a>
        </div>
        <div className="pageTitle fw-bold">Inputs</div>
        <div className="right"></div>
      </div>

      {/* Capsule */}
      <div id="appCapsule" className="p-3">
        {/* Basic Section */}
        <div className="section mt-2">
          <div className="section-title fw-semibold mb-2">Basic</div>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <form>
                <div className="form-group basic mb-3">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="userid1">
                      User ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userid1"
                      placeholder="Enter a User ID"
                    />
                    <i className="clear-input">
                      <IonIcon icon={closeCircle} />
                    </i>
                  </div>
                </div>

                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="amount1">
                      Amount
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount1"
                      placeholder="Enter an Amount"
                    />
                    <i className="clear-input">
                      <IonIcon icon={closeCircle} />
                    </i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Animated Section */}
        <div className="section mt-4">
          <div className="section-title fw-semibold mb-2">Animated</div>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <form>
                <div className="form-group basic animated mb-3">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="userid2">
                      User ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userid2"
                      placeholder="User ID"
                    />
                    <i className="clear-input">
                      <IonIcon icon={closeCircle} />
                    </i>
                  </div>
                </div>

                <div className="form-group basic animated">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="amount2">
                      Amount
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount2"
                      placeholder="Amount"
                    />
                    <i className="clear-input">
                      <IonIcon icon={closeCircle} />
                    </i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="section mt-4">
          <div className="section-title fw-semibold mb-2">Additional Text</div>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <form>
                <div className="form-group basic mb-3">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="userid3">
                      User ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userid3"
                      placeholder="Type a User ID"
                    />
                    <i className="clear-input">
                      <IonIcon icon={closeCircle} />
                    </i>
                  </div>
                  <div className="input-info text-muted small">
                    Please type a user id
                  </div>
                </div>

                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="amount3">
                      Amount
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="amount3"
                      placeholder="Enter an amount"
                    />
                    <i className="clear-input">
                      <IonIcon icon={closeCircle} />
                    </i>
                  </div>
                  <div className="input-info text-muted small">
                    Min $50 - Max $500
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="appBottomMenu d-flex justify-content-around align-items-center border-top bg-white p-2">
        <a href="#" className="item text-center">
          <IonIcon icon={pieChartOutline} />
          <div>Overview</div>
        </a>
        <a href="#" className="item text-center">
          <IonIcon icon={documentTextOutline} />
          <div>Pages</div>
        </a>
        <a href="#" className="item text-center">
          <IonIcon icon={appsOutline} />
          <div>Components</div>
        </a>
        <a href="#" className="item text-center">
          <IonIcon icon={cardOutline} />
          <div>My Cards</div>
        </a>
        <a href="#" className="item text-center">
          <IonIcon icon={settingsOutline} />
          <div>Settings</div>
        </a>
      </div>
    </div>
  );
};

export default InputsPage;

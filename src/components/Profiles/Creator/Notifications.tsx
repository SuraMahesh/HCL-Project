import React from "react";
import "./creator.styles.scss";

export interface NotificationsProps {}

const Notifications: React.SFC<NotificationsProps> = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">User</li>
          <li className="breadcrumb-item active" aria-current="page">
            Profile Settings
          </li>
        </ol>
      </nav>
      <div className="row" gutters-sm>
        <div className="col-md-4 d-none d-md-block">
          <div className="card">
            <div className="card-body">
              <nav className="nav flex-column nav-pills nav-gap-y-1">
                <a
                  href="creatorprofile"
                  data-toggle="tab"
                  className="nav-item nav-link has-icon nav-link-faded"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-user mr-2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile Information
                </a>
                <a
                  href="accountsettings"
                  data-toggle="tab"
                  className="nav-item nav-link has-icon nav-link-faded"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-settings mr-2"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  Privacy
                </a>
                
                <a
                  href="notifications"
                  data-toggle="tab"
                  className="nav-item nav-link has-icon nav-link-faded active"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-bell mr-2"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                 Alerts
                </a>
                <a
                  href="billing"
                  data-toggle="tab"
                  className="nav-item nav-link has-icon nav-link-faded"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-credit-card mr-2"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  Listing Payment Status
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-header border-bottom mb-3 d-flex d-md-none">
              <ul
                className="nav nav-tabs card-header-tabs nav-gap-x-1"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    href="#profile"
                    data-toggle="tab"
                    className="nav-link has-icon active"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#account"
                    data-toggle="tab"
                    className="nav-link has-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-settings"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#security"
                    data-toggle="tab"
                    className="nav-link has-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-shield"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#notifications"
                    data-toggle="tab"
                    className="nav-link has-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bell"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#billing"
                    data-toggle="tab"
                    className="nav-link has-icon"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-credit-card"
                    >
                      <rect
                        x="1"
                        y="4"
                        width="22"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body tab-content">
              <div className="tab-pane active" id="profile">
                <h6>NOTIFICATIONS SETTINGS</h6>
                <hr />
                <form>
                  <div className="form-group">
                    <label className="d-block mb-0">Seurity Alerts</label>
                    <div className="small text-muted mb-3">
                      Receive security alert notifications via email
                    </div>
                    <div className="from-check">
                      <input
                        type="checkbox"
                        className="from-check-input"
                        id="customCheck1"
                      />
                      <label
                        className="from-check-label"
                        htmlFor="customCheck1"
                      >
                        {" "}
                        Email each time a vulnerability is found{" "}
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="from-check-inputt"
                        id="customCheck2"
                      />
                      <label
                        className="from-check-label"
                        htmlFor="customCheck2"
                      >
                        {" "}
                        Email a digest summary of vulnerability{" "}
                      </label>
                    </div>
                  </div>
                  <p></p>
                  <div className="form-group mb-0">
                    <label className="d-block">SMS Notifications</label>
                    <ul className="list-group list-group-sm">
                      <li className="list-group-item has-icon">
                        Comments
                        <div className="from-check from-switch">
                          <input
                            type="checkbox"
                            className="from-check-input"
                            id="customSwitch1"
                            checked
                          />
                          <label
                            className="from-check-label"
                            htmlFor="customSwitch1"
                          ></label>
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Updates From People
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            className="from-check-input"
                            id="customSwitch2"
                            checked
                          />
                          <label
                            className="from-check-label"
                            htmlFor="customSwitch2"
                          ></label>
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Reminders
                        <div className="from-check from-switch">
                          <input
                            type="checkbox"
                            className="from-check-input"
                            id="customSwitch3"
                          />
                          <label
                            className="from-check-label"
                            htmlFor="customSwitch3"
                          ></label>
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Events
                        <div className="from-check from-switch">
                          <input
                            type="checkbox"
                            className="from-check-input"
                            id="customSwitch4"
                          />
                          <label
                            className="from-check-label"
                            htmlFor="customSwitch4"
                          ></label>
                        </div>
                      </li>
                      <li className="list-group-item has-icon">
                        Pages You Follow
                        <div className="from-check from-switch">
                          <input
                            type="checkbox"
                            className="from-check-input"
                            id="customSwitch5"
                          />
                          <label
                            className="from-check-label"
                            htmlFor="customSwitch5"
                          ></label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

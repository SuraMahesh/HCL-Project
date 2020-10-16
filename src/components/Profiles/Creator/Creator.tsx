import React from "react";
import "./creator.styles.scss";

export interface CreatorProfileProps { }

const CreatorProfile: React.SFC<CreatorProfileProps> = () => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb" className="main-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">User</li>
          <li className="breadcrumb-item active" aria-current="page">
            Update Account
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
                    className="feather feather-user mr-2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  My account
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
                <h6>Update Account</h6>
                <hr />
                <form>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      User Type
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">User</a>
                      <a className="dropdown-item" href="#">Company</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <p></p>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      aria-describedby="fullNameHelp"
                      placeholder="Enter your fullname"
                    ></input>
                    <small id="fullNameHelp" className="form-text text-muted">
                    </small>
                  </div>
                  
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                    ></input>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="phone">Cell Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your cell phone number"
                    ></input>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="fullName">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      aria-describedby="fullNameHelp"
                      placeholder="Enter your country"
                    ></input>
                    <small id="fullNameHelp" className="form-text text-muted">
                    </small>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="fullName">Region</label>
                    <p></p>
                      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                        Select a region....
                      </button>
                      <div className="dropdown-menu dropdown-menu-lg-right">
                        <button className="dropdown-item" type="button">Action</button>
                        <button className="dropdown-item" type="button">Another action</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                      </div>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="fullName">City</label>
                    <p></p>
                      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                        Select a City....
                      </button>
                      <div className="dropdown-menu dropdown-menu-lg-right">
                        <button className="dropdown-item" type="button">Action</button>
                        <button className="dropdown-item" type="button">Another action</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                      </div>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="bio">City Area</label>
                    <input
                      className="form-control autosize"
                      id="bio"
                      placeholder="Enter your City Area"
                      style={{}}
                    ></input>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="bio">Addres</label>
                    <input
                      className="form-control autosize"
                      id="bio"
                      placeholder="Enter your currnt address"
                      style={{}}
                    ></input>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="url">Website</label>
                    <input
                      type="text"
                      className="form-control"
                      id="url"
                      placeholder="Enter your website address"
                    ></input>
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="location">Description</label>
                    <textarea
                      className="form-control"
                      id="location"
                      placeholder="Enter your location"
                    ></textarea>
                  </div>
                  <div className="form-group small text-muted">
                  </div>
                  <p></p>
                  <button type="button" className="btn btn-primary">
                    Update Profile
                  </button>
                  <button type="reset" className="btn btn-light">
                    Reset Changes
                  </button>
                 
                 
                </form>
              
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CreatorProfile;

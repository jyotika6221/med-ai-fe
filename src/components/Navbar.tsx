import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <div className="header-area ">
          <div id="sticky-header" className="main-header-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3">
                  <h2 className="text-white">Med-AI</h2>
                </div>
                <div className="col-xl-9 col-lg-9">
                  <div className="menu_wrap d-none d-lg-block">
                    <div className="menu_wrap_inner d-flex align-items-center justify-content-end">
                      <div className="main-menu">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <a href="/home">home</a>
                            </li>
                            <li>
                              <a href="/">About</a>
                            </li>
                            <li>
                              <a href="/reminder">Reminder</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="book_room">
                        <div className="book_btn">
                          <a className="popup-with-form" href="#test-form">
                            Book Appointment
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <form id="test-form" className="white-popup-block mfp-hide">
        <div className="popup_box ">
          <div className="popup_inner">
            <h3>
              Book an
              <span>Appointment</span>
            </h3>
            <form action="#">
              <div className="row">
                <div className="col-xl-12">
                  <select className="form-select wide" id="default-select">
                    <option data-display="Please select doctor to visit">
                      Please select doctor to visit{" "}
                    </option>
                    <option value="1">Anaf</option>
                    <option value="2">Nayna Therapy</option>
                    <option value="3">Nadif</option>
                  </select>
                </div>
                <div className="col-xl-9">
                  <input type="text" placeholder="Your name " />
                </div>
                <div className="col-xl-3">
                  <input type="text" placeholder="Your age" />
                </div>
                <div className="col-xl-6">
                  <input type="text" placeholder="Phone number " />
                </div>
                <div className="col-xl-6">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="col-xl-6">
                  <input
                    className="datepicker"
                    placeholder="Appointment Date"
                  />
                </div>
                <div className="col-xl-6">
                  <input className="timepicker" placeholder="Suitable time" />
                </div>
                <div className="col-xl-12">
                  <button type="submit" className="boxed-btn3">
                    Make an Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Navbar;

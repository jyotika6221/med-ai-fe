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
                              <a href="/blogs">Blogs</a>
                            </li>
                            <li>
                              <a href="/reminder">Medicine Reminder</a>
                            </li>
                            <li>
                              <a href="/prescription">Upload Prescription</a>
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
    </div>
  );
}

export default Navbar;

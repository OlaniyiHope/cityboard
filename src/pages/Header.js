import React from "react";
import Footer from "./Footer";
import useAuth from "./useAuth";
import parkwell from "./new.png";
const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <header class="header">
        <div class="header-inner">
          <nav class="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span class="navbar-toggler-icon">
                  <i class="fa-solid fa-bars"></i>
                </span>
              </button>
              <a
                class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto"
                href="/"
              >
                <div class="res-main-logo">
                  <img
                    src={parkwell}
                    alt=""
                    style={{ width: "100px", height: "30px" }}
                  />
                </div>
                <div class="main-logo" id="logo">
                  <img
                    src={parkwell}
                    alt=""
                    style={{ width: "100px", height: "30px" }}
                  />
                  <img
                    class="logo-inverse"
                    src={parkwell}
                    alt=""
                    style={{ width: "100px", height: "30px" }}
                  />
                </div>
              </a>
              <div
                class="offcanvas offcanvas-start"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div class="offcanvas-header">
                  <div class="offcanvas-logo" id="offcanvasNavbarLabel"></div>
                  <button
                    type="button"
                    class="close-btn"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div class="offcanvas-body">
                  <div class="offcanvas-top-area">
                    <div class="create-bg">
                      <a
                        href="/create-event"
                        class=""
                        style={{
                          backgroundColor: "#FF6602",
                          padding: "40px",
                          color: "white",
                        }}
                      >
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>Create Event</span>
                      </a>
                    </div>
                  </div>
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe_5">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link "
                        aria-current="page"
                        href="/explore-events"
                      >
                        Explore Events
                      </a>
                    </li>

                    {/*<li class="nav-item">
                      <a class="nav-link" href="pricing.html">
                        Pricing
                      </a>
  </li>*/}

                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/blog">
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/faq">
                        Help
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/contact">
                        Contact Us
                      </a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" href="/about">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="offcanvas-footer">
                  <div class="offcanvas-social">
                    <h5>Follow Us</h5>
                    <ul class="social-links">
                      <li>
                        <a href="#" class="social-link">
                          <i class="fab fa-facebook-square"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-link">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-link">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-link">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="social-link">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="right-header order-2">
                <ul class="align-self-stretch">
                  <li>
                    <a href="/create-event" class="create-btn btn-hover">
                      <i class="fa-solid fa-calendar-days"></i>
                      <span>Create Event</span>
                    </a>
                  </li>

                  {isAuthenticated ? (
                    // User is authenticated, show account dropdown
                    <li className="dropdown account-dropdown">
                      <a
                        href="#"
                        className="account-link"
                        role="button"
                        id="accountClick"
                        data-bs-auto-close="outside"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {/* Display user information or profile picture here */}
                        <img src="images/profile-imgs/img-13.jpg" alt="" />
                        <i className="fas fa-caret-down arrow-icon"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-account dropdown-menu-end"
                        aria-labelledby="accountClick"
                      >
                        <li>
                          <div className="dropdown-account-header">
                            {/* Display user information here */}
                            <div className="account-holder-avatar">
                              <img
                                src="images/profile-imgs/img-13.jpg"
                                alt=""
                              />
                            </div>
                            <h5>John Doe</h5>
                            <p>johndoe@example.com</p>
                          </div>
                        </li>
                        <li className="profile-link">
                          <a to="/dashboard" className="link-item">
                            My Dashboard
                          </a>
                          <Link to="/organizer-profile" className="link-item">
                            My Profile
                          </Link>
                          <button className="link-item" onClick={handleLogout}>
                            Sign Out
                          </button>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <a href="/login" className="nav-link" aria-current="page">
                        Login/Register
                      </a>
                    </li>
                  )}
                  {/*      <li>
                    <div class="night_mode_switch__btn">
                      <div id="night-mode" class="fas fa-moon fa-sun"></div>
                    </div>
</li>*/}
                </ul>
              </div>
            </div>
          </nav>
          <div class="overlay"></div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      {/* Mobile Menu Toggle */}
      <div
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          fontSize: "24px",
          color: "black",
          cursor: "pointer",
          zIndex: "100",
          display: "none",
        }}
        className="icon-menu"
        onClick={toggleMobileMenu}
      >
        Menu
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            zIndex: "99",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                cursor: "pointer",
              }}
              className="icon-close2 js-menu-toggle"
              onClick={toggleMobileMenu}
            >
              &times;
            </span>
          </div>
          {/* ... mobile menu content */}
          <nav
            className="site-navigation"
            role="navigation"
            style={{
              display: mobileMenuOpen ? "none" : "block",
            }}
          >
            {/* Menu Items */}
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
              {/* ... menu items */}
              <li>
                <a href="#home-section" className="nav-link">
                  <Link to="/" style={{ color: "black" }}>
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a href="#features-section" className="nav-link">
                  <Link to="/about-me" style={{ color: "black" }}>
                    Profile
                  </Link>
                </a>
              </li>
              {/* Submenu */}
              <li>
                <a href="#about-section" className="nav-link">
                  <Link to="/album" style={{ color: "black" }}>
                    Album
                  </Link>
                </a>
              </li>
              <li>
                <a href="#testimonials-section" className="nav-link">
                  <Link to="/video" style={{ color: "black" }}>
                    Videos
                  </Link>
                </a>
              </li>
              <li>
                <a href="#blog-section" className="nav-link">
                  <Link to="/booking" style={{ color: "black" }}>
                    Bookings
                  </Link>
                </a>
              </li>
            </ul>
          </nav>
          <div
            className={`mobile-bar-control mobile-bar-control-white ${
              mobileMenuOpen ? "open" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <div
              class="mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none"
              onClick={toggleMobileMenu}
            >
              <div className={`line ${mobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${mobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${mobileMenuOpen ? "open" : ""}`}></div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-6 col-md-3 col-xl-4 d-block">
              <h1 className="mb-0 site-logo">
                <Link to="/" className="text-black h2 mb-0">
                  Tim<span className="text-primary">Godfrey</span>
                </Link>
              </h1>
            </div>
            {/* Main Menu */}
            <div className="col-12 col-md-9 col-xl-8 main-menu">
              {/* Navigation */}
              <nav
                className="site-navigation"
                role="navigation"
                style={{
                  display: mobileMenuOpen ? "none" : "block",
                }}
              >
                {/* Menu Items */}
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ml-0 pl-0">
                  {/* ... menu items */}
                  <li>
                    <a href="#home-section" className="nav-link">
                      <Link to="/" style={{ color: "black" }}>
                        Home
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a href="#features-section" className="nav-link">
                      <Link to="/about-me" style={{ color: "black" }}>
                        Profile
                      </Link>
                    </a>
                  </li>
                  {/* Submenu */}
                  <li>
                    <a href="#about-section" className="nav-link">
                      <Link to="/album" style={{ color: "black" }}>
                        Album
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials-section" className="nav-link">
                      <Link to="/video" style={{ color: "black" }}>
                        Videos
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a href="#blog-section" className="nav-link">
                      <Link to="/booking" style={{ color: "black" }}>
                        Bookings
                      </Link>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;

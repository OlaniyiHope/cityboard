import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navy = () => {
  return (
    <div>
      <div className="navbar-area">
        <nav
          className="navbar navbar-area navbar-expand-lg"
          style={{ backgroundColor: "#fff", padding: "30" }}
        >
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-toggle="collapse"
                data-target="#realdeal_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo readeal-top">
              <a to="/">
                <Link to="/">
                  <h1 class="mb-0 site-logo">
                    <a href="index-2.html" class="text-black h2 mb-0">
                      Tim<span class="text-primary">Godfrey</span>{" "}
                    </a>
                  </h1>
                </Link>
              </a>
            </div>
            <div className="nav-right-part nav-right-part-mobile"></div>
            <div className="collapse navbar-collapse" id="realdeal_main_menu">
              <ul className="navbar-nav menu-open readeal-top">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-me">Profile</Link>
                </li>
                <li>
                  <Link to="/album">Album</Link>
                </li>
                <li>
                  <Link to="/video">Videos</Link>
                </li>
                <li>
                  <Link to="/booking">Bookings</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navy;

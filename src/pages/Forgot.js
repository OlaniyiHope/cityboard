import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import parkwell from "./parklogo.png";

const Forgot = () => {
  return (
    <>
      <div class="form-wrapper">
        <div class="app-form">
          <div class="app-form-sidebar">
            <div class="sidebar-sign-logo">
              <img src={parkwell} alt="" />
            </div>
            <div class="sign_sidebar_text">
              <h1>
                The Easiest Way to Create Events and Sell More Tickets Online
              </h1>
            </div>
          </div>
          <div class="app-form-content">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-md-10">
                  <div class="app-top-items">
                    <a href="index.html">
                      <div class="sign-logo" id="logo">
                        <img src={parkwell} alt="" />
                        <img class="logo-inverse" src={parkwell} alt="" />
                      </div>
                    </a>
                    <div class="app-top-right-link">
                      <a class="sidebar-register-link" href="sign_in.html">
                        <i class="fa-regular fa-circle-left me-2"></i>Back to
                        sign in
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-md-7">
                  <div class="registration">
                    <form>
                      <h2 class="registration-title">Forgot Password</h2>
                      <div class="form-group mt-5">
                        <label class="form-label">Your Email*</label>
                        <input
                          class="form-control h_50"
                          type="email"
                          placeholder="Enter your email"
                          value=""
                        />
                      </div>
                      <button
                        class="main-btn btn-hover w-100 mt-4"
                        type="submit"
                      >
                        Reset Password
                      </button>
                    </form>
                    <div class="new-sign-link">
                      <a class="signup-link" href="sign_in.html">
                        <i class="fa-regular fa-circle-left me-2"></i>Back to
                        sign in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright-footer">
              © 2022, Ticket Loop. All rights reserved. Powered by Parkwell
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        class="footer-wrapper footer-default"
        data-bg-src="assets/img/bg/footer-default-bg-mask.png"
      >
        <div
          class="footer-bg-shape2 shape-mockup jump"
          data-top="20%"
          data-right="0"
        >
          <img src="assets/img/shape/footer-bg-shape3.png" alt="img" />
        </div>
        <div
          class="footer-bg-shape3 shape-mockup d-none"
          data-bottom="0"
          data-right="0"
        >
          <img src="assets/img/shape/footer-bg-shape2.png" alt="img" />
        </div>
        <div class="footer-top">
          <div class="container">
            <div class="subscribe-box">
              <div class="row gy-40 align-items-center justify-content-center">
                <div class="col-xl-6">
                  <h4 class="subscribe-box_title">
                    Subscribe to Our Newsletter
                  </h4>
                  <p class="subscribe-box_text">
                    Get regular information about Christfolworld when you
                    subscribe to our newsletter
                  </p>
                </div>
                <div class="col-xl-6 col-lg-8">
                  <form class="newsletter-form">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="email"
                        placeholder="Enter Email Address"
                        required=""
                      />
                    </div>
                    <button type="submit" class="th-btn style3">
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="widget-area">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-md-6 col-xl-auto">
                <div class="widget footer-widget">
                  <div class="th-widget-about">
                    <div class="about-logo">
                      <a href="/" style={{ color: "white" }}>
                        CHRISFOLWORLD
                      </a>
                    </div>
                    <p class="about-text">
                      {" "}
                      Every child in Nigeria must have access to quality
                      education
                    </p>
                    <a href="contact.html" class="th-btn">
                      <i class="fas fa-heart me-2"></i> Donate Now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-auto">
                <div class="widget widget_nav_menu footer-widget">
                  <h3 class="widget_title">Quick Links</h3>
                  <div class="menu-all-pages-container">
                    <ul class="menu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="blog.html">Our Program</a>
                      </li>
                      <li>
                        <a href="about.html">Donation</a>
                      </li>

                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-auto">
                <div class="widget widget_nav_menu footer-widget">
                  <h3 class="widget_title">Our Service</h3>
                  <div class="menu-all-pages-container">
                    <ul class="menu">
                      <li>
                        <a href="donate-now.html"> Donation</a>
                      </li>
                      <li>
                        <a href="faq.html">Education Support</a>
                      </li>
                      <li>
                        <a href="faq.html">Health Support</a>
                      </li>
                      <li>
                        <a href="faq.html">Advocacy and Awareness:</a>
                      </li>
                      <li>
                        <a href="gallery.html">Livelihood Support </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-auto">
                <div class="widget footer-widget">
                  <div class="th-widget-contact">
                    <h3 class="widget_title">Contact Us</h3>
                    <div class="info-card">
                      <div class="box-icon">
                        <i class="fal fa-phone"></i>
                        <div
                          class="bg-shape1"
                          data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                        ></div>
                        <div
                          class="bg-shape2"
                          data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                        ></div>
                      </div>
                      <div class="box-content">
                        <p class="box-text">Call us any time:</p>
                        <h4 class="box-title">
                          <a href="tel:16336547896">08160603367,07035501125</a>
                        </h4>
                      </div>
                    </div>
                    <div class="info-card">
                      <div class="box-icon">
                        <i class="fal fa-envelope-open"></i>
                        <div
                          class="bg-shape1"
                          data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                        ></div>
                        <div
                          class="bg-shape2"
                          data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"
                        ></div>
                      </div>
                      <div class="box-content">
                        <p class="box-text">Email us any time:</p>
                        <h4 class="box-title">
                          <a href="mailto:info@donat.com">
                            chrisfolworld@gmail.com
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div class="th-social style2">
                      <a href="https://www.facebook.com/chrisfolworld">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.instagram.com/chrisfolworld">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/chrisfolworld">
                        <i class="fab fa-youtube"></i>
                      </a>
                      <a href="https://www.linkedin.com/chrisfolworld">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-wrap">
          <div class="container">
            <div class="row justify-content-center gy-3 align-items-center">
              <div class="col-lg-12">
                <p class="copyright-text text-center">
                  <i class="fal fa-copyright"></i> Copyright 2024{" "}
                  <a href="index.html">Christfolworld</a>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

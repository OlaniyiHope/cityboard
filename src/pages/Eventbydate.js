import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import parkwell from "./parklogo.png";

const Eventbydate = () => {
  return (
    <>
      <body class="d-flex flex-column h-100">
        <Header />

        <div class="wrapper">
          <div class="hero-banner">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8 col-md-10">
                  <div class="hero-banner-content">
                    <h2>Discover Events For All The Things You Love</h2>
                    <div class="search-form main-form">
                      <div class="row g-3">
                        <div class="col-lg-5 col-md-12">
                          <div class="form-group search-category">
                            <select
                              class="selectpicker"
                              data-width="100%"
                              data-size="5"
                            >
                              <option
                                value="browse_all"
                                data-icon="fa-solid fa-tower-broadcast"
                                selected
                              >
                                Browse All
                              </option>
                              <option
                                value="online_events"
                                data-icon="fa-solid fa-video"
                              >
                                Online Events
                              </option>
                              <option
                                value="venue_events"
                                data-icon="fa-solid fa-location-dot"
                              >
                                Venue Events
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-5 col-md-12">
                          <div class="form-group">
                            <select
                              class="selectpicker"
                              data-width="100%"
                              data-size="5"
                              data-live-search="true"
                            >
                              <option value="01" selected>
                                All
                              </option>
                              <option value="02">Arts</option>
                              <option value="03">Business</option>
                              <option value="04">
                                Coaching and Consulting
                              </option>
                              <option value="05">Community and Culture</option>
                              <option value="06">Education and Training</option>
                              <option value="07">Family and Friends</option>
                              <option value="08">Fashion and Beauty</option>
                              <option value="09">Film and Entertainment</option>
                              <option value="10">Food and Drink</option>
                              <option value="11">Free</option>
                              <option value="12">Health and Wellbeing</option>
                              <option value="13">Hobbies and Interest</option>
                              <option value="14">Music and Theater</option>
                              <option value="15">
                                Religion and Spirituality
                              </option>
                              <option value="16">Science and Technology</option>
                              <option value="17">Sports and Fitness</option>
                              <option value="18">Travel and Outdoor</option>
                              <option value="19">Visual Arts</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-2 col-md-12">
                          <a href="#" class="main-btn btn-hover w-100">
                            Find
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="explore-events p-80">
            <div class="container">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                  <div class="main-title">
                    <h3>Explore Events</h3>
                  </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12">
                  <div class="event-filter-items">
                    <div class="featured-controls">
                      <div class="filter-tag">
                        <a href="/event-by-date" class="active">
                          All
                        </a>
                        <a href="/event-by-date">Today</a>
                        <a href="/event-by-date">Tomorrow</a>
                        <a href="/event-by-date">This Week</a>
                        <a href="/event-by-date">This Weekend</a>
                        <a href="/event-by-date">Next Week</a>
                        <a href="/event-by-date">Next Weekend</a>
                        <a href="/event-by-date">This Month</a>
                        <a href="/event-by-date">Next Month</a>
                        <a href="/event-by-date">This Year</a>
                        <a href="/event-by-date">Next Year</a>
                      </div>

                      <div class="row" data-ref="event-filter-content">
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert workshops volunteer sports health_Wellness"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/venue-event" class="thumbnail-img">
                                <img src="images/event-imgs/img-1.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/venue-event" class="event-title">
                                A New Way Of Life
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price">N7,500*</span>
                                <span class="remaining"></span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    15 Apr
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Fri, 3.45 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>1h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix business workshops volunteer sports health_Wellness"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/event-details" class="thumbnail-img">
                                <img src="images/event-imgs/img-2.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/event-details" class="event-title">
                                Earrings Workshop with Bronwyn David
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price">N7,500*</span>
                                <span class="remaining">
                                  <i class="fa-solid fa-ticket fa-rotate-90"></i>
                                  6 Remaining
                                </span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    30 Apr
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Sat, 11.20 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>2h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix coaching_consulting free concert volunteer health_Wellness bussiness"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/venue-event" class="thumbnail-img">
                                <img src="images/event-imgs/img-3.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/venue-event" class="event-title">
                                Spring Showcase Saturday April 30th 2022 at 7pm
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price">Free*</span>
                                <span class="remaining"></span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    1 May
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Sun, 4.30 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>3h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 mix health_Wellness concert volunteer sports free business"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/event-details" class="thumbnail-img">
                                <img src="images/event-imgs/img-4.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/event-details" class="event-title">
                                Shutter Life
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price">N7,500*</span>
                                <span class="remaining">
                                  <i class="fa-solid fa-ticket fa-rotate-90"></i>
                                  7 Remaining
                                </span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    1 May
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Sun, 5.30 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>1h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix concert sports health_Wellness free arts"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/venue-event" class="thumbnail-img">
                                <img src="images/event-imgs/img-5.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/venue-event" class="event-title">
                                Friday Night Dinner at The Old Station May 27
                                2022
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price"> N41.50*</span>
                                <span class="remaining"></span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    27 May
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Fri, 12.00 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>5h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix workshops concert arts volunteer sports"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/venue-event" class="thumbnail-img">
                                <img src="images/event-imgs/img-6.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/venue-event" class="event-title">
                                Step Up Open Mic Show
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price"> N200.00*</span>
                                <span class="remaining"></span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    30 Jun
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Thu, 4.30 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>1h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix volunteer free health_Wellness"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/event-details" class="thumbnail-img">
                                <img src="images/event-imgs/img-7.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/event-details" class="event-title">
                                Tutorial on Canvas Painting for Beginners
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price"> N50.00*</span>
                                <span class="remaining">
                                  <i class="fa-solid fa-ticket fa-rotate-90"></i>
                                  17 Remaining
                                </span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    17 Jul
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Sun, 5.30 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>1h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert volunteer arts"
                          data-ref="mixitup-target"
                        >
                          <div class="main-card mt-4">
                            <div class="event-thumbnail">
                              <a href="/venue-event" class="thumbnail-img">
                                <img src="images/event-imgs/img-8.jpg" alt="" />
                              </a>
                              <span
                                class="bookmark-icon"
                                title="Bookmark"
                              ></span>
                            </div>
                            <div class="event-content">
                              <a href="/venue-event" class="event-title">
                                Trainee Program on Leadership' 2022
                              </a>
                              <div class="duration-price-remaining">
                                <span class="duration-price"> N120.00*</span>
                                <span class="remaining">
                                  <i class="fa-solid fa-ticket fa-rotate-90"></i>
                                  7 Remaining
                                </span>
                              </div>
                            </div>
                            <div class="event-footer">
                              <div class="event-timing">
                                <div class="publish-date">
                                  <span>
                                    <i class="fa-solid fa-calendar-day me-2"></i>
                                    20 Jul
                                  </span>
                                  <span class="dot">
                                    <i class="fa-solid fa-circle"></i>
                                  </span>
                                  <span>Wed, 11.30 PM</span>
                                </div>
                                <span class="publish-time">
                                  <i class="fa-solid fa-clock me-2"></i>12h
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="browse-btn">
                        <a
                          href="explore_events.html"
                          class="main-btn btn-hover "
                        >
                          No more events
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
};

export default Eventbydate;

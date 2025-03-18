import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const NewSwipe = () => {
  const newsData = [
    {
      date: "July 16, 2024",
      category: "Education",
      title: "See Your Impact: Transparent Donation Tracking",
      image: "assets/img/blog/blog_1_1.jpg",
      link: "blog-details.html",
    },
    {
      date: "March 24, 2024",
      category: "Education",
      title: "Every Contribution Counts: Make a Difference",
      image: "assets/img/blog/blog_1_2.jpg",
      link: "blog-details.html",
    },
    {
      date: "June 30, 2024",
      category: "Education",
      title: "Real Stories, Real Impact: Your Donations at Work",
      image: "assets/img/blog/blog_1_3.jpg",
      link: "blog-details.html",
    },
  ];

  return (
    <div className="slider-area">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        autoHeight={true}
      >
        {newsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="blog-card">
              <div className="blog-img">
                <a href={item.link}>
                  <img src={item.image} alt="blog image" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <a href="blog.html">
                    <i className="fas fa-calendar"></i> {item.date}
                  </a>
                  <a href="blog.html">
                    <i className="fas fa-tags"></i> {item.category}
                  </a>
                </div>
                <h3 className="box-title">
                  <a href={item.link}>{item.title}</a>
                </h3>
                <a href={item.link} className="th-btn">
                  Read More <i className="fas fa-arrow-up-right ms-2"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="slider-arrow slider-prev">
        <i className="far fa-arrow-left"></i>
      </button>
      <button className="slider-arrow slider-next">
        <i className="far fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default NewSwipe;

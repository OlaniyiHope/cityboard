import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swiperss = () => {
  return (
    <div className="slider-area">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="project-card">
            <div className="project-img">
              <img src="assets/img/project/project_1_1.png" alt="project" />
            </div>
            <div className="project-content">
              <div
                className="project-card-bg-shape"
                style={{
                  maskImage:
                    "url('assets/img/shape/project-card-bg-shape1-1.png')",
                  WebkitMaskImage:
                    "url('assets/img/shape/project-card-bg-shape1-1.png')",
                }}
              ></div>
              <h3 className="project-title">
                <a href="project-details.html">Compassion Connect</a>
              </h3>
              <p className="project-subtitle">Stronger Community</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-card">
            <div className="project-img">
              <img src="assets/img/project/project_1_2.png" alt="project" />
            </div>
            <div className="project-content">
              <div
                className="project-card-bg-shape"
                style={{
                  maskImage:
                    "url('assets/img/shape/project-card-bg-shape1-1.png')",
                  WebkitMaskImage:
                    "url('assets/img/shape/project-card-bg-shape1-1.png')",
                }}
              ></div>
              <h3 className="project-title">
                <a href="project-details.html">Child Educations</a>
              </h3>
              <p className="project-subtitle">Charity & Fundraising</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="project-card">
            <div className="project-img">
              <img src="assets/img/project/project_1_3.png" alt="project" />
            </div>
            <div className="project-content">
              <div
                className="project-card-bg-shape"
                style={{
                  maskImage:
                    "url('assets/img/shape/project-card-bg-shape1-1.png')",
                  WebkitMaskImage:
                    "url('assets/img/shape/project-card-bg-shape1-1.png')",
                }}
              ></div>
              <h3 className="project-title">
                <a href="project-details.html">Nurturing Health</a>
              </h3>
              <p className="project-subtitle">Healing Hearts</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swiperss;

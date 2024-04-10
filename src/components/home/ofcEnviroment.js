"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const OfcEnviroment = ({ slides }) => {
  const ytSlider = slides.map((slide) => {
    return (
      <SwiperSlide
        className="slider-bg"
        style={{ backgroundImage: `url(${slide.thumbnail})` }}
        key={slide.id}
      >
        <img src={"/Play.png"} className="icon" alt="icon" />
      </SwiperSlide>
    );
  });
  return (
    <div className="ofcEnviroment container text-center py-5 d-flex flex-column align-items-center justify-content-center">
      <h3 className="mt-5 firstBlue">Our Office Environment</h3>
      <h1 className="f38 mt-3 mb-5 wow animate__animated animate__fadeInLeft">
        "An Inspiring Hub for Growth and Innovation: Our Vibrant Office
        Environment"
      </h1>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        initialSlide={2}
        navigation={true}
        modules={[Navigation, EffectCoverflow, Pagination]}
        className="companyYTswiper blur py-5"
      >
        {ytSlider}
        {/* <div className="testimonialBlur ytBlur position-absolute"></div> */}
      </Swiper>
    </div>
  );
};

export default OfcEnviroment;

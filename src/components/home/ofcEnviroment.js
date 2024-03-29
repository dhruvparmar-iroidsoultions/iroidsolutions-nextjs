"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const OfcEnviroment = ({ slides }) => {
  const ytSlider = slides.map((slide, idx) => {
    return (
      <SwiperSlide key={idx}>
        {/* <Link */}
        <a
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            // height: "538px",
            display: "block",
            borderRadius: "19px",
            position: "relative",
          }}
        >
          <img src={"/youtube 1.png"} alt="" />
          <img src={"/Play.png"} alt="" />
        </a>
        {/* </Link> */}
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
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        id="companyYT"
        // spaceBetween={50}
        breakpoints={{
          1000: {
            slidesPerView: 5,
          },
          750: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {ytSlider}
        <div className="testimonialBlur ytBlur position-absolute"></div>
      </Swiper>
    </div>
  );
};

export default OfcEnviroment;

"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CsSwiper = ({ otherCasestudies }) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={true}
      // navigation={true}
      modules={[Pagination]}
      //  className="mySwiper wow animate__animated animate__fadeIn"
      className="mySwiper"
      spaceBetween={70}
      breakpoints={{
        1280: {
          slidesPerView: 3,
          spaceBetween: 70,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
    >
      {otherCasestudies?.map((caseStudy, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="otherCaseStudy p-3 d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center gap-4 position-relative wow animate__animated animate__fadeIn"
            data-wow-delay="0.5s"
            style={{ background: `url(${caseStudy.bgImg})` }}
          >
            <img
              src={caseStudy.portfolioImg}
              alt={caseStudy.productName}
              className="ocsLeft"
            />
            <div className="ocsRight">
              <img src={caseStudy.productLogo} alt={caseStudy.productName} />
              <p>{caseStudy.productName}</p>
            </div>
            <div className="ocsTech position-absolute p-4">
              <p className="text-black">{caseStudy.productDevelopmenent}</p>
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between gap-2">
                {caseStudy.usedTech.map((tech, idx) => (
                  <div key={idx} className="usedTech w-100 text-nowrap">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CsSwiper;

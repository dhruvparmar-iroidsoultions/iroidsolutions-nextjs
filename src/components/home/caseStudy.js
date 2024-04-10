"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../button";
import { Tilt } from "react-tilt";

const CaseStudy = ({ casestudy }) => {
  const mapCasestudy = casestudy.map((cs) => (
    <SwiperSlide key={cs.id}>
      <div
        className="container d-flex flex-column flex-lg-row py-3 py-md-5"
        style={{ overflow: "hidden" }}
      >
        <div className="caseLeft d-flex flex-column align-items-start mx-0 mx-md-1 mx-lg-5 px-2 px-sm-5 wow animate__animated animate__fadeInLeft">
          <img
            src={"/logo.svg"}
            alt="iroid_solutions"
            className="mb-3 mb-xl-5"
          />
          <p className="f40 text-black text-start text-capitalize mt-sm-2 mt-md-3 mt-xl-5 mb-2 mb-lg-4">
            {cs.title}
          </p>
          <h3 className="text-start text-capitalize mb-3">{cs.subtitle}</h3>
          <Button linkPath={"/casestudy"} text={"View Case Study"} />
        </div>
        <div className="caseRight wow animate__animated animate__fadeInRight d-flex align-items-center justify-content-center">
          <Tilt>
            <img src={cs.cover_image} alt="" className="px-5 mx-1 w-100" />
          </Tilt>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="caseStudy d-flex flex-column justify-content-center align-items-center py-5 w-100">
      <h3
        className="mb-3 text-white firstBlue wow animate__animated animate__fadeIn"
        // data-wow-duration="4s"
      >
        Case Study
      </h3>
      <p
        className="f38 mb-4 text-center wow animate__animated animate__fadeInLeft"
        // data-wow-duration="2s"
      >
        Creating Success Stories for Startups to Global Brands.
      </p>
      <Swiper>{mapCasestudy}</Swiper>
    </div>
  );
};

export default CaseStudy;

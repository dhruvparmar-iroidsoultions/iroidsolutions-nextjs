"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../button";
import { Tilt } from "react-tilt";
import Image from "next/image";
import "./index.css";

const CaseStudy = ({ casestudy, containerTitle, containerSubtitle }) => {
  const removeTags = (html) => {
    const cleanText = html?.replace(/<[^>]*>/g, "");
    return cleanText;
  };
  const mapCasestudy = casestudy.map((cs) => {
    return (
      <SwiperSlide key={cs.id}>
        <div className="container d-flex flex-column flex-lg-row py-3 py-md-4 text-start">
          <div className="caseLeft d-flex flex-column align-items-start mx-0 mx-md-1 mx-lg-5 px-2 wow animate__animated animate__fadeInLeft">
            <img
              className="mb-3 mb-lg-5 casestudy-logo"
              src={cs.profile}
              alt="iroid_solutions"
              style={{ maxHeight: "110px" }}
            />
            <p className="fs-6 fw-semibold text-005490 m-0">{cs.category}</p>
            <p className="fs-3 fw-semibold text-black text-start">{cs.title}</p>
            {/* <h3 className="text-start text-capitalize mb-3">{cs.subtitle}</h3> */}
            <div className="caseStudy-tags d-flex align-items-center gap-3">
              {cs.tag.split(",").map((item, idx) => (
                <p
                  className="fs-6 fw-medium border-0 px-3 py-1 rounded-3 text-005490 caseStudy-tag"
                  style={{ background: "#E9F1F6" }}
                  key={idx}
                >
                  {item.trim()}
                </p>
              ))}
            </div>
            <p
              className="fs-6 fw-normal opacity-75"
              style={{ color: "#000000E5" }}
            >
              {removeTags(cs.descriptions)}
            </p>
            <Button linkPath={`/casestudy/${cs.slug}`} text={"Read More"} />
          </div>
          <div className="caseRight wow animate__animated animate__fadeInRight d-flex align-items-center justify-content-center">
            <Tilt>
              <Image
                className="img-w100-hauto"
                src={cs.cover_image}
                alt=""
                width={1200}
                height={500}
                // layout="responsive"
              />
            </Tilt>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="caseStudy d-flex flex-column justify-content-center align-items-center py-5 w-100">
      <h3
        className="fs-5 fw-semibold mb-3 text-white opacity-75 wow animate__animated animate__fadeIn"
        // data-wow-duration="4s"
      >
        {containerTitle}
      </h3>
      <p
        className="f38 mb-4 text-center text-white wow animate__animated animate__fadeInLeft"
        // data-wow-duration="2s"
      >
        {containerSubtitle}
      </p>
      <div className="container">
        <Swiper
          loop={true}
          grabCursor={true}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          className="pb-5 casestudy-swiper"
        >
          {mapCasestudy}
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudy;

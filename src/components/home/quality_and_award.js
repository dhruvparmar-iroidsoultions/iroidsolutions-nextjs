"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import QualityScroller from "../QualityScroller";
const Quality_and_award = () => {
  const awards = [
    {
      awardImage: "/award 1.svg",
      awardOf: "Clutch",
      awardTitle: "Top Leading App Development",
      year: 2022,
    },
    {
      awardImage: "/award 3.svg",
      awardOf: "Tech Behemonths",
      awardTitle: "Top Mobile App Development",
      year: 2023,
    },
    {
      awardImage: "/award 4.svg",
      awardOf: "Tech Behemonths",
      awardTitle: "Top Web Development",
      year: 2023,
    },
    {
      awardImage: "/award 5.svg",
      awardOf: "Tech Behemonths",
      awardTitle: "Top ReactJS Development",
      year: 2023,
    },
    {
      awardImage: "/award 2.svg",
      awardOf: "Tech Behemonths",
      awardTitle: "Top Mobile App Development",
      year: 2023,
    },
  ];
  return (
    <>
      <QualityScroller />
      <div className="container mt-3 py-md-5">
        <div className="award-text position-relative text-center mx-sm-auto px-2 px-sm-3 px-md-5">
          <Image
            src="/award-left-image.svg"
            alt=""
            className="d-none d-sm-block position-absolute top-0 start-0"
            width={100}
            height={120}
          />
          <h1 className="fs-1 fw-bolder mt-lg-5">Awards & Recognition</h1>
          <p className="f20 opacity-75 fw-medium px-3 px-sm-2 mb-lg-5">
            Recognition for work of excellence. Figures that demonstrates our
            work quality. Awards that are reflecting our client’s trust on our
            services
          </p>
          <Image
            src="/award-right-image.svg"
            alt=""
            className="d-none d-sm-block position-absolute top-0 end-0"
            width={100}
            height={120}
          />
        </div>
        <div className="pt-5 my-sm-5">
          <Swiper
            className="award-slider"
            loop={true}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              767: {
                slidesPerView: 3,
              },
            }}
          >
            {awards.map((award, idx) => (
              <SwiperSlide key={idx}>
                <div className="d-flex flex-column align-items-center justify-content-between w-100 h-100 pb-4 pb-xl-0 wow animate__animated animate__fadeInRight">
                  <Image
                    src={award.awardImage}
                    alt="award"
                    width={350}
                    height={350}
                  />
                  <p className="awardBottom text-center text-00000099 fs-6 fw-semibold lh-base w-100">
                    {award.awardTitle}
                    <br /> Company in India {award.year}
                    <br /> by {award.awardOf}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Quality_and_award;

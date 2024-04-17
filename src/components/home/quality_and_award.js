"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const Quality_and_award = () => {
  const awards = [
    {
      awardImage: "/award 1.svg",
      awardOf: "Clutch",
      awardTitle: "Top Leading App Development",
      year: 2022,
    },
    {
      awardImage: "/award 2.svg",
      awardOf: "Tech Behemonths",
      awardTitle: "Top Mobile App Development",
      year: 2023,
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
  ];
  return (
    <div className="pb-5">
      <div className="rotate-text-container w-100 py-3 text-light">
        <Marquee className="d-flex align-items-center gap-2 overflow-hidden">
          <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
            <Image
              className="position-absolute rotate-text-img"
              src="/rotate-text.svg"
              alt=""
              width={90}
              height={90}
            />
            <Image
              className="p-3"
              src="/rotate-text-arrow.svg"
              alt=""
              width={90}
              height={90}
            />
            <h1 className="fw-semibold mx-3">QUALITY MATTERS</h1>
          </div>
          <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
            <Image
              className="position-absolute rotate-text-img"
              src="/rotate-text.svg"
              alt=""
              width={90}
              height={90}
            />
            <Image
              className="p-3"
              src="/rotate-text-arrow.svg"
              alt=""
              width={90}
              height={90}
            />
            <h1 className="fw-semibold mx-3">QUALITY MATTERS</h1>
          </div>
          <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
            <Image
              className="position-absolute rotate-text-img"
              src="/rotate-text.svg"
              alt=""
              width={90}
              height={90}
            />
            <Image
              className="p-3"
              src="/rotate-text-arrow.svg"
              alt=""
              width={90}
              height={90}
            />
            <h1 className="fw-semibold mx-3">QUALITY MATTERS</h1>
          </div>
          <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
            <Image
              className="position-absolute rotate-text-img"
              src="/rotate-text.svg"
              alt=""
              width={90}
              height={90}
            />
            <Image
              className="p-3"
              src="/rotate-text-arrow.svg"
              alt=""
              width={90}
              height={90}
            />
            <h1 className="fw-semibold mx-3">QUALITY MATTERS</h1>
          </div>
          <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
            <Image
              className="position-absolute rotate-text-img"
              src="/rotate-text.svg"
              alt=""
              width={90}
              height={90}
            />
            <Image
              className="p-3"
              src="/rotate-text-arrow.svg"
              alt=""
              width={90}
              height={90}
            />
            <h1 className="fw-semibold mx-3">QUALITY MATTERS</h1>
          </div>
        </Marquee>
      </div>
      <div className="container py-4">
        <div className="award-text position-relative text-center mx-sm-auto px-5">
          <Image
            src="/award-left-image.svg"
            alt=""
            className="position-absolute top-0 start-0"
            width={100}
            height={120}
          />
          <h1 className="f38 fw-bolder mt-lg-5">Awards & Recognition</h1>
          <p className="f20 px-3 px-sm-2 mb-lg-5">
            Recognition for work of excellence. Figures that demonstrates our
            work quality. Awards that are reflecting our client’s trust on our
            services
          </p>
          <Image
            src="/award-right-image.svg"
            alt=""
            className="position-absolute top-0 end-0"
            width={100}
            height={120}
          />
        </div>
        <div className="pt-5 my-5">
          <Swiper
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
                <div className="d-flex flex-column align-items-center justify-content-center w-100 pb-4 pb-xl-0 wow animate__animated animate__fadeInRight">
                  <Image
                    src={award.awardImage}
                    alt="award"
                    width={300}
                    height={300}
                  />
                  <p className="awardBottom text-center fs-6 fw-semibold lh-base w-100 m-0">
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
      <Marquee className="py-4" style={{ background: "#F1F9FF" }}>
        <Image
          className="hover-me-img px-5 w-100"
          src={"/hover-me-img-1.svg"}
          alt=""
          width={300}
          height={50}
        />
        <Image
          className="hover-me-img px-5 w-100"
          src={"/hover-me-img-2.svg"}
          alt=""
          width={300}
          height={50}
        />
        <Image
          className="hover-me-img px-5 w-100"
          src={"/hover-me-img-3.svg"}
          alt=""
          width={300}
          height={50}
        />
        <Image
          className="hover-me-img px-5 w-100"
          src={"/hover-me-img-4.svg"}
          alt=""
          width={300}
          height={50}
        />
        <Image
          className="hover-me-img px-5 w-100"
          src={"/hover-me-img-5.svg"}
          alt=""
          width={300}
          height={50}
        />
        <Image
          className="hover-me-img px-5 w-100"
          src={"/hover-me-img-6.svg"}
          alt=""
          width={300}
          height={50}
        />
      </Marquee>
    </div>
  );
};

export default Quality_and_award;

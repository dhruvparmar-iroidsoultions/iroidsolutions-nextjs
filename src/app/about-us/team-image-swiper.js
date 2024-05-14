"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";

const TeamImgSwiper = () => {
  const teamImg = [
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
  ];
  const [imgUrl, setImgUrl] = useState("");
  const openModal = (img) => {
    setImgUrl(img);
    document.getElementById("team-modal-trigger").click();
  };
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="w-100 team-img-swiper"
      >
        {teamImg.map((img, idx) => (
          <SwiperSlide className="" key={idx} style={{ width: "auto" }}>
            <Image
              className="team-img rounded-5"
              src={img}
              alt="team"
              width={1200}
              height={800}
              key={idx}
              onClick={() => openModal(img)}
            />
          </SwiperSlide>
        ))}
        <button
          type="button"
          className="d-none"
          data-bs-toggle="modal"
          data-bs-target="#team-img-modal"
          id="team-modal-trigger"
        ></button>
      </Swiper>
      <div
        className="modal fade"
        id="team-img-modal"
        tabIndex="-1"
        aria-labelledby="team-img-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered bg-transparent d-flex flex-column align-items-center justify-content-center">
          <div className="modal-content bg-transparent border-0 d-flex flex-column align-items-center justify-content-center position-relative">
            <Image
              className="team-modal-img"
              src={imgUrl}
              alt="team pic"
              width={12000}
              height={12000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamImgSwiper;

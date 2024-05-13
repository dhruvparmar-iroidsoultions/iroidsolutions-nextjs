"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player";
import "./index.css";
import axiosApi from "@/api/axiosConfig";

const OfficeVideoComponent = ({}) => {
  const [slides, setSlides] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ofcVdo, setOfclVdo] = useState("");

  const ofcVdoModal = (youtubeLink) => {
    document.getElementById("ofcVdoModalBtn").click();
    setIsModalOpen(true);
    setOfclVdo(youtubeLink);
    console.log(isModalOpen);
  };

  const getSlides = async () => {
    try {
      const response = await axiosApi.get(
        "/office-environments?page=1&limit=7"
      );
      const data = response.data.data;
      setSlides(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSlides();
  }, []);

  const ytSlider = slides.map((slide) => {
    return (
      <SwiperSlide
        className="slider-bg"
        style={{ backgroundImage: `url(${slide.thumbnail})` }}
        key={slide.id}
        onClick={() => ofcVdoModal(slide.video)}
      >
        <img src={"/youtube 1.png"} className="icon" alt="icon" />
        <img src={"/Play.png"} className="icon" alt="icon" />
      </SwiperSlide>
    );
  });

  return (
    <>
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
        <button
          className="d-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#ofcVdoModal"
          id="ofcVdoModalBtn"
        ></button>
      </Swiper>
      <div
        className="modal fade"
        id="ofcVdoModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="ofcVdoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered d-flex flex-column align-items-center justify-content-center">
          <div className="modal-content d-flex flex-column align-items-center justify-content-center position-relative">
            <button
              type="button"
              className="btn-close position-absolute"
              id="closeModal"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
            ></button>
            {isModalOpen && (
              <ReactPlayer className="react-player" url={ofcVdo} controls />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeVideoComponent;

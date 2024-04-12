"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/effect-flip";
import ReactPlayer from "react-player";
import Image from "next/image";
import { useState } from "react";

const VideoTestimonial = ({ videoTestimonialArray }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [videoTestimonial, setVideoTestimonial] = useState([]);
  const [testimonialVdo, setTestimonialVdo] = useState("");
  const testimonialVdoModal = (youtubeLink) => {
    document.getElementById("modalBtn").click();
    setIsModalOpen(true);
    setTestimonialVdo(youtubeLink);
  };
  const mapUserVideo =
    videoTestimonialArray &&
    videoTestimonialArray.map((video) => {
      return (
        <SwiperSlide key={video.id}>
          <div className="col videoContainer position-relative">
            <div
              className="card text-white position-relative"
              onClick={() => testimonialVdoModal(video.videolink)}
              style={{
                height: "100%",
                backgroundImage: `url(${video.thumbnail})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-img-overlay d-flex  align-items-end justify-content-between">
                <div className="videoDetail text-start z-3">
                  <h5 className="card-title mb-0">{video.clientname}</h5>
                  <p className="card-text">{video.position}</p>
                </div>
                <div className="z-3">
                  <Image
                    className="playBtn"
                    src={"/play.png"}
                    alt=""
                    role="button"
                    width={60}
                    height={60}
                  />
                </div>
                <img
                  src={"/testimonialVdoBg.png"}
                  alt=""
                  className="position-absolute bottom-0 start-0 w-100 pe-none z-1"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

  return (
    <div className="videoTestimonialContainer py-3 py-md-5 mb-5 my-md-5 position-relative overflow-hidden w-100">
      <img src={"/bgTopLeft.svg"} alt="" className="wwr-bg" />
      <img src={"/bgBottomLeft.svg"} alt="" className="wwr-bg" />
      <img src={"/bgTopRight.svg"} alt="" className="wwr-bg" />
      <img src={"/bgBottomRight.svg"} alt="" className="wwr-bg" />
      <div className="videoTestimonial container d-flex flex-column align-items-center">
        <h3 className="firstBlue wow animate__animated animate__fadeInDown">
          Video Testimonials
        </h3>
        <p className="m-0 f38 wow animate__animated animate__fadeInLeft">
          Over 1000+ People Trust Us
        </p>
        <p className="mb-5 f20 wow animate__animated animate__fadeInRight wow animate__animated animate__fadeInRight">
          Built for Service Professionals, by Service Professionals
        </p>

        <Swiper
          loop={true}
          grabCursor={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper wow animate__animated animate__fadeIn"
          data-wow-duration="2s"
          slidesPerView={1}
          breakpoints={{
            1000: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          id="vdoTestimonialSwiper"
        >
          {mapUserVideo}
          <button
            className="d-none"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#testimonialVdoModal"
            id="modalBtn"
          ></button>
        </Swiper>
      </div>
      <div
        className="modal fade"
        id="testimonialVdoModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="testimonialVdoModalLabel"
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
              <ReactPlayer
                className="react-player"
                url={testimonialVdo}
                controls
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;

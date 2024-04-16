"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ReactPlayer from "react-player";
import Image from "next/image";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const VideoTestimonial = ({ videoTestimonialArray = [] }) => {
  const [clientTestimonial, setClientTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonialVdo, setTestimonialVdo] = useState("");
  const testimonialVdoModal = (youtubeLink) => {
    document.getElementById("modalBtn").click();
    setIsModalOpen(true);
    setTestimonialVdo(youtubeLink);
  };

  const swiper1 = videoTestimonialArray.map((video) => {
    return (
      <SwiperSlide
        className="client-testimonial w-100 d-flex align-items-center p-2 rounded-4"
        style={{ background: "#F2F2F2" }}
        key={video.id}
      >
        <div className="ct-left p-5">
          <Image src={"/quote-up.svg"} alt="''" width={50} height={50} />
          <p
            className="mb-lg-5 lh-base fs-6"
            dangerouslySetInnerHTML={{ __html: video.description }}
          />
          <h3 className="fw-bolder" style={{ color: "#005490" }}>
            {video.name}
          </h3>
          <h4 className="fw-medium">{video.position}</h4>
        </div>
        <div className="ct-right position-relative">
          <img
            className="rounded-4 object-fit-cover"
            src={`${video.img}`}
            alt=""
            width={550}
            height={325}
          />
          <Image
            className="position-absolute top-50 start-50 translate-middle"
            src={`/PlayBtn.svg`}
            alt=""
            width={55}
            height={55}
          />
        </div>
      </SwiperSlide>
    );
  });

  const swiper2 = videoTestimonialArray.map((video) => {
    return (
      <SwiperSlide key={video.id}>
        <div className="videoContainer position-relative rounded-4 mx-auto overflow-hidden">
          <div
            className="card text-white position-relative h-100"
            onClick={() => testimonialVdoModal(video.videolink)}
            style={{
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
              <Image
                src={"/testimonialVdoBg.png"}
                alt=""
                className="position-absolute bottom-0 start-0 w-100 pe-none z-1 w-100 h-100 testimonial-gradiant-bg"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  // delete css of className="wwr-bg" AND "videoTestimonialContainer"
  return (
    <div className="container py-3 py-md-5 mb-5 my-md-5 position-relative overflow-hidden w-100">
      <div className="videoTestimonial d-flex flex-column align-items-center">
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
          thumbs={{ swiper: clientTestimonial }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper wow animate__animated animate__fadeIn"
          data-wow-duration="2s"
          spaceBetween={30}
        >
          {swiper1}
          <button
            className="d-none"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#testimonialVdoModal"
            id="modalBtn"
          ></button>
        </Swiper>
        <Swiper
          onSwiper={setClientTestimonial}
          loop={true}
          grabCursor={true}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation, Thumbs]}
          watchSlidesProgress={true}
          className="mySwiper wow animate__animated animate__fadeIn"
          data-wow-duration="2s"
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1000: {
              slidesPerView: 4,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          id="vdoTestimonialSwiper"
        >
          {swiper2}
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

// export default VideoTestimonial;

export default dynamic(() => Promise.resolve(VideoTestimonial), { ssr: false });

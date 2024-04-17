"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ReactPlayer from "react-player";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

const VideoTestimonial = ({ videoTestimonialArray = [] }) => {
  const [testimonial, setTestimonial] = useState(0);
  const [swiperHover, setSwiperHover] = useState(0);

  const [clientTestimonial, setClientTestimonial] = useState(
    videoTestimonialArray[testimonial]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonialVdo, setTestimonialVdo] = useState("");

  const removeTags = (html) => {
    const cleanText = html.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const testimonialVdoModal = (youtubeLink) => {
    document.getElementById("modalBtn").click();
    setIsModalOpen(true);
    setTestimonialVdo(youtubeLink);
  };
  const prevSlide = () => {
    document
      .getElementById("vdoTestimonialSwiper")
      ?.getElementsByClassName("swiper-button-prev")[0]
      .click();
  };

  const nextSlide = () => {
    document
      .getElementById("vdoTestimonialSwiper")
      ?.getElementsByClassName("swiper-button-next")[0]
      ?.click();
  };

  const swiper2 = videoTestimonialArray.map((video) => {
    return (
      <SwiperSlide
        className="position-relative px-3 pb-5"
        key={video.id}
        style={{ height: "220px" }}
      >
        <div
          className="text-white position-relative w-100 h-100 rounded-4 overflow-hidden"
          role="button"
          onMouseEnter={() => setSwiperHover(video.id)}
          onMouseLeave={() => setSwiperHover({})}
          onClick={() => setClientTestimonial(video)}
        >
          <Image
            className="w-100 h-100 object-fit-cover"
            src={`${video.thumbnail}`}
            alt=""
            width={1200}
            height={1200}
          />
          <div className="card-img-overlay w-100 d-flex align-items-end justify-content-between p-3">
            <div className="videoDetail text-start z-3">
              <h5 className="card-title mb-0">{video.clientname}</h5>
              <p className="card-text">{video.position}</p>
            </div>
            <div className="z-3">
              <Image
                className={`playBtn ${
                  swiperHover === video.id || clientTestimonial.id === video.id
                    ? "d-block"
                    : "d-none"
                }`}
                src={"/play.png"}
                alt=""
                role="button"
                width={40}
                height={40}
                onClick={() => testimonialVdoModal(video.videolink)}
              />
            </div>
            <Image
              src={"/testimonialVdoBg.png"}
              alt=""
              className={`${
                clientTestimonial.id === video.id ? "d-block" : "d-none"
              } position-absolute bottom-0 start-0 w-100 pe-none z-1 w-100 h-100`}
              width={100}
              height={100}
            />
          </div>
        </div>
      </SwiperSlide>
    );
  });

  // useEffect(() => {
  //   setInterval(() => {
  //     nextSlide();
  //   }, 8000);
  // }, []);

  // delete css of className="wwr-bg" AND "videoTestimonialContainer" AND "testimonial-gradiant-bg"
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
        <div className="client-testimonial mx-auto">
          <div
            className="d-flex flex-wrap flex-lg-nowrap align-items-center p-2 rounded-4"
            style={{ background: "#F2F2F2" }}
            key={clientTestimonial.id}
          >
            <div className="ct-left p-3 p-md-5">
              <Image src={"/quote-up.svg"} alt="''" width={50} height={50} />
              <p className="mb-lg-5 lh-base fs-6">
                “{removeTags(clientTestimonial.description)}.”
              </p>
              <h3 className="fw-bolder" style={{ color: "#005490" }}>
                {clientTestimonial.clientname}
              </h3>
              <h4 className="fw-medium">{clientTestimonial.position}</h4>
            </div>
            <div className="ct-right position-relative w-100 h-100">
              <Image
                className="rounded-4 object-fit-cover w-100"
                src={`${clientTestimonial.thumbnail}`}
                alt=""
                width={1600}
                height={325}
              />
              <Image
                className="position-absolute top-50 start-50 translate-middle"
                src={`/PlayBtn.svg`}
                alt=""
                width={55}
                height={55}
                role="button"
                onClick={() => testimonialVdoModal(clientTestimonial.videolink)}
              />
            </div>
          </div>
          <hr className="w-100 opacity-25" />
        </div>
        <div className="iwsButtons w-100 p-0 position-relative">
          <button
            className="prevBtn position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center border border-0 z-3"
            onClick={prevSlide}
          >
            <img src={"/read more.png"} alt="read more" />
          </button>
          <button
            className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center border border-0 z-3"
            onClick={nextSlide}
          >
            <img src={"/read more.png"} alt="read more" />
          </button>
          <div className="video-testimonial-container">
            <Swiper
              onSlideChange={(swiper) => {
                const newTestimonialIndex = swiper.realIndex;
                setClientTestimonial(
                  videoTestimonialArray[newTestimonialIndex]
                );
              }}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              className="video-testimonial-swiper wow animate__animated animate__fadeIn"
              data-wow-duration="2s"
              // slideClass="video-testimonial-slide"
              slideActiveClass="video-testimonial-active-slide"
              slidesPerView={1}
              spaceBetween={10}
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
        </div>
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

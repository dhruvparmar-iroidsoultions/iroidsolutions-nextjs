"use client";

import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Process = () => {
  const allProcess = [
    {
      id: 1,
      title: "Idea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
    },
    {
      id: 2,
      title: "Requirements Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
    },
    {
      id: 3,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
    },
    {
      id: 4,
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
    },
    {
      id: 5,
      title: "Quality Assurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
    },
    {
      id: 6,
      title: "Launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
    },
  ];
  // const [percentage, setPercentage] = useState(8);
  const progressLine = useRef(null);
  const progressContent = useRef(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const [process, setProcess] = useState(allProcess[0]);
  const processSwiper = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressLine.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const updateProcess = (idx) => {
    setActiveProcess(idx);
    // If Swiper instance is available, use its API to change the slide
    if (processSwiper.current && processSwiper.current.swiper) {
      processSwiper.current.swiper.slideTo(idx);
    }
  };

  const prevProcess = () => {
    document
      .getElementById("process-swiper")
      ?.getElementsByClassName("swiper-button-prev")[0]
      .click();
  };

  const nextProcess = () => {
    document
      .getElementById("process-swiper")
      ?.getElementsByClassName("swiper-button-next")[0]
      ?.click();
  };

  return (
    <div className="ourprocess">
      <div className="container py-5 w-100 my-4 d-flex flex-column align-items-center justify-content-center text-center position-relative">
        <h3 className="fs-4 fw-semibold mb-lg-3 text-white opacity-75">
          Our Process
        </h3>
        <p className="text-005490 fs-1 fw-bolder mb-lg-4 text-white">
          From Start To Finish, We Prioritize Quality And Precision
        </p>
        <ul className="w-100 list-unstyled rounded-4 mx-auto row bg-white rounded overflow-hidden process-ul wow animate__animated animate__fadeIn">
          {allProcess.map((process, idx) => (
            <li
              className={`col-12 col-md-2 p d-md-flex align-items-center justify-content-center ${
                activeProcess === idx
                  ? "activeProcess text-005490 d-block"
                  : "text-005490 d-none d-md-block"
              }  px-2 px-md-1 py-3 py-md-2 py-lg-3 fs-6 mb-0 fw-bolder position-relative`}
              key={idx}
              onClick={() => updateProcess(idx)}
            >
              {/* <p
                className={``}
                onClick={() => updateProcess(idx)}
                key={idx}
              > */}
              {process.title}
              {/* </p> */}
            </li>
          ))}
        </ul>
        <div className="w-100 h-100 d-flex flex-wrap flex-lg-nowrap align-items-center rounded-5 bg-white p-4">
          <div className="p-2 ps-md-4 pe-md-5 text-start process-detail w-100">
            <p className="fs-1 fw-bolder text-005490">{process.title}</p>
            <p className="fs-5 fw-medium text-justify opacity-75">
              “{process.description}”
            </p>
            <div className="iwsButtons w-100 d-flex align-items-center justify-content-center gap-5">
              {/* if get arrow problem just add prevBtn class to the button */}
              <button
                className="d-flex align-items-center justify-content-center"
                onClick={prevProcess}
              >
                <img src={"/swiper-left-arrow.png"} alt="read more" />
              </button>
              <p className="fs-5 fw-semibold">
                {process.id.toString().padStart(2, "0")} /{" "}
                <span className="opacity-50">06</span>
              </p>
              <button
                className="align-items-center justify-content-center"
                onClick={nextProcess}
              >
                <img src={"/swiper-right-arrow.png"} alt="read more" />
              </button>
            </div>
          </div>
          <Swiper
            ref={processSwiper}
            className="process-swiper w-100"
            // loop={true}
            autoplay={{
              delay: 10000,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            onSlideChange={(swiper) => {
              const newIndex = swiper.activeIndex % allProcess.length;
              setProcess(allProcess[newIndex]);
              setActiveProcess(newIndex);
            }}
            spaceBetween={10}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            grabCursor={true}
            id="process-swiper"
          >
            {allProcess.map((process, idx) => (
              <SwiperSlide key={process.id} className="bg-transparent">
                <Image
                  className="w-100 h-100 rounded-4"
                  src={process.img}
                  alt=""
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressLine}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Process;

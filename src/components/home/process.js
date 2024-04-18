"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Process = () => {
  const allProcess = [
    {
      id: 1,
      title: "Idea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
      percentage: 8,
    },
    {
      id: 2,
      title: "Requirements Analysis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
      percentage: 35,
    },
    {
      id: 3,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
      percentage: 50,
    },
    {
      id: 4,
      title: "Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
      percentage: 70,
    },
    {
      id: 5,
      title: "Quality Assurance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
      percentage: 85,
    },
    {
      id: 6,
      title: "Launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img: "/process-3.svg",
      percentage: 100,
    },
  ];
  const [activeProcess, setActiveProcess] = useState(0);
  const [percentage, setPercentage] = useState(8);
  const [process, setProcess] = useState(allProcess[0]);

  const updateProcess = (idx, percentage) => {
    setActiveProcess(idx);
    setPercentage(percentage);
  };

  return (
    <div className="container w-100 my-4 d-flex flex-column align-items-center justify-content-center text-center position-relative">
      <h3 className="fs-4 fw-semibold">Our Process</h3>
      <p className="text-005490 fs-1 fw-bolder">
        From Start To Finish, We Prioritize Quality And Precision
      </p>
      <div
        className="row row-cols-lg-6 w-100 rounded-4 mx-auto process-nav"
        style={{ "--process": percentage + "%" }}
      >
        {allProcess.map((process, idx) => (
          <div
            className={`col ${
              process.id !== 6
                ? "d-flex align-items-center justify-content-evenly gap-2"
                : "text-center m-auto"
            }`}
            //   className={`
            //   ${
            //     5 === 2
            //       ? "activePortfolioLi text-005490 fw-bolder border-3 border-bottom"
            //       : "fw-medium"
            //   }
            //    px-4 py-3 fs-6 d-flex align-items-center justify-content-center`}
            //   onClick={() => changeCategory(c, idx)}
            key={process.id}
          >
            <p
              className={`${
                activeProcess + 1 >= process.id
                  ? "bg-transparent text-white py-3"
                  : "bg-white"
              } m-0`}
              onClick={() => updateProcess(idx, process.percentage)}
            >
              {process.title}
            </p>

            <span
              className={`${process.id === 6 ? "d-none" : ""} ${
                activeProcess + 1 >= process.id ? "bg-transparent" : "bg-white"
              } py-3`}
            >
              <Image src="/process-arrow.png" alt="" width={60} height={10} />
            </span>
          </div>
        ))}
      </div>
      <div className="w-100 d-flex h-100">
        <div className="p-5 text-start process-detail">
          <p className="fs-1 fw-bolder text-005490">{process.title}</p>
          <p className="fs-5 fw-medium text-justify opacity-75">
            “{process.description}”
          </p>
          <div className="iwsButtons w-100 d-flex align-items-center justify-content-center gap-5">
            <button
              className=""
              // onClick={prevSlide}
            >
              <img src={"/read more.png"} alt="read more" />
            </button>
            <p className="fs-5 fw-semibold">
              03 / <span className="opacity-50">06</span>
            </p>
            <button
              className=""
              // onClick={nextSlide}
            >
              {" "}
              <img src={"/read more.png"} alt="read more" />
            </button>
          </div>
        </div>
        <Swiper className="process-swiper">
          {allProcess.map((process, idx) => (
            <SwiperSlide key={process.id}>
              <Image
                className="w-100 h-100"
                src={process.img}
                alt=""
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Process;

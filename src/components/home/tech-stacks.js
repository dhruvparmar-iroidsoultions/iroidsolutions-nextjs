"use client";

import Image from "next/image";
import { useState } from "react";

const TechStacks = () => {
  const techStacks = [
    "Mobile",
    "Front End",
    "Database",
    "Back End",
    "UI/UX",
    "Latest Expertise",
  ];
  const [techSelection, setTechSelection] = useState("mobile");

  const [tech, setTech] = useState([
    {
      img: "/mobile 1.png",
      name: "iOS",
    },
    {
      img: "/mobile 2.png",
      name: "Android",
    },
    {
      img: "/mobile 3.png",
      name: "Flutter",
    },
    {
      img: "/mobile 4.png",
      name: "Kotlin",
    },
    {
      img: "/mobile 5.png",
      name: "xCode",
    },
    {
      img: "/mobile 6.png",
      name: "Swift",
    },
  ]);

  return (
    <div className="techStacks-container py-5 my-5 text-center">
      <div className="container">
        <h3 className="fs-4 fw-semibold">Our Tech Stacks</h3>
        <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
          Technologies We Work With
        </p>
        <p className="mb-5 mx-auto f20 fs-5 fw-medium wow animate__animated animate__fadeInRight">
          "Behind every successful software application, there lies a
          well-crafted tech stack that enables efficiency, scalability, and user
          satisfaction."
        </p>
        <ul className="list-unstyled rounded-4 mx-auto d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-evenly bg-white overflow-hidden wow animate__animated animate__fadeIn">
          {techStacks.map((tech, idx) => (
            <li
              className={`${
                techSelection.toLowerCase() === tech.toLowerCase()
                  ? "activeTechLi text-005490 fw-bolder border-3 border-bottom"
                  : "fw-medium"
              }  px-4 py-3 fs-6`}
              onClick={() => setTechSelection(tech)}
              key={idx}
            >
              {tech}
            </li>
          ))}
        </ul>
        {/* <div className="d-flex flex-wrap justify-content-between gap-5"> */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6">
          {tech.map((t, idx) => (
            <div className="col my-2 px-xl-4 px-xxl-5">
              <div
                className="techC border h-100 border-0 bg-white rounded-4 p-4 d-flex flex-column align-items-center justify-content-between gap-2"
                key={idx}
              >
                <Image
                  className="w-100"
                  src={t.img}
                  alt={t.name}
                  width={60}
                  height={50}
                />
                <p className="m-0">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;

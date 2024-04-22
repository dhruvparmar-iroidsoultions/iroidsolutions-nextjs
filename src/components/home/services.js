"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../button";

const Service = ({
  id,
  img,
  service,
  title,
  subtitle,
  list,
  activeTab,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className="service">
      <button
        className={`fw-medium d-flex align-items-center gap-2 w-100 px-3 py-4 rounded-4 ${
          activeTab ? "activeService text-005490 bg-white " : ""
        } service-btn`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#service-${id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image src={img} alt="" width={50} height={50} />
        <p className="fs-4 m-0">{service}</p>
      </button>
      <div
        className="collapse service-details text-start p-3 rounded-4 my-3 d-lg-none"
        id={`service-${id}`}
      >
        <div className="p-3 bg-white rounded">
          <h3 className="fs-3 fw-semibold">{title}</h3>
          <p className="fs-5 opacity-50 m-0">{subtitle}</p>
        </div>
        <ul className="my-3">
          {list.map((l, idx) => (
            <li key={idx} className="ps-3 mb-2 fw-semibold fs-6 opacity-75">
              {l}
            </li>
          ))}
        </ul>
        <Button linkPath={"/services"} m={"mt-2 mb-5"} />
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      id: "1",
      img: "/service-img-1.png",
      service: "Mobile App Development",
      title:
        "Mobile app development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Mobile app development is a vast field with many specializations. There are different types of apps you can create.",
      list: [
        "Android App Development",
        "iOS App Development",
        "Cross-platform App Development Using Flutter",
        "Mobile App Support & Maintenance",
      ],
      indicatorHeight: "0",
    },
    {
      id: "2",
      img: "/service-img-2.png",
      service: "Web Development",
      title:
        "Mobile app development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Mobile app development is a vast field with many specializations. There are different types of apps you can create.",
      list: [
        "Android App Development",
        "iOS App Development",
        "Cross-platform App Development Using Flutter",
        "Mobile App Support & Maintenance",
      ],
      indicatorHeight: "27",
    },
    {
      id: "3",
      img: "/service-img-3.png",
      service: "Custom Software Development",
      title:
        "Mobile app development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Mobile app development is a vast field with many specializations. There are different types of apps you can create.",
      list: [
        "Android App Development",
        "iOS App Development",
        "Cross-platform App Development Using Flutter",
        "Mobile App Support & Maintenance",
      ],
      indicatorHeight: "53.5",
    },
    {
      id: "4",
      img: "/service-img-4.png",
      service: "AI & ML",
      title:
        "Mobile app development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Mobile app development is a vast field with many specializations. There are different types of apps you can create.",
      list: [
        "Android App Development",
        "iOS App Development",
        "Cross-platform App Development Using Flutter",
        "Mobile App Support & Maintenance",
      ],
      indicatorHeight: "80",
    },
  ];

  const [serviceL, setServiceL] = useState(services[0]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  return (
    <div className="container py-5 my-5 text-center">
      <h3 className="fs-4 fw-semibold">Our Services</h3>
      <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
        What Services We’re Offering
      </p>
      <p className="mb-5 mx-auto f20 fs-5 fw-medium wow animate__animated animate__fadeInRight">
        We offer services that can help businesses improve their visibility and
        business reputation online, expand market reach, and increase turnover
        through effective digital strategies.
      </p>
      <div className="d-flex gap-3">
        <div className="w-100 d-flex flex-column justify-content-between gap-3">
          {services.map((service) => (
            <Service
              key={service.id}
              id={service.id}
              img={service.img}
              list={service.list}
              service={service.service}
              subtitle={service.subtitle}
              title={service.title}
              activeTab={serviceL.id === service.id ? true : false}
              onClick={() => {
                setServiceL(service);
                setIndicatorPosition(service.indicatorHeight);
              }}
              //   onMouseEnter={() => setIndicatorPosition(service.indicatorHeight)}
              //   onMouseLeave={() =>
              //     setIndicatorPosition(serviceL.indicatorHeight)
              //   }
            />
          ))}
        </div>
        <div className="service-nav-indicator-container position-relative d-none d-lg-block">
          <div className="service-nav-indicator-line position-absolute start-50 h-100"></div>
          <div
            className="position-absolute service-nav-indicator"
            style={{ "--indicatorPosition": indicatorPosition + "%" }}
          ></div>
        </div>
        <div className="service-details text-start p-3 rounded-4 d-none d-lg-block">
          <div className="p-3 bg-white rounded">
            <h3 className="fs-3 fw-semibold">{serviceL.title}</h3>
            <p className="fs-5 opacity-50 m-0">{serviceL.subtitle}</p>
          </div>
          <ul className="my-3">
            {serviceL.list.map((l, idx) => (
              <li key={idx} className="ps-3 mb-2 fw-semibold fs-6 opacity-75">
                {l}
              </li>
            ))}
          </ul>
          <Button linkPath={"/services"} m={"mt-2 mb-5"} />
        </div>
      </div>
    </div>
  );
};

export default Services;

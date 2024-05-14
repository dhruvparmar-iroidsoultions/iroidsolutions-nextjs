"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button";
import Link from "next/link";
import axiosApi from "@/api/axiosConfig";

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
        className={`fw-medium d-flex flex-xl-column align-items-center justify-content-xl-center gap-2 w-100 px-3 py-4 rounded-4 ${
          activeTab ? "activeService" : ""
        } bg-white service-btn`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#service-${id}`}
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="sevice-h d-flex align-items-center justify-content-center">
          <div className="service-img d-flex align-items-center justify-content-center rounded-2 px-1 px-xl-2 py-xl-1">
            <Image className="p-1" src={img} alt="" width={60} height={60} />
          </div>
        </div>
        <p
          className={`fs-5 m-0 d-flex align-items-center justify-content-center ${
            activeTab ? "fw-semibold" : "fw-medium opacity-75"
          } `}
        >
          {service}
        </p>
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
          {list?.map((l, idx) => (
            <li key={idx} className="ps-3 mb-2 fs-6 opacity-75">
              <Link
                className="fw-semibold text-decoration-none text-body service-link"
                href={`/services/${l.slug}`}
              >
                {l.name}
              </Link>
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
      indicatorHeight: "0",
      slug: "mobile-app-development",
    },
    {
      id: "2",
      img: "/service-img-2.png",
      service: "Web Development",
      title:
        "Web development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Web development is a vast field with many specializations. There are different types of apps you can create.",
      indicatorHeight: "27",
      slug: "web-development",
    },
    {
      id: "3",
      img: "/service-img-3.png",
      service: "Custom Software Development",
      title:
        "Custom software development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Custom software development is a vast field with many specializations. There are different types of apps you can create.",
      indicatorHeight: "53.5",
      slug: "custom-software-development",
    },
    {
      id: "4",
      img: "/service-img-4.png",
      service: "AI & ML",
      title:
        "AI & ML development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "AI & ML development is a vast field with many specializations. There are different types of apps you can create.",
      indicatorHeight: "80",
      slug: "ai-&-ml",
    },
  ];

  const [serviceL, setServiceL] = useState(services[0]);
  const [serviceList, setServiceList] = useState([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const getServiceList = async (service) => {
    try {
      const { data } = await axiosApi.get(
        `/development-title/detail/${service}`
      );
      setServiceList(data);
    } catch (error) {
      console.error("Fetching service list error: ", error);
    }
  };

  useEffect(() => {
    getServiceList("mobile-app-development");
  }, []);

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
      <div className="d-flex gap-3 gap-xl-5 p-xl-5 rounded-5 service-con">
        <div className="w-100 d-flex flex-column justify-content-between gap-3 service-grid">
          {services.map((service) => (
            <Service
              key={service.id}
              id={service.id}
              img={service.img}
              list={serviceList}
              service={service.service}
              subtitle={service.subtitle}
              title={service.title}
              activeTab={serviceL.id === service.id ? true : false}
              onClick={() => {
                setServiceL(service);
                getServiceList(service.slug);
              }}
              // onClick={() => {
              //   setServiceL(service);
              //   setIndicatorPosition(service.indicatorHeight);
              // }}
              //   onMouseEnter={() => setIndicatorPosition(service.indicatorHeight)}
              //   onMouseLeave={() =>
              //     setIndicatorPosition(serviceL.indicatorHeight)
              //   }
            />
          ))}
        </div>
        {/* <div className="service-nav-indicator-container position-relative d-none d-lg-block">
          <div className="service-nav-indicator-line position-absolute start-50 h-100"></div>
          <div
            className="position-absolute service-nav-indicator"
            style={{ "--indicatorPosition": indicatorPosition + "%" }}
          ></div>
        </div> */}
        <div className="service-details text-start p-3 rounded-4 d-none d-lg-block">
          <div className="p-3 rounded">
            <h3 className="fs-3 fw-semibold">{serviceL.title}</h3>
            <p className="fs-5 fw-medium opacity-60 m-0 bg-white px-2 rounded-3 px-xxl-0">
              {serviceL.subtitle}
            </p>
          </div>
          <hr className="service-hr px-2" />
          <ul className="my-3">
            {serviceList.map((l, idx) => (
              <li key={idx} className="ps-3 mb-2 fs-6 opacity-75">
                <Link
                  className="fw-semibold text-decoration-none text-body service-link"
                  href={`/services/${l.slug}`}
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* <Button linkPath={"/services"} m={"mt-2 mb-5"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;

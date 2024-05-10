"use client";

import axiosApi from "@/api/axiosConfig";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const IndustriesWeServe = () => {
  const [industries, setIndustries] = useState([]);

  const getInudstries = async () => {
    try {
      const { data } = await axiosApi.get("/industries");
      setIndustries(data.data);
    } catch (error) {
      console.error("Fetching industires error: ", error);
    }
  };

  useEffect(() => {
    getInudstries();
  }, []);

  const line = [
    {
      img: "/education.png",
      title: "Education Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/fintech.png",
      title: "Fintech Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/healthcare.png",
      title: "Healthcare & Fitness Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/lifestyle.png",
      title: "Lifestyle Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/social media.png",
      title: "Social Media & Entertainment Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/real estate.png",
      title: "Real Estate Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/eCommerce.png",
      title: "Retail & E-Commerce Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/sports.png",
      title: "Sports Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/transport.png",
      title: "Transport & Logistics Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/travel.png",
      title: "Travel & Hospitality Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/power.png",
      title: "Energy & Power Generation Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/AI AR.png",
      title: "AI and AR Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/business.png",
      title: "Business Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/other.png",
      title: "Other Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div className="ind-w-s text-center py-2 py-md-5">
      <h3 className="fs-4 fw-semibold">Industries We Serve</h3>
      <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
        Impactful Solutions for Various Sectors
      </p>
      <div className="scrollers mx-auto py-3 py-md-5">
        <div className="w-100 ind-ws-card-container px-4 py-md-4">
          {industries.map((l, idx) => (
            <Link
              className={`p-2 p-md-4 text-decoration-none d-flex flex-column align-items-center justify-content-center gap-1 ind-ws-card bg-white`}
              href={`/solutions/${l.slug}`}
              key={idx}
            >
              <div className="img-con d-flex align-items-start justify-content-center">
                <Image src={l.icon} alt="" width={70} height={70} />
              </div>
              <h5 className="fw-semibold text-black">{l.name}</h5>

              <h6
                className="fw-medium w-100 opacity-50 text-black"
                dangerouslySetInnerHTML={{ __html: l.description }}
              />
            </Link>
          ))}
          <Link
            className={`p-2 p-md-4 text-decoration-none d-flex flex-column align-items-center justify-content-center gap-1 ind-ws-card bg-white`}
            href={"/industries"}
          >
            <div className="d-flex align-items-start justify-content-center">
              <Image src={"/more-indu.png"} alt="" width={60} height={60} />
            </div>
            <h5 className="fw-semibold text-black">See more</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;

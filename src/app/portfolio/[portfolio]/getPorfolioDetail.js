"use client";

import axiosApi from "@/api/axiosConfig";
import ContactUs from "@/components/contactUs";
import TopBg from "@/components/topBg";
import Image from "next/image";
import { useEffect, useState } from "react";

const GetPorfolioDetail = ({ slug }) => {
  const [portfolioDetail, setPortfolioDetail] = useState({});

  const getPorfolioDetail = async (slug) => {
    try {
      const { data } = await axiosApi.get(`/portfolio-details/${slug}`);
      setPortfolioDetail(data.data);
    } catch (error) {
      console.error("Fetching portfolio details error: ", error);
    }
  };

  useEffect(() => {
    getPorfolioDetail(slug);
  }, []);

  return (
    <>
      <TopBg
        state={portfolioDetail.projectname}
        text={portfolioDetail.sub_title}
        extra={
          <div className="d-flex flex-wrap justify-content-center my-3 gap-2 gap-lg-3">
            <Image
              className="portfolio-d-img download-img"
              src={"/apple-store.svg"}
              alt=""
              width={1200}
              height={800}
            />
            <Image
              className="portfolio-d-img download-img"
              src={"/play-store.svg"}
              alt=""
              width={1200}
              height={800}
            />
          </div>
        }
      />
      <div className="container py-3 py-lg-5">
        {portfolioDetail.thumbnail && (
          <Image
            className="portfolio-d-img rounded-5 overflow-hidden"
            // src={portfolioDetail.thumbnail}
            src={`${portfolioDetail.thumbnail}`}
            alt="portfolio-d-img"
            width={12000}
            height={12000}
          />
        )}
        <div
          className="my-3 my-lg-5"
          dangerouslySetInnerHTML={{ __html: portfolioDetail.about_project }}
        />
      </div>
      <div className="tech-stack-container text-center py-3 py-lg-5">
        <h1 className="text-005490 fw-bolder">Technology Stack</h1>
        <div className="tech_stacks d-flex align-items-center justify-content-center gap-3 gap-lg-5 py-3 py-lg-5">
          {portfolioDetail.techstack?.map((tech, idx) => (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              key={idx}
            >
              <p className="fs-6 fw-semibold">{tech.title}</p>
              <div className="tech-card flexElem rounded-4 border-0 bg-white d-flex flex-column align-items-center justify-content-center p-2 px-lg-5 py-lg-4">
                <Image
                  className="portfolio-d-img tech-card-img mb-4"
                  src={tech.tech_stack_image}
                  alt={""}
                  width={100}
                  height={100}
                />
                <p className="flexElem fs-6 fw-medium opacity-75 mb-0">
                  {tech.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container text-center py-3 py-lg-5 mt-lg-5">
        <h1 className="text-005490 fw-bolder">Key Features</h1>
        <div className="key-feature mw-1060 mx-auto d-flex flex-wrap align-items-center justify-content-center gap-3 py-3 py-lg-5 px-1 px-sm-3">
          {portfolioDetail.key_features?.split(",").map((item, idx) => (
            <p
              className="fs-6 fw-medium border-0 px-3 py-1 rounded-3 fw-semibold"
              style={{ background: "#E7ECF1" }}
              key={idx}
            >
              {item.trim()}
            </p>
          ))}
        </div>
        <Image
          className="portfolio-d-img star"
          src={"/key-feature-star.png"}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <ContactUs />
    </>
  );
};

export default GetPorfolioDetail;

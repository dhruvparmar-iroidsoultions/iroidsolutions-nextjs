"use client";

import axiosApi from "@/api/axiosConfig";
import Button from "@/components/button";
import CaseStudy from "@/components/caseStudy";
import ContactUs from "@/components/contactUs";
import NumberFacts from "@/components/number-facts";
import TopBg from "@/components/topBg";
import Image from "next/image";
import { useEffect, useState } from "react";

const GetSolution = ({ slug }) => {
  const [solutionDetail, setSolutionDetail] = useState({});
  const [caseStudies, setCaseStudies] = useState([]);

  const removeTags = (html) => {
    const cleanText = html?.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const getSolution = async () => {
    try {
      const { data } = await axiosApi.get(`industrie/detail/${slug}`);
      setSolutionDetail(data.data);
    } catch (error) {
      console.error("fetching solution error: ", error);
    }
  };
  const getCaseStudies = async () => {
    try {
      const { data } = await axiosApi.get(`/case-studies?page=1&limit=5`);
      setCaseStudies(data.data);
    } catch (error) {
      console.error("Fetching casestudies error: ", error);
    }
  };

  useEffect(() => {
    getSolution();
    getCaseStudies();
  }, []);

  return (
    <>
      <TopBg
        state={solutionDetail.name}
        text={removeTags(solutionDetail.description)}
      />
      <div className="container py-3 py-md-5">
        <p className="fs-1 fw-semibold text-center mw-1100 mx-auto">
          Education Management App Development Services For Your Business:
        </p>
        <p className="fs-5 fw-medium text-center text-00000099 mw-1060 mx-auto">
          Developing an education management app can be a valuable endeavor,
          whether it's for schools, universities, or other educational
          institutions.
        </p>
        <div className="solution-d-container my-3 my-md-4 my-lg-5">
          {solutionDetail.paragraph?.map((p, idx) =>
            idx % 2 === 0 ? (
              <div
                className="solution-d rounded-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 gap-lg-5 overflow-hidden my-3 p-2 p-sm-3 p-md-4 p-lg-5"
                key={idx}
              >
                <div className="s-d-p flexElem">
                  <p className="fs-4 fw-bolder text-005490">{p.title}</p>
                  <div
                    className="s-d-p-description"
                    dangerouslySetInnerHTML={{ __html: p.description }}
                  />
                </div>
                <div className="s-d-img-con flexElem">
                  <Image src={p.thumbnail} alt="" width={400} height={400} />
                </div>
              </div>
            ) : (
              <div
                className="solution-d rounded-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 gap-lg-5 overflow-hidden my-3 p-2 p-sm-3 p-md-4 p-lg-5"
                key={idx}
              >
                <div className="s-d-img-con flexElem">
                  <Image src={p.thumbnail} alt="" width={400} height={400} />
                </div>
                <div className="s-d-p flexElem">
                  <p className="fs-4 fw-bolder text-005490">{p.title}</p>
                  <div
                    className="s-d-p-description"
                    dangerouslySetInnerHTML={{ __html: p.description }}
                  />
                </div>
              </div>
            )
          )}
        </div>
        <div className="prime-feature my-3 my-md-4 my-lg-5">
          <div className="feature-container">
            {solutionDetail.manage_app?.map((app, idx) => (
              <div
                className="manage-app-container text-center rounded-4 p-3 p-md-4"
                key={idx}
              >
                <Image
                  className="m-a-img"
                  src={app.icon}
                  alt=""
                  width={1200}
                  height={1200}
                />
                <p className="fs-5 fw-semibold">{app.name}</p>
                <div dangerouslySetInnerHTML={{ __html: app.description }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CaseStudy casestudy={caseStudies} containerTitle={"Case Study"} />
      <div className="enqury py-3 py-md-5 my-md-3 my-lg-5">
        <p className="fs-1 fw-semibold text-center">
          Are You Looking for a Business Education Management Solution?
        </p>
        <p className="fs-5 fw-medium text-center text-00000099">
          Your project begins here..!!
        </p>
        <div className="d-flex align-items-center justify-contentcenter">
          <Button
            linkPath={"#contact-us"}
            m={"mx-auto my-3"}
            text={"Enquire Now"}
          />
        </div>
      </div>
      <div className="numb-fact py-3 py-lg-5">
        <div className="container">
          <p className="fs-1 fw-semibold text-center">
            Why Choose iRoid Solutions
          </p>
          <p className="fs-5 fw-medium text-center text-00000099">
            For your education management app development?
          </p>
          <NumberFacts />
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default GetSolution;

"use client";

import axiosApi from "@/api/axiosConfig";
import Button from "@/components/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const removeTags = (html) => {
    const cleanText = html?.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const getCaseStudies = async (page) => {
    try {
      const { data } = await axiosApi.get(`/case-studies?page=${page}&limit=5`);
      const lastPage = data.meta.last_page;
      setCaseStudies(data.data);
      setLastPage(lastPage);
    } catch (error) {
      console.error("Fetching casestudies error: ", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    getCaseStudies(pageNumber);
    setCurrentPage(pageNumber);
    pagination(pageNumber, lastPage);
  };

  const handlePrevPageChange = (pageNumber) => {
    getCaseStudies(pageNumber);
    setCurrentPage(pageNumber - 1);
    pagination(pageNumber - 1, lastPage);
  };

  const handleNextPageChange = (pageNumber) => {
    getCaseStudies(pageNumber);
    setCurrentPage(pageNumber + 1);
    pagination(pageNumber + 1, lastPage);
  };

  const pagination = (c, m) => {
    var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }

      rangeWithDots.push(i);
      l = i;
    }
    // return rangeWithDots;
    return setPages(rangeWithDots);
  };

  useEffect(() => {
    getCaseStudies(1);
    pagination();
  }, []);

  useEffect(() => {
    pagination(1, lastPage);
  }, [lastPage]);
  return (
    <div className="mw-1270 mx-auto py-5 case-studies-container">
      {caseStudies.map((cs) => {
        return (
          <div
            className="d-flex flex-column flex-lg-row justify-content-between mx-2 py-3 py-md-4 text-start rounded-5 border-0 mb-3 mb-md-5 overflow-hidden casestudy"
            key={cs.id}
          >
            <div className="d-flex flex-column align-items-start mx-0 mx-md-1 mx-lg-5 px-2 wow animate__animated animate__fadeInLeft">
              <img
                className="mb-3 mb-lg-5 casestudy-logo"
                src={cs.profile}
                alt="iroid_solutions"
                style={{ maxHeight: "110px" }}
              />
              <p className="fs-6 fw-semibold text-005490 m-0">{cs.category}</p>
              <p className="fs-3 fw-semibold text-black text-start">
                {cs.title}
              </p>
              {/* <h3 className="text-start text-capitalize mb-3">{cs.subtitle}</h3> */}
              <div className="caseStudy-tags d-flex flex-wrap align-items-center gap-3">
                {cs.tag.split(",").map((item, idx) => (
                  <p
                    className="fs-6 fw-medium border-0 px-3 py-1 rounded-3 text-005490 caseStudy-tag"
                    style={{ background: "#E9F1F6" }}
                    key={idx}
                  >
                    {item.trim()}
                  </p>
                ))}
              </div>
              <div dangerouslySetInnerHTML={{ __html: cs.descriptions }} />
              {/* <p
                className="fs-6 fw-normal opacity-75 lh-base"
                style={{ color: "#000000E5" }}
              >
                {removeTags(cs.descriptions)}
              </p> */}
              <Button linkPath={`/casestudy/${cs.slug}`} text={"Read More"} />
            </div>
            <div className="mx-3 mx-md-5 wow animate__animated animate__fadeInRight d-flex align-items-center justify-content-center">
              <Tilt>
                <Image
                  className="img-w100-hauto"
                  src={cs.cover_image}
                  alt=""
                  width={1200}
                  height={500}
                  // layout="responsive"
                />
              </Tilt>
            </div>
          </div>
        );
      })}
      <div className="casestudies-pagination d-flex align-items-center justify-content-center pt-2 pt-md-5 mt-md-2 gap-2">
        <button
          className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 gallery-pagination-btn`}
          disabled={currentPage === 1}
          onClick={() => handlePrevPageChange(currentPage)}
        >
          Prev
        </button>
        {pages.map((p, idx) => (
          <button
            className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 gallery-pagination-btn ${
              p === "..." ? "pe-none border-0" : ""
            } ${currentPage === p ? "active-casestudies-page text-white" : ""}`}
            key={idx}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </button>
        ))}
        <button
          className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 gallery-pagination-btn`}
          disabled={currentPage === lastPage}
          onClick={() => handleNextPageChange(currentPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;

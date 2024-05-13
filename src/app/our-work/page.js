"use client";

import axiosApi from "@/api/axiosConfig";
import Card from "@/components/card";
import TopBg from "@/components/topBg";
import { useEffect, useState } from "react";
import "./page.css";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

const OurWork = () => {
  const removeTags = (html) => {
    const cleanText = html?.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const [casestudies, setCasestudies] = useState([]);
  const portfolioCategories = [
    "All",
    "iPhone/iPad",
    "Android",
    "Website/Webapp",
    "UI/UX Design",
  ];
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioSelection, setPortfolioSelection] = useState("all");

  const changeCategory = (category, id) => {
    setPortfolioSelection(category);
    getPortfolio(id);
  };

  const getCaseStudies = async () => {
    try {
      const { data } = await axiosApi.get("/case-studies?page=1&limit=6");
      setCasestudies(data.data);
      console.log(data);
    } catch (error) {
      console.error("getting error fetching casestudies");
    }
  };

  const getPortfolio = async (id) => {
    try {
      const { data } = await axiosApi.get(
        `/portfolio?page=1&perPage=6&category_id=${id}`
      );
      console.log(data.data);
      setPortfolios(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCaseStudies();
    getPortfolio(0);
  }, []);

  return (
    <>
      <TopBg
        state={"Check Our Awesome Portfolio"}
        text={
          "iRoid proudly secures its position among India's top 100 IT solution companies, as recognized in a 2019 online survey. Specializing in web development and software solutions, our portfolio showcases excellence in developer, graphic design, and UI/UX portfolios. Explore iRoid Solutions for innovative IT solutions."
        }
      />
      <div className="container py-5">
        <div className="casestudy-container">
          <p className="fs-1 fw-semibold text-center">
            Case Studies / Success Stories
          </p>
          <p className="fs-5 fw-medium opacity-50 text-center">
            "Unlocking Potential: Real Stories of Success. Learn, Inspire,
            Succeed."
          </p>
          <div className="casestudies our-work-card-container">
            {casestudies.map((casestudy) => (
              <Card
                cardOfClass={"our-work-card-p p-3 rounded-5 border-0"}
                imgExtraClass={"rounded-5 overflow-hidden"}
                img={casestudy.profile}
                cardText={casestudy.category}
                cardTitle={casestudy.title}
                cardBodyExtraClass={
                  "d-flex flex-column justify-content-between"
                }
                tag={
                  <>
                    <p className="work-project-desc m-0">
                      {removeTags(casestudy.descriptions)}
                    </p>
                    <Button linkPath={`#`} text={"Read More"} m={"my-3"} />
                  </>
                }
                key={casestudy.id}
              />
            ))}
          </div>
        </div>
        <div className="portfolio-container my-5">
          <p className="fs-1 fw-semibold text-center">Our Work</p>
          <p className="fs-5 second-text mx-auto fw-medium opacity-50 text-center">
            "At iRoid Solutions, our mission is to continuously create value for
            our customers by fostering innovation, nurturing collaboration, and
            relentlessly pursuing excellence across every facet of our
            operations. Here's a glimpse into our portfolio of achievements."
          </p>
          <ul className="list-unstyled rounded-4 my-3 my-md-5 mx-auto d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center bg-white overflow-hidden wow animate__animated animate__fadeIn">
            {portfolioCategories.map((category, idx) => (
              <li
                className={`${
                  portfolioSelection.toLowerCase() === category.toLowerCase()
                    ? "activePortfolioLi text-white fw-bolder"
                    : "fw-medium"
                } fs-6 mx-3 py-2 px-4 our-work-portfolio-category border-0 rounded-3`}
                onClick={() => changeCategory(category, idx)}
                key={idx}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="portfolios our-work-card-container">
            {portfolios.map((portfolio) => (
              <Card
                cardOfClass={"our-work-card-p p-3 rounded-5 border-0"}
                imgExtraClass={"rounded-5 overflow-hidden"}
                img={portfolio.thumbnail}
                cardText={"Fitness Industry"}
                cardTitle={portfolio.projectname}
                isDoted={false}
                cardBodyExtraClass={
                  "d-flex flex-column justify-content-between"
                }
                tag={
                  <div className="my-2">
                    <p className="work-project-desc m-0">
                      {/* {removeTags(portfolio.descriptions)} */}
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempr incididunt ut labore et.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                      <ul className="list-unstyled rounded-4 my-2 bg-transparent d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center bg-white overflow-hidden wow animate__animated animate__fadeIn">
                        <li className="fs-7 fw-semibold mx-1 py-2 px-2 our-work-portfolio-project-tech border-0 rounded-3 text-005490">
                          Android
                        </li>
                        <li className="fs-7 fw-semibold mx-1 py-2 px-2 our-work-portfolio-project-tech border-0 rounded-3 text-005490">
                          Kotlin
                        </li>
                        <li className="fs-7 fw-semibold mx-1 py-2 px-2 our-work-portfolio-project-tech border-0 rounded-3 text-005490">
                          Laravel
                        </li>
                      </ul>
                      <div className="project-link rounded-pill d-flex align-items-center justify-content-around px-1 py-2">
                        <Link href={"#"} className="p-1 mx-2">
                          <Image
                            src={"/portfolio-p-tag-ios.png"}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </Link>
                        <Link href={"#"} className="p-1 mx-2">
                          <Image
                            src={"/portfolio-p-tag-android.png"}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                }
                key={portfolio.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWork;

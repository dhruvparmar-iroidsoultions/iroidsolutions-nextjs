"use client";

import { useEffect, useState } from "react";
import Button from "../button";
import Card from "../card";
import axiosApi from "@/api/axiosConfig";

const PortfolioHome = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [portfolioSelection, setPortfolioSelection] = useState("all");
  const [selectedCategory, setselectedCategory] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApi.get(
          `/portfolio?page=1&perPage=3&category_id=${selectedCategory}`
        );
        const portfolios = response.data.data;
        setPortfolio(portfolios);
      } catch (error) {
        // Handle error (e.g., log, display error message)
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);
  const portfolioCategories = [
    "All",
    "iPhone/iPad",
    "Android",
    "Website/Webapp",
    "UI/UX Design",
  ];

  const changeCategory = (c, idx) => {
    setPortfolioSelection(c);
    setselectedCategory(idx);
  };
  return (
    <div className="homePortfolio w-100">
      <div className="container text-center py-5">
        <p className="firstBlue mb-0 mb-sm-2">Portfolio</p>
        <p className="mb-3 mb-lg-5 f38  wow animate__animated animate__fadeInLeft">
          Check Our Awesome Portfolio
        </p>
        <ul className="list-unstyled mx-auto d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-evenly wow animate__animated animate__fadeIn">
          {portfolioCategories.map((c, idx) => (
            <li
              className={
                portfolioSelection.toLowerCase() === c.toLowerCase()
                  ? "activePortfolioLi"
                  : ""
              }
              onClick={() => changeCategory(c, idx)}
              key={idx}
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="projectContainer row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-4">
          {/* <div className="projectContainer d-flex flex-wrap flex-lg-nowrap gap-5 justify-content-center justify-content-lg-between mt-5"> */}
          {/* <div className="projectContainer d-flex flex-wrap flex-md-nowrap gap-5 gap-md-3 gap-xl-4 gap-xxl-5 justify-content-center justify-content-lg-between mt-5"> */}
          {portfolio.map((project) => {
            const category = [];
            const decodeC = JSON.parse(project.category);
            decodeC.includes("1") && category.push("iPhone");
            decodeC.includes("2") && category.push("Android");
            decodeC.includes("3") && category.push("Website");
            decodeC.includes("4") && category.push("UI/UX");
            return (
              <div className="col">
                <Card
                  key={project.id}
                  cardOfClass={"project"}
                  img={project.thumbnail}
                  cardText={category.join(", ")}
                  cardTitle={project.projectname}
                />
              </div>
            );
          })}
        </div>

        <Button linkPath={"/portfolio"} />
        <div className="worldMap my-4 d-flex flex-column align-items-center justify-content-center text-center position-relative">
          <h3 className="firstBlue">Our Clients</h3>
          <p className="mb-5 f38 wow animate__animated animate__fadeInLeft">
            Trusted by clients worldwide, we deliver exceptional mobile app and
            website projects across 25+ countries and continue to expand our
            global reach.
          </p>
          <img src={"/map.png"} alt="" />
          {/* <img src={mapAnimation} alt="" className="position-absolute" /> */}
          {/* <AmsChart /> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;

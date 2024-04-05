"use client";

import { useState } from "react";
import Button from "../button";
import Card from "../card";

const PortfolioHome = ({ portfolio }) => {
  const [portfolioSelection, setPortfolioSelection] = useState("all");
  const mapProjects =
    portfolio &&
    portfolio
      .filter(
        (project) =>
          project.category
            .map((c) => c.toLocaleLowerCase())
            .includes(portfolioSelection) || portfolioSelection === "all"
      )
      .slice(0, 3)
      .map((project) => {
        return (
          <Card
            key={project._id}
            cardOfClass={"project w-100"}
            img={project.img}
            cardText={project.category.join(", ")}
            cardTitle={project.projectName}
          />
        );
      });
  return (
    <div className="homePortfolio w-100">
      <div className="container text-center py-5 ">
        <p className="firstBlue mb-0 mb-sm-2">Portfolio</p>
        <p className="mb-3 mb-lg-5 f38  wow animate__animated animate__fadeInLeft">
          Check Our Awesome Portfolio
        </p>
        <ul className="list-unstyled mx-auto d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-evenly wow animate__animated animate__fadeIn">
          <li
            className={portfolioSelection === "all" ? "activePortfolioLi" : ""}
            onClick={() => setPortfolioSelection("all")}
          >
            All
          </li>
          <li
            className={
              portfolioSelection === "iphone" ? "activePortfolioLi" : ""
            }
            onClick={() => setPortfolioSelection("iphone")}
          >
            iPhone/iPad
          </li>
          <li
            className={
              portfolioSelection === "android" ? "activePortfolioLi" : ""
            }
            onClick={() => setPortfolioSelection("android")}
          >
            Android
          </li>
          <li
            className={
              portfolioSelection === "website" ? "activePortfolioLi" : ""
            }
            onClick={() => setPortfolioSelection("website")}
          >
            Website/Webapp
          </li>
          <li
            className={
              portfolioSelection === "ui/ux design" ? "activePortfolioLi" : ""
            }
            onClick={() => setPortfolioSelection("ui/ux design")}
          >
            UI/UX Design
          </li>
        </ul>
        {/* <div className="projectContainer row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4 gap-5 gap-xxl-0 justify-content-around"> */}
        <div className="projectContainer d-flex flex-wrap flex-lg-nowrap gap-5 justify-content-center justify-content-lg-between mt-5">
          {mapProjects}
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

"use client";

import { useEffect, useState } from "react";
import Button from "../button";
import Card from "../card";
import axiosApi from "@/api/axiosConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const PortfolioHome = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [portfolioSelection, setPortfolioSelection] = useState("all");
  const [selectedCategory, setselectedCategory] = useState(0);

  const prevSlide = () => {
    document
      .getElementById("home-portfolio-swiper")
      ?.getElementsByClassName("swiper-button-prev")[0]
      .click();
  };

  const nextSlide = () => {
    document
      .getElementById("home-portfolio-swiper")
      ?.getElementsByClassName("swiper-button-next")[0]
      ?.click();
  };

  const fetchData = async () => {
    try {
      const response = await axiosApi.get(
        `/portfolio?page=1&perPage=7&category_id=${selectedCategory}`
      );
      const portfolios = response.data.data;
      setPortfolio(portfolios);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
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
        <p className="fs-4 fw-semibold mb-0 mb-sm-2">Portfolio</p>
        <p className="mb-3 mb-xl-4 text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
          See The Incredible Work We've Done for Our Clients
        </p>
        <ul className="list-unstyled rounded-4 mx-auto d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-evenly bg-white overflow-hidden wow animate__animated animate__fadeIn">
          {portfolioCategories.map((c, idx) => (
            <li
              className={`${
                portfolioSelection.toLowerCase() === c.toLowerCase()
                  ? "activePortfolioLi text-005490 fw-bolder border-3 border-bottom"
                  : "fw-medium"
              }  px-4 py-3 fs-6`}
              onClick={() => changeCategory(c, idx)}
              key={idx}
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="iwsButtons w-100 p-0 position-relative">
          {/* if get arrow problem just add prevBtn class to the button */}
          <button
            className="position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center border border-0 z-3"
            onClick={prevSlide}
          >
            <img src={"/swiper-left-arrow.png"} alt="read more" />
          </button>
          <button
            className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center border border-0 z-3"
            onClick={nextSlide}
          >
            <img src={"/swiper-right-arrow.png"} alt="read more" />
          </button>
          <div className="video-testimonial-container">
            <Swiper
              className="portfolio-swiper"
              loop={true}
              slidesPerView={1}
              spaceBetween={20}
              wrapperClass="portfolio-slider-wrapper"
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              id="home-portfolio-swiper"
              breakpoints={{
                991: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
              }}
            >
              {portfolio.map((project) => {
                const category = [];
                const decodeC = JSON.parse(project.category);
                decodeC.includes("1") && category.push("iPhone");
                decodeC.includes("2") && category.push("Android");
                decodeC.includes("3") && category.push("Website");
                decodeC.includes("4") && category.push("UI/UX");
                return (
                  <SwiperSlide
                    className="py-5 "
                    key={project.id}
                    style={{ height: "auto" }}
                  >
                    <Card
                      cardOfClass={"project"}
                      img={project.thumbnail}
                      cardText={category.join(", ")}
                      cardTitle={project.projectname}
                      isDoted={false}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="projectContainer row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-4"></div>
        <Button linkPath={"/portfolio"} />
      </div>
    </div>
  );
};

export default PortfolioHome;

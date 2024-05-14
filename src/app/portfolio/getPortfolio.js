"use client";

import axiosApi from "@/api/axiosConfig";
import Card from "@/components/card";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const GetPortfolio = () => {
  const router = useRouter();

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

  const getPortfolio = async (id) => {
    try {
      const { data } = await axiosApi.get(
        `/portfolio?page=1&perPage=6&category_id=${id}`
      );
      setPortfolios(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPortfolio(0);
  }, []);
  return (
    <>
      <ul className="list-unstyled rounded-4 my-3 my-md-5 mx-auto d-flex flex-nowrap align-items-center justify-content-start justify-content-lg-center bg-white overflow-scroll wow animate__animated animate__fadeIn">
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
          // <Link
          //   className="text-decoration-none"
          //   href={`/portfolio/${portfolio.slug}`}
          //   key={portfolio.id}
          //   passHref
          // >
          <Card
            onclick={() => router.push(`/portfolio/${portfolio.slug}`)}
            cardOfClass={"our-work-card-p p-3 rounded-5 border-0"}
            imgExtraClass={"rounded-5 overflow-hidden"}
            img={portfolio.thumbnail}
            cardText={portfolio.industry_name}
            textStyle={"fs-6 fw-semibold text-005490"}
            cardTitle={portfolio.projectname}
            titlestyle={"m-0 fs-3 fw-semibold"}
            isDoted={false}
            key={portfolio.id}
            cardBodyExtraClass={"d-flex flex-column justify-content-between"}
            tag={
              <>
                <p className="work-project-desc m-0 text-black fs-6 fw-medium opacity-75">
                  {/* {removeTags(portfolio.descriptions)} */}
                  {portfolio.sub_title}
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <ul className="list-unstyled rounded-4 my-2 bg-transparent d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-start justify-content-lg-center gap-1 bg-white overflow-hidden wow animate__animated animate__fadeIn">
                    {portfolio.tag_title?.split(",").map((item, idx) => (
                      <li
                        className="fs-7 fw-semibold mx-lg-1 py-2 px-2 our-work-portfolio-project-tech border-0 rounded-3 text-005490"
                        key={idx}
                      >
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                  <div className="project-link rounded-pill d-flex align-items-center justify-content-around px-1 py-2">
                    {portfolio.ioslink && (
                      <Link href={portfolio.ioslink} className="p-1 mx-2">
                        <Image
                          src={"/portfolio-p-tag-ios.png"}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </Link>
                    )}
                    {portfolio.androidlink && (
                      <Link href={portfolio.androidlink} className="p-1 mx-2">
                        <Image
                          src={"/portfolio-p-tag-android.png"}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </Link>
                    )}
                    {portfolio.weblink && (
                      <Link href={portfolio.weblink} className="p-1 mx-2">
                        <Image
                          src={"/portfolio-p-tag-web.png"}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </>
            }
          />
        ))}
      </div>
    </>
  );
};

export default GetPortfolio;

"use client";

import axiosApi from "@/api/axiosConfig";
import { useEffect, useState } from "react";
import "./index.css";
import Image from "next/image";

const OurStackComponent = ({ categoryBgClass }) => {
  const [techStacksCategory, setTechStacksCategory] = useState([]);
  const [techStacks, setTechStacks] = useState([]);
  const [techSelection, setTechSelection] = useState({
    id: 1,
    category: "mobile",
  });

  const refreshStack = (tech) => {
    setTechSelection(tech);
    getTechStacks(tech.id);
  };

  const getTechStacksCategory = async () => {
    try {
      const response = await axiosApi.get("/categories-list");
      const category = response.data.data;
      setTechStacksCategory(category);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getTechStacks = async (id) => {
    try {
      const response = await axiosApi.get(
        `/our-tech-stack?page=1&category_id=${id}`
      );
      const category = response.data.data;
      setTechStacks(category);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getTechStacksCategory();
    getTechStacks(1);
  }, []);

  return (
    <div className="my-5 mx-auto our-tech-container">
      <ul
        className={`list-unstyled border rounded-4 mx-auto d-flex flex-nowrap align-items-center justify-content-center justify-content-evenly ${
          categoryBgClass ? categoryBgClass : "bg-white"
        } overflow-auto tech-stack-category wow animate__animated animate__fadeIn`}
      >
        {techStacksCategory.map((tech) => (
          <li
            className={`${
              techSelection.category.toLowerCase() ===
              tech.category.toLowerCase()
                ? "activeTechLi text-005490 fw-bolder border-3 border-bottom"
                : "fw-medium"
            }  px-4 py-3 fs-6`}
            onClick={() => {
              refreshStack(tech);
            }}
            key={tech.id}
          >
            {tech.category}
          </li>
        ))}
      </ul>
      <div className="techstackCon my-3 my-md-5">
        {techStacks.map((t) => (
          <div className="my-2" key={t.id}>
            <div className="techC border w-100 h-100 border-0 bg-white rounded-4 p-4 d-flex flex-column align-items-center justify-content-between gap-2">
              <Image src={t.image} alt={t.title} width={60} height={50} />
              <p className="m-0">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStackComponent;

"use client";

import axiosApi from "@/api/axiosConfig";
import IndustryCard from "@/components/industry-card";
import { useEffect, useState } from "react";

const Getindustry = () => {
  const [industries, setIndustries] = useState([]);

  const getIndustries = async () => {
    try {
      const { data } = await axiosApi.get("/industries");
      console.log(data);
      setIndustries(data.data);
    } catch (error) {
      console.error("Fetching industry error: ", error);
    }
  };

  useEffect(() => {
    getIndustries();
  }, []);

  return (
    <div className="container">
      {industries.map((service) => (
        <div
          className="sevice-card-container p-3 my-3 w-100 rounded-5"
          key={service.id}
        >
          <IndustryCard info={service} id={service.id} link={true} />
        </div>
      ))}
    </div>
  );
};

export default Getindustry;

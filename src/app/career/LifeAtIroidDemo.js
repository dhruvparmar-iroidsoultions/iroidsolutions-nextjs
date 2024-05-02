"use client";

import axiosApi from "@/api/axiosConfig";
import Button from "@/components/button";
import LifeAtIroidCard from "@/components/lifeAtCard";
import { useEffect, useState } from "react";

const LifeAtIroidDemo = () => {
  const [demos, setDemos] = useState([]);
  const getDemo = async () => {
    try {
      const { data } = await axiosApi.get("/life-at-iroids?page=1&limit=3");
      setDemos(data.data);
    } catch (error) {
      console.error("Getting Error in Fetching Demos ", error);
    }
  };

  useEffect(() => {
    getDemo();
  }, []);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="functions">
        {demos.map((demo) => (
          <LifeAtIroidCard info={demo} key={demo.id} />
        ))}
      </div>
      <Button linkPath={"/life-at-iroid"} />
    </div>
  );
};

export default LifeAtIroidDemo;

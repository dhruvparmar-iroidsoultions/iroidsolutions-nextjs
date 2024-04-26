"use client";

import { useEffect, useState } from "react";

const GetServices = () => {
  const [services, setServices] = useState([]);
  const getServices = async () => {
    try {
      const response = await axiosApi.get(
        "/client-testimonials?page=1&limit=6"
      );
      const data = response.data.data;
      setServices(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return <div className="row"></div>;
};

export default GetServices;

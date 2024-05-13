"use client";

import { useEffect, useState } from "react";
import ServiceCard from "@/components/service-card";

const GetServices = () => {
  const [services, setServices] = useState([]);
  const getServices = async () => {
    try {
      const response = await axiosApi.get("/client-testimonials?page=1");
      const data = response.data.data;
      setServices(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      {services.map((service) => (
        <div
          className="sevice-card-container p-3 my-3 w-100 rounded-5"
          key={service.id}
        >
          <ServiceCard info={service} id={service.id} />
        </div>
      ))}
    </>
  );
};

export default GetServices;

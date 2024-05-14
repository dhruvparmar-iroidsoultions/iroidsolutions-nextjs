"use client";
import { useEffect, useState } from "react";
import ServiceCard from "@/components/service-card";
import axiosApi from "@/api/axiosConfig";

const GetServices = () => {
  const [services, setServices] = useState({});

  useEffect(() => {
    const getServices = async () => {
      try {
        const { data } = await axiosApi.get("/service?page=1");
        setServices(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getServices();
  }, []);

  return (
    <>
      {Object.entries(services).map(([serviceName, serviceData]) => (
        <div
          className="sevice-card-container p-3 my-3 w-100 rounded-5"
          key={serviceName}
        >
          <ServiceCard service={serviceData} id={serviceData.id} />
        </div>
      ))}
      {/* {Object.entries(services).map(([serviceName, serviceData]) => (
        <div
          className="sevice-card-container p-3 my-3 w-100 rounded-5"
          key={serviceName}
        >
          <h2>{serviceName}</h2>
          {serviceData.map((service) => (
            <div key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
              <img src={service.image} alt={service.title} />
              <ul>
                {service.development.map((dev) => (
                  <li key={dev.slug}>{dev.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))} */}
    </>
  );
};

export default GetServices;

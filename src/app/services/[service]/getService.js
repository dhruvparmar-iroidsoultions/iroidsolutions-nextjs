"use client";

import axiosApi from "@/api/axiosConfig";
import HtmlContent from "@/components/htmlContent";
import Image from "next/image";
import { useEffect, useState } from "react";

const GetService = ({ slug }) => {
  const [service, setService] = useState({});

  const getService = async () => {
    try {
      const { data } = await axiosApi.get(`/development/detail/${slug}`);
      setService(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Fetching data error: ", error);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <>
      {service.paragraph?.map((p, idx) => (
        <div
          className="service-content my-3 my-lg-5 row row-cols-1 row-cols-lg-2 w-100 mx-auto rounded-5 p-0 p-sm-3"
          key={idx}
        >
          {p.thumbnail && (
            <div
              className={`d-none col p-0 ${
                idx % 2 === 0 ? " d-lg-none" : "d-lg-block"
              }`}
            >
              <div className="p-3 service-img-container w-100 h-100 d-flex align-items-center">
                <Image
                  className="object-fit-cover"
                  src={`${p.thumbnail}`}
                  alt=""
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          )}
          <div className="col p-0 d-flex align-items-center">
            <HtmlContent
              className={"p-3 fs-6 fw-semibold opacity-75 service-content-text"}
              htmlContent={p.description}
            />
          </div>

          {p.thumbnail && (
            <div className={`col p-0 ${idx % 2 !== 0 ? "d-lg-none" : ""}`}>
              <div className="p-3 service-img-container w-100 h-100 d-flex align-items-center">
                <Image
                  className="object-fit-cover"
                  src={`${p.thumbnail}`}
                  alt=""
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default GetService;

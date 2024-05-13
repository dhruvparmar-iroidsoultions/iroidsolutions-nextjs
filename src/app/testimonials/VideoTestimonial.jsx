"use client";

import axiosApi from "@/api/axiosConfig";
import VideoTestimonialComponent from "@/components/VideoTestimonialComponent";
import { useEffect, useState } from "react";

const VideoTestimonial = () => {
  const [services, setServices] = useState([]);
  const [shouldShow, setShouldShow] = useState(false);
  const getTestimonials = async () => {
    try {
      const response = await axiosApi.get(
        "/video-testimonials?page=1&limit=10"
      );
      const data = response.data.data;
      setServices(data);
      setShouldShow(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <>
      {shouldShow && (
        <VideoTestimonialComponent videoTestimonialArray={services} />
      )}
    </>
  );
};

export default VideoTestimonial;

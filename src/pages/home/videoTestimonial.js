import axiosApi from "@/api/axiosConfig";
import VideoTestimonial from "@/components/home/videoTestimonial";
import React from "react";

const GetVideoTestimonial = async () => {
  try {
    const videoTestimonialResponse = await axiosApi.get(
      "getAllVideoTestimonials"
    );
    const videoTestimonialArray = videoTestimonialResponse.data;

    return <VideoTestimonial videoTestimonialArray={videoTestimonialArray} />;
  } catch (error) {
    console.error("Error fetching video testimonials:", error);
    return <VideoTestimonial videoTestimonialArray={[]} />;
  }
};

export default GetVideoTestimonial;

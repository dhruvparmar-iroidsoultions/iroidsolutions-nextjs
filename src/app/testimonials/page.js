import TopBg from "@/components/topBg";
import React from "react";
import ClientTestimonial from "./ClientTestimonial";
import Button from "@/components/button";
import VideoTestimonial from "./VideoTestimonial";

const Testimonial = () => {
  return (
    <>
      <TopBg
        state={"iRoid's Testimonials Hub"}
        text={"The testimonials from our clients stand as our true honor"}
      />
      <div className="container text-center">
        <h1 className="fw-semibold my-3 mt-md-5">Client Testimonials</h1>
        <p className="mb-2 mx-auto f20 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Have a look what our clients have to say about working with us
        </p>
        <ClientTestimonial />
        <h1 className="fw-semibold my-3 mt-md-5">Video Testimonials</h1>
        <p className="mb-3 mx-auto f20 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Our clients consistently recommend our company for its excellent
          professionalism
        </p>
        <VideoTestimonial />
        <h1 className="text-center fw-semibold mt-3 my-md-4">
          "Bring Your Ideas to Life With Us."
        </h1>
        <p className="mb-2 mx-auto f20 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Tell us more about your project—we're here to listen and support your
          vision
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <Button text={"Get in Touch"} linkPath={"/life-at-iroid"} />
        </div>
      </div>
    </>
  );
};

export default Testimonial;

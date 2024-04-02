"use client";

import { useState } from "react";
import { serviceSliders, serviceText } from "@/constant/sample";
import "./index.css";
import TopBg from "../topBg";
import TransitionGroupComponent from "../react-transition-group";
import WhyChoose from "../whyChooseUs";
import Quote from "../quote";

const ServicesAndTech = ({ serviceOrTech, pathName }) => {
  const lState = serviceOrTech ? serviceOrTech.replace(/-/g, " ") : "";
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? serviceSliders.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === serviceSliders.length - 1 ? 0 : prevIndex + 1
    );
  };
  const slider = serviceSliders[currentSlideIndex];
  return (
    <div className="px-0">
      <TopBg
        text={
          "Reinforce Your Fitness App With Latest Features, Integrate Smart Fitness Coach, Workout Logging, Diet & Nutrition, and Activity Tracking."
        }
        state={lState}
      />
      <div className="serviceTech container my-5 pt-5 overflow-hidden wow animate__animated animate__fadeInUp">
        <img
          src={serviceText.img}
          alt=""
          className="serviceTech-item wow animate__animated animate__fadeInRight"
          id="serviceImg"
          data-wow-delay="1s"
        />
        <p
          className="serviceTech-item wow animate__animated animate__fadeInLeft"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          {serviceText.p1}
        </p>
        <p
          className="serviceTech-item wow animate__animated animate__fadeInUp"
          id="secondParagraph"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          {serviceText.p2}
        </p>
      </div>
      <div
        className="reasonContainer container text-center wow animate__animated animate__fadeInUp"
        data-wow-duration="2s"
      >
        {pathName.includes("services") ? (
          <h1 className="my-4 twoColor">
            Reason for <span>go with {lState}</span>
          </h1>
        ) : (
          <h1 className="my-4 twoColor">
            Key benefits <span>of {lState || "Node JS"}</span>
          </h1>
        )}

        <div className="serviceImgGrid-container">
          <div className="serviceImgGrid-item item1">
            <img src={"/tttttt.png"} alt="" />
            Empathize
          </div>
          <div className="serviceImgGrid-item item2">
            <img src={"/tttttt.png"} alt="" />
            Define
          </div>
          <div className="serviceImgGrid-item item3">
            <img src={"/tttttt.png"} alt="" />
            Ideate
          </div>
          <div className="serviceImgGrid-item item4">
            <img src={"/tttttt.png"} alt="" />
            Prototype
          </div>
          <div className="serviceImgGrid-item item5">
            <img src={"/tttttt.png"} alt="" />
            Test
          </div>
        </div>
      </div>
      <div className="IWS_SLider container mt-5 overflow-hidden">
        <h1 className="my-5 twoColor text-center wow animate__animated animate__fadeInUp">
          Industry <span>wise solutions</span>
        </h1>
        <div
          className="iwsInfo d-flex flex-column-reverse flex-lg-row text-start wow animate__animated animate__fadeIn"
          data-wow-duration="2s"
        >
          <div className="iwsInfoLeft d-flex flex-column justify-content-evenly mx-2 mx-sm-5">
            <TransitionGroupComponent currentSlideIndex={currentSlideIndex}>
              <h1 className="iwsTitle text-capitalize">{slider.title}</h1>
            </TransitionGroupComponent>
            <TransitionGroupComponent currentSlideIndex={currentSlideIndex}>
              <p className="iwsText">{slider.text}</p>
            </TransitionGroupComponent>
            {/* <TransitionGroupComponent currentSlideIndex={currentSlideIndex}> */}
            <span>
              Read More <img src={"/read more.png"} alt="read more" />
            </span>
            {/* </TransitionGroupComponent> */}
            <div className="iwsButtons mb-3 d-flex align-items-center justify-content-between justify-content-lg-start gap-3">
              <button className="prevBtn" onClick={goToPreviousSlide}>
                <img src={"/read more.png"} alt="read more" />
              </button>
              <button className="nextBtn" onClick={goToNextSlide}>
                <img src={"/read more.png"} alt="read more" />
              </button>
            </div>
          </div>
          <div
            className="iwsInfoRight d-flex align-items-center justify-content-end position-relative overflow-hidden"
            style={{ flex: "none" }}
          >
            <TransitionGroupComponent currentSlideIndex={currentSlideIndex}>
              <img src={slider.img} alt="" />
            </TransitionGroupComponent>
          </div>
        </div>
      </div>
      <div className="container d-none d-sm-block text-center mt-5 py-5">
        <h1
          className="my-4 twoColor text-capitalize mt-5 wow animate__animated animate__fadeInUp"
          data-wow-duration="1.5s"
        >
          our <span>workflow</span>
        </h1>
        <img
          src={"/workflow.jpg"}
          alt=""
          className="w-100 wow animate__animated animate__fadeInUp"
          data-wow-duration="1.5s"
        />
      </div>
      <WhyChoose pathName={serviceOrTech} />
      <Quote />
    </div>
  );
};
export default ServicesAndTech;

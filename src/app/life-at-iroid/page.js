"use client";

import "./page.css";
import EnquiryBanner from "@/components/enquiryBanner";
import Quote from "@/components/quote";
import TopBg from "@/components/topBg";
import { lifeAtiRoid } from "@/constant/sample";
import { useState } from "react";

const LifeAtIroid = () => {
  const [currentTripIndex, setCurrentTripIndex] = useState(0);
  const [employeeTestimonial, setEmployeeTestimonial] = useState(0);

  const img = lifeAtiRoid.trip.tripimg[currentTripIndex];
  const employee = [
    lifeAtiRoid.employeeTestimonials[employeeTestimonial],
    lifeAtiRoid.employeeTestimonials[employeeTestimonial + 1],
    lifeAtiRoid.employeeTestimonials[employeeTestimonial + 2],
  ];
  const goToPreviousEmployee = () => {
    setEmployeeTestimonial((prevIndex) =>
      prevIndex === 0
        ? lifeAtiRoid.employeeTestimonials.length - 3
        : prevIndex - 1
    );
  };

  const goToNextEmployee = () => {
    setEmployeeTestimonial((prevIndex) =>
      prevIndex === lifeAtiRoid.employeeTestimonials.length - 3
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <>
      <TopBg
        state={"Life At Iroid"}
        text={"Experience innovation, learning and growth at iRoid Solutions."}
        backgroundImg={"/lifeAtIroid.png"}
      />
      <div className="container lAITop">
        <h1 className="twoColor text-center mb-5">
          We are a family,&nbsp;
          <span> That Works Together, Stays Together & Grows Together</span>
        </h1>
        <p className="para">
          iRoid Solutions is more than simply an IT firm; it is a family with a
          technology-based culture where we share each other's satisfaction and
          the joy of our accomplishments. In order to fill our daily lives and
          those of our family members with new energy, we celebrate festivals,
          organise events, and take part in functions. We are constantly looking
          for methods to make learning more enjoyable. We believe in learning
          with a fun ecosystem.
        </p>
      </div>
      <div className="trip container my-5 d-flex flex-column flex-lg-row align-items-start justify-content-between gap-5">
        <div className="tripLeft">
          <p>Roccia Adventure Trip</p>
          <p>Annual Award 2023</p>
          <p>Diwali</p>
          <p>Navratri</p>
          <p>Ganesh Chaturthi</p>
          <p>iRoid 9th Anniversary</p>
        </div>
        <div className="tripRight w-100 ">
          <div className="up d-flex align-items-center justify-content-center w-100">
            <img src={img} alt="" className="tripImg w-100" />
          </div>
          <div className="down pt-3 d-flex  align-items-center justify-content-between gap-3 w-100 overflow-scroll">
            {lifeAtiRoid.trip.tripimg.map((img, idx) => (
              <img
                src={img}
                alt=""
                key={idx}
                className="w-100"
                onClick={() => setCurrentTripIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      <EnquiryBanner
        line1={"Want to join iRoid squad?"}
        line2={"Start your journey with us..!!"}
      />
      <div className="container d-flex flex-column align-items-center">
        <div className="employeeTestimonials py-5 text-center gap-5">
          {employee.map((e, idx) => {
            return (
              <div
                className={
                  "employeeTestimonial my-4 py-3 px-5 position-relative" +
                  (idx === 2 ? " d-none d-lg-block" : "") +
                  (idx === 1 ? " d-none d-md-block" : "")
                }
                key={idx}
              >
                <div className="eImgContainer">
                  <img src={e.eImg} alt="" />
                </div>
                <p className="review position-relative">
                  <img src={"/etQuote.svg"} alt="" />
                  {e.eReview}
                  <img src={"/etQuote.svg"} alt="" />
                </p>
                <p className="eName">{e.eName}</p>
                <p className="ePosition">{e.ePosition}</p>
              </div>
            );
          })}
        </div>
        <div className="iwsButtons mb-3 d-flex align-items-center justify-content-between justify-content-lg-start gap-5">
          <button className="prevBtn" onClick={goToPreviousEmployee}>
            <img src={"/read more.png"} alt="read more" />
          </button>
          <button className="nextBtn" onClick={goToNextEmployee}>
            <img src={"/read more.png"} alt="read more" />
          </button>
        </div>
      </div>
      <Quote />
    </>
  );
};

export default LifeAtIroid;

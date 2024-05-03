"use client";

import QualityScroller from "@/components/QualityScroller";
import "./page.css";
import EnquiryBanner from "@/components/enquiryBanner";
import Quote from "@/components/quote";
import TopBg from "@/components/topBg";
import { lifeAtiRoid } from "@/constant/sample";
import Image from "next/image";
import { useState } from "react";
import Gallery from "./gallery";
import ContactUs from "@/components/contactUs";

const LifeAtIroid = () => {
  return (
    <>
      <div className="iRoid-team d-flex flex-column w-100">
        <TopBg
          state={"Life At Iroid"}
          text={
            "Experience innovation, learning and growth at iRoid Solutions."
          }
        />
      </div>
      <QualityScroller />
      <div className="container py-5 text-center">
        <div className="iroid-word my-2 my-md-5">
          <p className="fs-1 fw-semibold mw-1065 mx-auto">
            We Are A Family, That Works Together, Stays Together & Grows
            Together
          </p>
          <p className="fs-5 fw-medium text-00000099 mw-1265 mx-auto">
            iRoid Solutions is more than simply an IT firm; it is a family with
            a technology-based culture where we share each other's satisfaction
            and the joy of our accomplishments. In order to fill our daily lives
            and those of our family members with new energy, we celebrate
            festivals, organise events, and take part in functions. We are
            constantly looking for methods to make learning more enjoyable. We
            believe in learning with a fun ecosystem.
          </p>
        </div>
        <div className="gallery-container">
          <p className="fs-1 fw-semibold">Gallery</p>
          <p className="fs-5 fw-medium text-00000099 mw-1265 mx-auto">
            "Capturing Moments, Creating Memories. Explore Our Visual Journey."
          </p>
          <Gallery />
        </div>
        <ContactUs />
      </div>
    </>
  );
};

export default LifeAtIroid;

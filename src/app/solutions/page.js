"use client";

import TopBg from "@/components/topBg";
import "./index.css";
import EnquiryBanner from "@/components/enquiryBanner";
import WhyChoose from "@/components/whyChooseUs";
import Quote from "@/components/quote";

const Solutions = ({
  backgroundImg,
  topBGText,
  appName,
  project,
  projectImg,
  aboutProject1,
  aboutProject2,
  primeFeature,
  feature,
  bannerLine1,
  bannerLine2,
  pathName,
}) => {
  const mapFeature = feature.map((f, idx) => {
    return (
      <div
        className="featureContainer pt-4 py-2 wow animate__animated animate__fadeIn"
        key={idx}
        data-wow-delay="0.5s"
      >
        <p className="feature my-3 text-center text-md-start">
          {f.featureTitle}
        </p>
        {/* <div className="fetureImgContainer d-flex flex-wrap align-items-center justify-content-center justify-content-md-around justify-content-lg-evenly justify-content-xxl-between   gap-5"> */}
        <div className="fetureImgContainer gap-5">
          {f.feature.map((ftr, idx) => {
            return (
              <div className="card" key={idx}>
                <p className="card-title">{ftr.subTitle}</p>
                <img src={ftr.subImg} alt="feature" />
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <>
      <TopBg backgroundImg={backgroundImg} text={topBGText} state={appName} />
      <div
        className="solutionsSec container pt-5 d-flex text-center flex-column align-items-center justify-content-center wow animate__animated animate__fadeIn"
        data-wow-duration="0.5s"
      >
        <h1
          className="pt-3 pt-sm-5 m-0 overflow-hidden wow animate__animated animate__fadeInUp "
          data-wow-duration="0.5s"
        >
          <span>{project}</span> Development Services For Your Business:
        </h1>
        <p
          className="my-3 my-sm-5 para overflow-hidden wow animate__animated animate__fadeInUp "
          data-wow-duration="0.5s"
        >
          {aboutProject1}
        </p>
        <img
          src={projectImg}
          alt="project"
          className="wow animate__animated animate__fadeInUp"
          data-wow-duration="0.5s"
        />
        <p
          className="my-5 para wow animate__animated animate__fadeInUp"
          data-wow-duration="0.5s"
        >
          {aboutProject2}
        </p>
      </div>
      <div
        className="solutionsSec container pt-2 pb-5 wow animate__animated animate__fadeInUp"
        data-wow-duration="0.5s"
      >
        <h1
          className="m-0 text-center wow animate__animated animate__fadeIn"
          data-wow-delay="1s"
        >
          <span>Prime Features</span> For {primeFeature}
        </h1>
        {mapFeature}
      </div>
      <EnquiryBanner line1={bannerLine1} line2={bannerLine2} />
      <WhyChoose project={project + " App Development"} pathName={pathName} />
      <Quote />
    </>
  );
};

export default Solutions;

import { caseStudy } from "@/constant/sample";
import "./page.css";
import CsTypo from "@/pages/casestudy/cstypo";
import EnquiryBanner from "@/components/enquiryBanner";
import CsSwiper from "@/pages/casestudy/csSwiper";
import Quote from "@/components/quote";

const CaseStudyCom = ({ caseStudy }) => {
  console.log("caseStudy from com: ", caseStudy);
  return (
    <>
      <div className="container caseStudyContainer d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between gap-5">
        <div className="csLeft wow animate__animated animate__fadeInLeft">
          <div className=" d-flex align-items-center justify-content-between gap-3 cspContainer ">
            <img src={caseStudy.cpLogo} alt="" />~
            <p className="m-0">{caseStudy.productName} Case Study</p>
          </div>
          <h1 className="my-5 mb-3">{caseStudy.productName}</h1>
          <span>{caseStudy.about}</span>
          <div className="techs d-flex align-items-center justify-content-between">
            {caseStudy.technologies?.map((technology, idx) => (
              <img src={technology} alt="" key={idx} />
            ))}
          </div>
        </div>
        <div className="csRight d-flex align-items-center justify-content-center w-100 wow animate__animated animate__fadeInRight">
          <img className="w-100" src={caseStudy.productImg} alt="" />
        </div>
      </div>
      <div
        className="container csOverview my-5 wow animate__animated animate__fadeIn"
        data-wow-delay="0.5s"
      >
        <h1 className="mb-3 csSecTitle">Project Overview</h1>
        {caseStudy.projectOverview?.map((overview, idx) => (
          <p
            key={idx}
            className="wow animate__animated animate__fadeIn"
            data-wow-delay="0.5s"
          >
            {overview}
          </p>
        ))}
      </div>
      <div className="container csCRequirment my-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-3 csSecTitle">Client’s Requirment</h1>
        {caseStudy.clientRequirment?.map((requirment, idx) => (
          <p
            key={idx}
            className="wow animate__animated animate__fadeIn"
            data-wow-delay="0.5s"
          >
            {requirment}
          </p>
        ))}
      </div>
      <div className="container csFOP my-5 pt-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-5 csSecTitle">Features Of Project</h1>
        <div className="fop">
          {caseStudy.featureOfProject?.map((feature, idx) => (
            <p
              key={idx}
              className="wow animate__animated animate__fadeIn"
              data-wow-delay="0.5s"
            >
              {feature}
            </p>
          ))}
        </div>
      </div>
      <div className="csPortfolio container py-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-5 csSecTitle">Portfolio</h1>
        <br />
        {/* <div className="csPortfolio container d-flex flex-wrap align-items-center justify-content-between gap-5 w-50"> */}
        {caseStudy.app !== "android" ? (
          <>
            {caseStudy.portfolio?.map((portfolio, idx) => (
              <div
                className={`d-flex ${
                  idx % 2 === 0
                    ? "justify-content-start"
                    : "justify-content-end"
                } w-100 wow animate__animated animate__fadeIn`}
                data-wow-delay="0.5s"
                key={idx}
              >
                <img src={portfolio} alt="" className="w-50" />
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="androidPortfolio gap-5">
              {caseStudy.portfolio.map((portfolio, idx) => (
                <div
                  className="w-100 wow animate__animated animate__fadeIn"
                  data-wow-delay="0.5s"
                  key={idx}
                >
                  <img src={portfolio} alt="" className="" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <CsTypo
        csFontFamily={caseStudy.fontFamily}
        colorPallete={caseStudy.colorPallete}
      />
      {/* <div className="csTypo container mt-5 py-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-5 csSecTitle">Typography & Color pallete</h1>
        <div className="csTypoContainer d-flex flex-wrap flex-md-nowrap gap-5 align-items-center align-items-lg-start justify-content-center justify-content-md-between ">
          <div className="csTypoLeft">
            <h1 style={{ fontFamily: fontFamily }}>Aa</h1>
            <span className="f48 mb-3" style={{ fontFamily: fontFamily }}>
              {fontFamily}
            </span>
            <p style={{ fontFamily: fontFamily }}>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww
              Xx Yy Zz
            </p>
          </div>
          <div className="csTypoRight d-flex gap-3 gap-sm-5 align-items-center justify-content-between ">
            {caseStudy.colorPallete.map((colorPallete, idx) => (
              <div className="colorPalleteContainer" key={idx}>
                <div
                  className="colorPallete mb-3 w-100"
                  style={{ background: colorPallete }}
                ></div>
                <span className="" style={{ fontFamily: fontFamily }}>
                  {colorPallete}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="techStackContainer container my-5 py-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-5 csSecTitle">Tech Stack</h1>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-5">
          {caseStudy.techStack?.map((techStack, idx) => (
            <div
              className="techImg d-flex flex-column align-items-center justify-content-center gap-3 wow animate__animated animate__fadeIn"
              data-wow-delay="0.5s"
              key={idx}
            >
              <div
                className="techStack d-flex flex-column align-items-center justify-content-center gap-3"
                key={idx}
              >
                <img src={techStack.img} alt={techStack.tech} />
                <p>{techStack.tech}</p>
              </div>
              <p className="techName">{techStack.tech}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="csResult container py-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-3 csSecTitle">Results</h1>
        <p className="my-5">
          Klapty is a rapidly growing community that already count more than
          50,000 virtual tours lovers from +180 countries.
        </p>
        <EnquiryBanner
          line1={"Share your idea or requirement with our experts."}
          line2={"Let’s connect."}
          textAlign={"left"}
        />
      </div>
      <div className="csOtherCasestudies container py-5 wow animate__animated animate__fadeIn">
        <h1 className="mb-5 csSecTitle">Other Casestudies</h1>
        <CsSwiper otherCasestudies={caseStudy.otherCasestudies} />
      </div>
      <Quote />
    </>
  );
};

export default CaseStudyCom;

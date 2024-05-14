import ServiceAndTech from "@/components/services and tech";
import "./page.css";
import TopBg from "@/components/topBg";
import HtmlContent from "@/components/htmlContent";
import Image from "next/image";
import Process from "@/components/home/process";
import NumberFacts from "@/components/number-facts";
import WhyHireUs from "@/components/why-hire-us";
import ContactUs from "@/components/contactUs";
import GetService from "./getService";

const Service = ({ params }) => {
  const { service } = params;
  const TopbgTitle = service.replace(/-/g, " ");

  return (
    <>
      <TopBg state={TopbgTitle} text={`about our ${TopbgTitle} service`} />
      <div className="container my-5">
        <p className="fs-1 fw-semibold text-capitalize text-center">
          Why Work With Our {TopbgTitle.replace(/development/g, "Developers")}
          {!TopbgTitle.includes("development") && " Developers"}?
        </p>
        <p className="fs-5 fw-medium text-center opacity-50">
          At iRoid Solutions, we live and breathe mobile apps
        </p>
        <GetService slug={service} />
      </div>
      <Process />
      <div className="container d-flex flex-column align-items-center py-5">
        <h3 className="fs-4 fw-semibold">Who We Are</h3>
        <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
          Our Amazing Facts
        </p>
        <p
          className="mb-5 f20 fs-5 fw-medium text-center wow animate__animated animate__fadeInRight"
          style={{ maxWidth: "750px" }}
        >
          Our self-explanatory statistics are a testament to our global reach
          and unwavering dedication to excellence.
        </p>
        <NumberFacts />
      </div>
      <WhyHireUs />
      <ContactUs />
    </>
  );
};

export default Service;

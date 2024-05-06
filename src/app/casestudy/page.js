import Image from "next/image";
import CaseStudies from "./caseStudies";
import "./page.css";
import TopBg from "@/components/topBg";
import ContactUs from "@/components/contactUs";
// import CaseStudyHomePage from "@/pages/casestudy/caseStudyHomePage";

const CaseStudy = () => {
  return (
    <>
      <TopBg
        state={"Check Our Awesome Case Studies"}
        text={
          "iRoid proudly secures its position among India's top 100 IT solution companies, as recognized in a 2019 online survey. Specializing in web development and software solutions, our portfolio showcases excellence in developer, graphic design, and UI/UX portfolios. Explore iRoid Solutions for innovative IT solutions."
        }
      />

      <div className="mw-1270 mx-auto p-0 pt-3 pt-md-5 caseStudyHomePage">
        <p className="text-center fs-1 fw-semibold">
          Case Studies / Success Stories
        </p>
        <p className="text-center fs-5 fw-medium opacity-75 text-00000099">
          "Unlocking Potential: Real Stories of Success. Learn, Inspire,
          Succeed."
        </p>
        {/* <CaseStudyHomePage /> */}
      </div>
      <CaseStudies />
      <div className="mx-2 mt-md-5">
        <div className="mw-1270 mx-auto p-3 p-md-5 rounded-5 overflow-hidden w-u-sp">
          <div className="d-flex align-items center justify-content-center">
            <Image
              className="talk-emoji mb-2 mb-lg-4"
              src={"/talk-emoji.png"}
              alt="emoji"
              width={1200}
              height={150}
            />
          </div>
          <p className="fs-1 fw-semibold text-center">What makes us special?</p>
          <div className="point mx-2 mx-md-5">
            <p className="mb-0 fs-6 fw-semibold text-005490">
              1. Top-notch expertise:
            </p>
            <p className="fs-6 fw-medium text-00000099">
              We have skilled developers, designers, and UI/UX specialists ready
              to tackle your toughest challenges.
            </p>
          </div>
          <div className="point mx-2 mx-md-5">
            <p className="mb-0 fs-6 fw-semibold text-005490">
              2. Proven track record:
            </p>
            <p className="fs-6 fw-medium text-00000099">
              Our award-winning projects showcase our dedication to excellence
              and innovation.
            </p>
          </div>
          <div className="point mx-2 mx-md-5">
            <p className="mb-0 fs-6 fw-semibold text-005490">
              3. Wide range of services:
            </p>
            <p className="fs-6 fw-medium text-00000099">
              From web development to graphic design, we offer a comprehensive
              suite of solutions to meet your needs.
            </p>
          </div>
          <div className="point mx-2 mx-md-5">
            <p className="mb-0 fs-6 fw-semibold text-005490">
              4. Trusted partner:
            </p>
            <p className="fs-6 fw-medium text-00000099">
              We're a reliable and respected name in the IT industry, dedicated
              to your success.
            </p>
          </div>
          <p className="fs-1 fw-bolder text-center text-005490 mt-5">
            Join us!
          </p>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default CaseStudy;

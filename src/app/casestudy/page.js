import Image from "next/image";
import CaseStudies from "./caseStudies";
import "./page.css";
import TopBg from "@/components/topBg";
import ContactUs from "@/components/contactUs";
import WMUSpcial from "@/components/what-make-us-special";
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
      <WMUSpcial />
      <ContactUs />
    </>
  );
};

export default CaseStudy;

import "./page.css";
import TopBg from "@/components/topBg";
import CaseStudyHomePage from "@/pages/casestudy/caseStudyHomePage";

const CaseStudy = () => {
  return (
    <>
      <TopBg
        state={"Case Studies"}
        text={"Discovering Success Stories through Deep Dive into Projects"}
      />

      <div className="container p-0 py-5 caseStudyHomePage">
        <h1 className="twoColor text-center">
          In-Depth Case Studies:
          <span> Exploring Real-World Solutions</span>
        </h1>
        <CaseStudyHomePage />
      </div>
    </>
  );
};

export default CaseStudy;

"use client";

import { caseStudyHomePage } from "@/constant/sample";
import { useRouter } from "next/navigation";

const CaseStudy = () => {
  const router = useRouter();
  const caseStudyData = caseStudyHomePage;
  return (
    <div className="caseStudiesContainer pb-5 gap-5 overflow-hidden">
      {caseStudyData.map((cs, idx) => (
        <div
          className="otherCaseStudy p-3 my-5 d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-center gap-4 position-relative  wow animate__animated animate__fadeInDown"
          style={{ background: `url(${cs.bgImg})` }}
          key={idx}
          onClick={() => router.push(`casestudy/${cs.id}`)}
        >
          <img src={cs.portfolioImg} alt={cs.productName} className="ocsLeft" />
          <div className="ocsRight">
            <img src={cs.productLogo} alt={cs.productName} />
            <p>{cs.productName}</p>
          </div>
          <div className="ocsTech position-absolute p-4 pe-none">
            <p className="text-black">{cs.productDevelopmenent}</p>
            <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between gap-2">
              {cs.usedTech.map((tech, idx) => (
                <div key={idx} className="usedTech w-100 text-nowrap">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudy;

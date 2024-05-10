import axiosApi from "@/api/axiosConfig";
import CaseStudy from "@/components/caseStudy/index-not-used";

const CaseStudyHomePage = async () => {
  try {
    // const response = await axiosApi.get("getCaseStudies");
    // const caseStudy = response.data;

    return <CaseStudy caseStudyData={[]} />;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return <CaseStudy caseStudyData={[]} />;
  }
};

export default CaseStudyHomePage;

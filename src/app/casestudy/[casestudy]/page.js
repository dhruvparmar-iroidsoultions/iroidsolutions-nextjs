import { caseStudy } from "@/constant/sample";
import "./page.css";
import CsTypo from "@/pages/casestudy/cstypo";
import EnquiryBanner from "@/components/enquiryBanner";
import CsSwiper from "@/pages/casestudy/csSwiper";
import Quote from "@/components/quote";
import CaseStudyCom from "./casestudy";
import axiosApi from "@/api/axiosConfig";

const CaseStudy = async ({ params }) => {
  try {
    const response = await axiosApi.get(
      `case-study/detail/${params.casestudy}`
    );
    const casestudy = response.data.data;
    return <CaseStudyCom caseStudy={casestudy} />;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return <CaseStudyCom caseStudy={[]} />;
  }
};

export default CaseStudy;

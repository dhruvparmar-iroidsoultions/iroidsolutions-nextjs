import axiosApi from "@/api/axiosConfig";
import FAQs from "@/components/home/faqs";

const FetchFAQs = async ({ show, btn }) => {
  try {
    // const response = await axiosApi.get("getFAQs");
    // const data = response.data;

    return <FAQs faqs={[]} show={show} btn={btn} />;
  } catch (error) {
    console.error(error);
    return <FAQs faqs={[]} show={show} btn={btn} />;
  }
};

export default FetchFAQs;

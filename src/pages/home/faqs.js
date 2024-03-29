import axiosApi from "@/api/axiosConfig";
import FAQs from "@/components/home/faqs";

const FetchFAQs = async () => {
  try {
    const response = await axiosApi.get("getFAQs");
    const data = response.data;

    return <FAQs faqs={data} />;
  } catch (error) {
    console.error(error);
    return <FAQs faqs={[]} />;
  }
};

export default FetchFAQs;

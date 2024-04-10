import axiosApi from "@/api/axiosConfig";
import Button from "@/components/button";
import Quote from "@/components/quote";
import TopBg from "@/components/topBg";
import FAQsCom from "@/components/home/faqs";
import FetchBlogs from "@/pages/home/blogs";

const FetchFAQs = async ({ show, btn }) => {
  try {
    const response = await axiosApi.get("faqs");
    const data = response.data.data;
    return <FAQsCom faqs={data} show={show} btn={btn} />;
  } catch (error) {
    console.error(error);
    return <FAQsCom faqs={[]} show={show} btn={btn} />;
  }
};

const FAQs = () => {
  return (
    <>
      <TopBg
        backgroundImg={"/faqTopBg.png"}
        state={"FAQs"}
        text={"Guided by values and driven by our passion"}
      />
      <div className="container">
        <FetchFAQs show={false} btn={false} />
        <h1 className="twoColor text-center my-5">
          Latest <span>Blogs</span>
        </h1>
        {/* <div className="blogs d-flex flex-column flex-md-row flex-wrap flex-lg-nowrap gap-5 align-items-center justify-content-center justify-content-lg-between my-5"> */}
        <FetchBlogs show={false} />
        {/* </div> */}
        <Quote />
      </div>
    </>
  );
};

export default FAQs;

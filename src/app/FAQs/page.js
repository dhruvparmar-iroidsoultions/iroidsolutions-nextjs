import TopBg from "@/components/topBg";
import GetFaqs from "./getFAQs";
import ContactUs from "@/components/contactUs";

const FAQs = () => {
  return (
    <>
      <TopBg
        backgroundImg={"/faqTopBg.png"}
        state={"FAQs"}
        text={"Guided by values and driven by our passion"}
      />
      <div className="container py-2 py-md-5">
        <GetFaqs />
      </div>
      <ContactUs />
    </>
  );
};

export default FAQs;

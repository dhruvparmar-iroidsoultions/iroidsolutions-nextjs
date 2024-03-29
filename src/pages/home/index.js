import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
import GetVideoTestimonial from "./videoTestimonial";
import HeroSection from "@/components/home/heroSection";
import CaseStudy from "@/components/home/caseStudy";
import ClientTestimonial from "./clientTestimonial";
import Portfolio from "./portfolio";
import Numbers from "@/components/home/numbers";
import OurSkills from "@/components/home/ourSkills";
import YTslides from "./ytSlides";
import FetchFAQs from "./faqs";
import FetchBlogs from "./blogs";
import ContactUs from "./contactUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <GetVideoTestimonial />
      <CaseStudy />
      <ClientTestimonial />
      <Portfolio />
      <Numbers />
      <OurSkills />
      <YTslides />
      <FetchFAQs />
      <FetchBlogs />
      <ContactUs />
    </>
  );
};

export default Home;

import "./page.css";
import axiosApi from "@/api/axiosConfig";
// import HeroSection from "@/components/home/heroSection";
import VideoTestimonial from "@/components/VideoTestimonialComponent";
import CaseStudy from "@/components/caseStudy";
import TestimonialReview from "@/components/home/testimonialReview";
import PortfolioHome from "@/components/home/portfolio";
import Numbers from "@/components/home/numbers";
import OfcEnviroment from "@/components/home/ofcEnviroment";
import FAQs from "@/components/home/faqs";
import Blogs from "@/components/home/blogs";
import ContactUs from "@/components/contactUs";
import HeroSection from "@/components/home/newHero";
import Quality_and_award from "@/components/home/quality_and_award";
import Map from "@/components/home/world_map";
import ScrollerLine from "@/components/home/project-scroller";
import Process from "@/components/home/process";
import Services from "@/components/home/services";
import TechStacks from "@/components/home/tech-stacks";
import ListedPlatforms from "@/components/home/scrolling-plateforms";
import IndustriesWeServe from "@/components/home/industries-we-serve";

export default async function Home() {
  try {
    const response = await axiosApi.get("index");
    const data = response.data.data;
    return (
      <main>
        {/* <HeroSection /> */}
        <HeroSection />
        <Quality_and_award />
        <ScrollerLine />
        {/* <ListedPlatforms /> */}
        <VideoTestimonial
          videoTestimonialArray={data.video_testimonials}
          isHomePage={true}
        />
        <CaseStudy
          casestudy={data.case_study}
          containerTitle={"Case Study"}
          containerSubtitle={
            "Creating Success Stories for Startups to Global Brands."
          }
        />
        <TestimonialReview clientTestimonial={data.testimonials} />
        <PortfolioHome portfolio={[]} />
        <Map />
        {/* <ScrollerLine /> */}
        {/* <Numbers /> */}
        {/* <OurSkills /> */}
        <OfcEnviroment slides={data.our_office_environment} />
        <Process />
        <Services />
        <TechStacks />
        <IndustriesWeServe />
        <h4 className="fw-semibold my-5 w-100 text-center">Listed Platforms</h4>
        <ListedPlatforms />
        <FAQs faqs={data.faqs} />
        <Blogs blogs={data.blogs} />
        <ContactUs />
      </main>
    );
  } catch (error) {
    console.error(error);
    return (
      <main>
        {/* <HeroSection /> */}
        <HeroSection />
        <Quality_and_award />
        <ListedPlatforms />
        <Map />
        <ScrollerLine />
        <Numbers />
        <Process />
        <Services />
        {/* <OurSkills /> */}
        <ListedPlatforms />
        <ContactUs />
      </main>
    );
  }
}

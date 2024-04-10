import styles from "./page.module.css";
import "./page.css";
import HomePage from "@/pages/home/";
import axiosApi from "@/api/axiosConfig";
import HeroSection from "@/components/home/heroSection";
import VideoTestimonial from "@/components/home/videoTestimonial";
import CaseStudy from "@/components/home/caseStudy";
import TestimonialReview from "@/components/home/testimonialReview";
import PortfolioHome from "@/components/home/portfolio";
import Numbers from "@/components/home/numbers";
import OurSkills from "@/components/home/ourSkills";
import OfcEnviroment from "@/components/home/ofcEnviroment";
import FAQs from "@/components/home/faqs";
import Blogs from "@/components/home/blogs";
import ContactUs from "@/components/home/contactUs";

export default async function Home() {
  try {
    const response = await axiosApi.get("index");
    const data = response.data.data;
    return (
      <main className={styles.main}>
        <HeroSection />
        <VideoTestimonial videoTestimonialArray={data.video_testimonials} />
        <CaseStudy casestudy={data.case_study} />
        <TestimonialReview clientTestimonial={data.testimonials} />
        <PortfolioHome portfolio={data.portfolio || []} />
        <Numbers />
        <OurSkills />
        <OfcEnviroment slides={data.our_office_environment} />
        <FAQs faqs={data.faqs} />
        <Blogs blogs={data.blogs} />
        <ContactUs />
      </main>
    );
  } catch (error) {
    return console.error(error);
  }
}

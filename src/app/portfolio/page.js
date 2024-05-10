import TopBg from "@/components/topBg";
import "./page.css";
import WMUSpcial from "@/components/what-make-us-special";
import ContactUs from "@/components/contactUs";
import GetPortfolio from "./getPortfolio";

const Portfolio = () => {
  const removeTags = (html) => {
    const cleanText = html?.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  return (
    <>
      <TopBg
        state={"Check Our Awesome Portfolio"}
        text={
          "iRoid proudly secures its position among India's top 100 IT solution companies, as recognized in a 2019 online survey. Specializing in web development and software solutions, our portfolio showcases excellence in developer, graphic design, and UI/UX portfolios. Explore iRoid Solutions for innovative IT solutions."
        }
      />
      <div className="container py-5 portfolio-container">
        <p className="fs-1 fw-semibold text-center">Our Work</p>
        <p className="fs-5 second-text mx-auto fw-medium opacity-50 text-center">
          "At iRoid Solutions, our mission is to continuously create value for
          our customers by fostering innovation, nurturing collaboration, and
          relentlessly pursuing excellence across every facet of our operations.
          Here's a glimpse into our portfolio of achievements."
        </p>
        <GetPortfolio />
        <div className="text-center px-2 py-3 py-lg-5 my-3 my-lg-5">
          <p className="fs-1 fw-semibold">
            Welcome to iRoid Solutions, India's leading IT Company!
          </p>
          <p className="fs-4 fw-medium text-00000099 mw-1200 mx-auto">
            We're passionate about creating cutting-edge software and solutions
            that help our clients thrive. Explore our portfolio website to see
            what we can do for you!
          </p>
        </div>
        <WMUSpcial />
      </div>
      <ContactUs />
    </>
  );
};

export default Portfolio;

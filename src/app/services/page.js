import ServiceCard from "@/components/service-card";
import TopBg from "@/components/topBg";
import "./page.css";
import ContactUs from "@/components/contactUs";
import OurStackComponent from "@/components/our-stack";
import GetServices from "./getServices";

const Services = () => {
  const services = [
    {
      id: "1",
      img: "/mobile-development.png",
      service: "Mobile App Development",
      title:
        "Mobile app development is the creation of software applications for smartphones and tablets.",
      subtitle:
        "Mobile app development is a vast field with many specializations. There are different types of apps you can create.",
      list: [
        {
          title: "Android App Development",
          link: "/services/android-app-development",
        },
        { title: "iOS App Development", link: "/services/iOS-app-development" },
        {
          title: "Cross-platform App Development Using Flutter",
          link: "/services/cross-platform-app-development-using-flutter",
        },
        {
          title: "Mobile App Support & Maintenance",
          link: "/services/mobile-app-support-and-maintenance",
        },
      ],
    },
    {
      id: "2",
      img: "/web-development.png",
      service: "Web Development",
      title: "Greatest web design and development using top technology.",
      subtitle:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      list: [
        {
          title: "Landing Page (1-Page Website)",
          link: "/services/landing-page",
        },
        {
          title: "Progressive Web App Development (PWA)",
          link: "/services/progressive-web-app-development",
        },
        { title: "Web App Development", link: "/services/web-app-development" },
        {
          title: "Web Application Support & Maintenance",
          link: "/services/web-application-support-and-maintenance",
        },
        { title: "Web Design", link: "/services/web-design" },
      ],
    },
    {
      id: "3",
      img: "/custom-development.png",
      service: "Custom Software Development",
      title: "We provide services for developing customized software..",
      subtitle:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      list: [
        { title: "MVP Development", link: "/services/mvp-development" },
        {
          title: "Full Stack Development",
          link: "/services/full-stack-development",
        },
      ],
    },
    {
      id: "4",
      img: "/AI-ML development.png",
      service: "AI & ML",
      title: "Harnessing AI & ML to drive business transformation.",
      subtitle:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      list: [
        {
          title: "Artificial Intelligence and Machine Learning",
          link: "/services/artificial-intelligence-and-machine-learning",
        },
      ],
    },
  ];

  return (
    <>
      <TopBg
        state={"Our IT Services"}
        text={"Managed IT services for your industry"}
      />
      <div className="container text-center pt-5 ">
        <h1 className="fw-semibold py-3 pb-md-5">
          What Services We’re Offering
        </h1>
        {console.log("console before getservice")}
        <GetServices />
        {/* {services.map((service) => (
          <div
            className="sevice-card-container p-3 my-3 w-100 rounded-5"
            key={service.id}
          >
            <ServiceCard info={service} id={service.id} />
          </div>
        ))} */}
        <div className="pt-3 pt-md-5">
          <p className="fs-1 fw-bolder mt-5">Our Tech Stacks</p>
          <OurStackComponent categoryBgClass={"bg-e7ecf1"} />
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Services;

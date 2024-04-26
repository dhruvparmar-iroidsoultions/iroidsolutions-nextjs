import ServiceCard from "@/components/service-card";
import TopBg from "@/components/topBg";
import "./page.css";
import ContactUs from "@/components/contactUs";

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
        "Android App Development",
        "iOS App Development",
        "Cross-platform App Development Using Flutter",
        "Mobile App Support & Maintenance",
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
        "Landing Page (1-Page Website)",
        "Progressive Web App Development (PWA)",
        "Web App Development",
        "Web Application Support & Maintenance",
        "Web Design",
      ],
    },
    {
      id: "3",
      img: "/custom-development.png",
      service: "Custom Software Development",
      title: "We provide services for developing customized software..",
      subtitle:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      list: ["MVP Development", "Full Stack Development"],
    },
    {
      id: "4",
      img: "/AI-ML development.png",
      service: "AI & ML",
      title: "Harnessing AI & ML to drive business transformation.",
      subtitle:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      list: ["Artificial Intelligence and Machine Learning"],
    },
  ];

  return (
    <>
      <TopBg
        state={"Our IT Services"}
        text={"Managed IT services for your industry"}
      />
      <div className="container text-center py-5 ">
        <h1 className="fw-semibold py-3 py-md-5">
          What Services We’re Offering
        </h1>
        {services.map((service) => (
          <div
            className="sevice-card-container p-3 my-3 w-100 rounded-5"
            key={service.id}
          >
            <ServiceCard info={service} id={service.id} />
          </div>
        ))}
      </div>
      <ContactUs />
    </>
  );
};

export default Services;

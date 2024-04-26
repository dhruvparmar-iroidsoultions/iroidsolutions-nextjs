import Button from "@/components/button";
import IndustryCard from "@/components/industry-card";
import TopBg from "@/components/topBg";

const Industries = () => {
  const industries = [
    {
      id: 0,
      img: "/industry-education.png",
      industry: "Education Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["Education app", "Online Learning / Tutor app", "LMS app"],
    },
    {
      id: 1,
      img: "/industry-fintech.png",
      industry: "Fintech Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["Finance app"],
    },
    {
      id: 2,
      img: "/industry-healthcare.png",
      industry: "Healthcare & Fitness Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [
        "Telemedicine app",
        "Meditation app",
        "Yoga & Fitness app",
        "Appointment booking app",
      ],
    },
    {
      id: 3,
      img: "/industry-lifestyle.png",
      industry: "Lifestyle Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [" Delivery app", "OnDemand app", " Task app", "Pet care app"],
    },
    {
      id: 4,
      img: "/industry-social-media.png",
      industry: "Social Media & Entertainment Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [
        "Social Media app",
        "Messaging app",
        "OTT app",
        "Dating app",
        "Events app",
        "Video streaming app",
        "Music streaming app",
        "Photo/Video editing app",
        "Beauty app",
      ],
    },
    {
      id: 5,
      img: "/industry-real-estate.png",
      industry: "Real Estate Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["Real Estate app"],
    },
    {
      id: 6,
      img: "/industry-retail.png",
      industry: "Retail & E-commerce Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["E-commerce Shopping app", "Marketplace app"],
    },
    {
      id: 7,
      img: "/industry-sports.png",
      industry: "Sports Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["Sports app"],
    },
    {
      id: 8,
      img: "/industry-transport.png",
      industry: "Transport & Logistics Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [
        "Ride-sharing (Taxi) app",
        "Transport & Logistics app (Courier and Package delivery)",
        "Map / GPS Location app",
      ],
    },
    {
      id: 9,
      img: "/industry-travel.png",
      industry: "Travel & Hospitality Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["Travel app", "Hotel booking app"],
    },
    {
      id: 10,
      img: "/industry-energy.png",
      industry: "Energy & Power Generation Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["Solar app"],
    },
    {
      id: 11,
      img: "/industry-ai-ar.png",
      industry: "AI and AR Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["AI (Artificial Intelligence) app", "AR (Augmented reality) app"],
    },
    {
      id: 12,
      img: "/industry-business.png",
      industry: "Business Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: ["ERP/CRM app"],
    },
    {
      id: 13,
      img: "/industry-other.png",
      industry: "Other Industry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];
  return (
    <>
      <TopBg
        state={"Industries We Serve"}
        text={
          "Empowering industries with forward-thinking solutions for transformative growth."
        }
      />
      <div className="container text-center py-5 ">
        <h1 className="fw-semibold py-3 py-md-5">
          What Services We’re Offering
        </h1>

        {industries.map((service) => (
          <div
            className="sevice-card-container p-3 my-3 w-100 rounded-5"
            key={service.id}
          >
            <IndustryCard info={service} id={service.id} />
          </div>
        ))}
      </div>
      <div className="container pt-3 pt-md-5">
        <h1 className="text-center fw-semibold mt-3 my-md-4">
          "Bring Your Ideas to Life With Us."
        </h1>
        <p className="mb-2 mx-auto f20 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Tell us more about your project—we're here to listen and support your
          vision
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <Button text={"Get in Touch"} linkPath={"/contact"} />
        </div>
      </div>
    </>
  );
};

export default Industries;

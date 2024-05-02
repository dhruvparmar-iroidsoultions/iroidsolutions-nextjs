import TopBg from "@/components/topBg";
import "./page.css";
import IndustryCard from "@/components/industry-card";
import ContactUs from "@/components/contactUs";

const EngagementModel = () => {
  const model1 = [
    {
      img: "/model1.png",
      title: "Transparency",
      subtitle:
        "Get in all our workflows, processes, interactions and delivery updates.",
    },
    {
      img: "/model2.png",
      title: "Flexibility",
      subtitle:
        "We tweak our engagement models to suit and fix your business needs..",
    },
    {
      img: "/model3.png",
      title: "Cost Effective",
      subtitle:
        "Blending optimized costing with an extended managed team for pricing effectiveness.",
    },
    {
      img: "/model4.png",
      title: "Quality",
      subtitle:
        "Key element to provide utmost attention to every stage of the process of delivery.",
    },
  ];

  const engagementModels = [
    {
      img: "/engagement-model-1.png",
      industry: "Fixed Price",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [
        "The fixed model has exact budget defined in advance",
        "Billing is based on milestones completed",
        "Change in scope needs client approval, ensuring budget never exceeds",
      ],
    },
    {
      img: "/engagement-model-2.png",
      industry: "Dedicated Hiring Model",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [
        "Best model for clients with in-house staff to manage the projects",
        "Get dedicated developers assigned to your project",
        "Billing on fixed or hourly basis",
        "Virtual employees working exclusively for your team",
      ],
    },
    {
      img: "/engagement-model-3.png",
      industry: "Time and Material",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      list: [
        "Best option when the project scope is constantly changing",
        "Option for client to make hourly, daily, weekly or monthly payment",
        "Flexible model, allowing client to experiment with new activity and requirements",
      ],
    },
  ];

  return (
    <>
      <TopBg
        state={"Engagement Model"}
        text={
          "Reasonable and prudent pricing strategies to provide total value for the money."
        }
      />
      <div className="container pt-5 text-center">
        <p className="fs-1 fw-semibold">iRoid Engagement Models</p>
        <p className="fs-5 fw-medium text-00000099 second-text mx-auto">
          iRoid provides a range of engagement options because we emphasise
          meeting our clients' individual needs and providing them with the best
          possible value for their money. Mutual interests are taken into
          consideration while creating our pricing models. We have a set of open
          pricing policies in addition to the "right" combination of components
          that meet industry requirements in order to help our clients.
        </p>
        <div className="model-q my-3 my-lg-5">
          {model1.map((l, idx) => (
            <div
              className={`p-2 p-md-4 d-flex flex-column align-items-center justify-content-center gap-1 model-card bg-white h-100`}
              key={idx}
            >
              <div className="py-2">
                <img src={l.img} alt="" />
              </div>
              <p className="fs-5 fw-semibold">{l.title}</p>
              <p className="fs-5 fw-medium opacity-50">{l.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="pt-5">
          <p className="fs-1 fw-semibold">Effective Engagement Models</p>
          <p className="fs-5 fw-medium text-00000099 second-text mx-auto mb-3 mb-lg-5">
            Ensuring success, agility and growth of businesses with flexible
            Engagement models.
          </p>
          {engagementModels.map((model, idx) => (
            <div
              className="sevice-card-container p-3 my-3 w-100 rounded-5"
              key={model.id}
            >
              <IndustryCard info={model} id={idx} hoverdtitle={false} />
            </div>
          ))}
        </div>
      </div>

      <ContactUs />
    </>
  );
};

export default EngagementModel;

import IndustryCard from "@/components/industry-card";
import TopBg from "@/components/topBg";
import "./page.css";
import ContactUs from "@/components/contactUs";

const BecomePartner = () => {
  const partnershipPoints = [
    {
      id: 1,
      industry: "Become a Sales and Marketing Partner",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      img: "/partner-1.svg",
    },
    {
      id: 2,
      industry: "Become a Referral Partner",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      img: "/partner-2.svg",
    },
    {
      id: 3,
      industry: "Affiliate Partnership",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      img: "/partner-3.svg",
    },
  ];
  return (
    <>
      <TopBg
        state={"Become a Partner"}
        text={
          "Interested in becoming an iRoid partner with app developers or a website development partnership? Here’s what we offer:"
        }
      />
      <div className="container py-5">
        {partnershipPoints.map((model, idx) => (
          <div
            className="sevice-card-container p-3 my-3 w-100 rounded-5"
            key={model.id}
          >
            <IndustryCard info={model} id={idx} hoverdtitle={false} />
          </div>
        ))}
      </div>
      <div className="our-promise py-3 py-md-5 text-center">
        <h3 className="fs-3 fw-bolder text-005490 mb-4">Our Promise</h3>
        <div className="d-flex flex-wrap flex-md-column flex-lg-row align-items-center justify-content-between gap-2 mx-auto px-2 py-3">
          <p className="bg-white py-2 px-3 rounded-2 fs-6 fw-semibold">
            <span>A growth - focused collaboration</span>
          </p>
          <p className="bg-white py-2 px-3 rounded-2 fs-6 fw-semibold">
            <span>Always a ‘Client First’ approach</span>
          </p>
          <p className="bg-white py-2 px-3 rounded-2 fs-6 fw-semibold">
            <span>Working with seasoned professionals</span>
          </p>
          <p className="bg-white py-2 px-3 rounded-2 fs-6 fw-semibold">
            <span>
              Completely satisfactory and ‘Go Beyond The Extra Mile’ support
              service
            </span>
          </p>
          <p className="bg-white py-2 px-3 rounded-2 fs-6 fw-semibold">
            <span>100% transparent prices and policies</span>
          </p>
        </div>
        <p className="fs-2 fw-bolder py-1 px-2 text-center">
          Join One Of Our Programs Today And{" "}
          <span className="text-005490">Let’s Collaborate!</span>
        </p>
        <p className="text-center">
          <img src="/partner-page-star.png" alt="" />
        </p>
      </div>
      <ContactUs />
    </>
  );
};

export default BecomePartner;

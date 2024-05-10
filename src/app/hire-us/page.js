import Numbers from "@/components/home/numbers";
import TopBg from "@/components/topBg";
import WhyHireUs from "@/components/why-hire-us";
import Image from "next/image";
import "./page.css";
import Button from "@/components/button";
import ContactUs from "@/components/contactUs";

const HireUs = () => {
  const priceWisePlan = [
    {
      id: 1,
      payoutTime: "HOURLY",
      price: "$$$",
      timeLine: "Per Hour",
      feature: ["As Needed", "Weekly Billing", "Daily Reporting"],
    },
    {
      id: 2,
      payoutTime: "MONTHLY",
      price: "$$$",
      timeLine: "Per Month",
      feature: [
        "160 Hours",
        "Monthly Billing",
        "Daily Reporting",
        "Money Back Guarantee**",
      ],
    },
    {
      id: 3,
      payoutTime: "FIXED QUOTE",
      price: "$$$",
      timeLine: "Per Milestone",
      feature: ["Hours as Needed", "Milestone Billing", "Daily Reporting"],
    },
  ];

  const hireUsTalkPoints = [
    {
      title:
        "Are you in search of a dedicated team of mobile and web developers to turn your digital vision into reality?",
      substitle:
        "Look no further than iRoid Solutions. We pride ourselves on being a team of expert developers passionate about ensuring the success of businesses online.",
    },
    {
      title: "Hire iRoid Solutions for your development needs,",
      substitle:
        "And benefit from our proven track record of exceptional client retention. Our commitment to delivering quality work at reasonable prices has garnered the loyalty of numerous satisfied clients.",
    },
    {
      title: "At iRoid Solutions,",
      substitle:
        "We recognize the unique challenges and opportunities each project presents. You're not just a customer to us; you're a partner, and we work hand-in-hand to bring your vision to life.",
    },
    {
      title: "Our services are built on trust and confidentiality.",
      substitle:
        "We prioritize your security by signing Non-Disclosure Agreements (NDA). We provide end-to-end solutions, covering design, development, testing, and deployment, ensuring a smooth and efficient process.",
    },
    {
      title:
        "Even after your app is launched, we continue to stand by your side,",
      substitle:
        "Offering full support to address any needs or concerns that may arise. When you choose iRoid Solutions, you're not just hiring a development team; you're choosing a long-term technology partner dedicated to your success.",
    },
    {
      title: "We are here for the long haul,",
      substitle: "Committed to turning your digital dreams into reality.",
    },
    {
      title: "Contact us today for a free consultation",
      substitle:
        "And take the first step towards hiring the best developers for your project. Whether you need an Android Developer, IOS Developer, Frontend Developer, Backend Developer, PHP Developer, Node.js Developer, Web Developer, or Laravel Developer, iRoid Solutions has the expertise to meet your requirements.",
    },
  ];
  return (
    <>
      <TopBg
        state={"Hire Us For Success!"}
        text={"Hire our IT Expert for your Project"}
      />
      <Numbers />
      <div className="my-5">
        <WhyHireUs />
      </div>
      <div className="container py-5 text-center w-100">
        <p className="fs-1 fw-semibold">Choose The Plan That's Right For You</p>
        <p className="fs-5 fw-medium text-00000099">
          Priced just right for companies of every size.
        </p>
        <div className="price-card-container w-100 my-5 py-2 py-lg-5">
          {priceWisePlan.map((plan) => (
            <div
              className="p-3 text-start position-relative rounded-4 border-0 w-100 plan-card"
              key={plan.id}
            >
              <Image
                className="position-abosolute price-tag position-absolute"
                src={"/price-tag.svg"}
                alt=""
                width={100}
                height={100}
              />
              <Image
                className="coin-img mb-3 mb-lg-5"
                src={"/Coin.png"}
                alt=""
                width={50}
                height={50}
              />
              <p className="fs-6 fw-medium text-capitalize text-00000099 mb-0 position-relative z-1">
                {plan.payoutTime}
              </p>
              <p className="fs-50 fw-bolder d-flex align-items-center">
                {plan.price}&nbsp;
                <span className="fs-4 fw-medium text-00000099">
                  {plan.timeLine}*
                </span>
              </p>
              <ul className="list-unstyled fs-6 plan-feature-list">
                {plan.feature.map((f, idx) => (
                  <li
                    className="plan-feature fs-5 fw-medium text-body-secondary mb-3 px-2 d-flex align-items-center"
                    key={idx}
                  >
                    <Image
                      className="me-2 plan-bullet"
                      src={"/plan-bullet.png"}
                      alt="*"
                      width={1200}
                      height={10}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="d-flex align-items-center justify-content-center">
                <Button linkPath={"#contact-us"} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="price-talk py-5 text-center">
        <div className="priceTalk pt-3 pb-2 my-3 mx-auto bg-white">
          <p className="fs-5 fw-semibold mb-2">Rates May Very</p>
          <p className="fs-6 fw-medium text-body-secondary mx-auto mb-2">
            Rates would very according to the work complexity & developer’s
            experience
          </p>
        </div>
        <div className="priceTalk pt-3 pb-2 my-3 mx-auto bg-white">
          <p className="fs-5 fw-semibold mb-2">100% Money Back Guarantee</p>
          <p className="fs-6 fw-medium text-body-secondary talk-light mx-auto mb-2">
            You have the freedom to withdraw the project in the first 7 days. We
            shall refund the unutilized balance of the advance.
          </p>
        </div>
      </div>
      <div className="container py-2 py-lg-5 mt-3 mt-lg-5">
        <div className="hire-us-talk mx-auto p-3 p-sm-5 rounded-4 border-4">
          <div className="d-flex align-items center justify-content-center">
            <Image
              className="talk-emoji mb-2 mb-lg-4"
              src={"/talk-emoji.png"}
              alt="emoji"
              width={1200}
              height={150}
            />
          </div>
          {hireUsTalkPoints.map((points, idx) => (
            <div className="d-flex align-items-start gap-3" key={idx}>
              <Image
                className="talk-bullet mt-2"
                src={"/talk-bullet.png"}
                alt="*"
                width={1200}
                height={20}
              />
              <div className="fs-5 fw-semibold text-005490">
                <p className="mb-0">{points.title}</p>
                <p className="text-00000099">{points.substitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default HireUs;

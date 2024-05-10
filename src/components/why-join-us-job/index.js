import Image from "next/image";
import "./index.css";

const WhyJoinUsJob = () => {
  const careerBenefits = [
    {
      img: "/career-benefits-1.png",
      benefit: "5 Days working company",
    },
    {
      img: "/career-benefits-2.png",
      benefit: "Happy & friendly work environment",
    },
    {
      img: "/career-benefits-3.png",
      benefit: "Best salary package in IT industry",
    },
    {
      img: "/career-benefits-4.png",
      benefit: "50+ Strong team members",
    },
    {
      img: "/career-benefits-5.png",
      benefit: "Opportunity to work with foreign clients",
    },
    {
      img: "/career-benefits-6.png",
      benefit: "Referral bonus program",
    },
    {
      img: "/career-benefits-7.png",
      benefit: "Leave encashment",
    },
    {
      img: "/career-benefits-8.png",
      benefit: "Yearly office trips",
    },
    {
      img: "/career-benefits-9.png",
      benefit: "Festival and birthday celebrations",
    },
    {
      img: "/career-benefits-10.png",
      benefit: "Best career growth opportunity",
    },
  ];
  return (
    <div className="py-3 py-lg-5">
      <p className="fs-1 fw-semibold text-center">Why You Should Join Us?</p>
      <p className="fs-5 fw-medium text-center mx-auto text-00000099">
        Hare are some benefits of work in iRoid solutions
      </p>
      <div className="my-3 my-lg-5 container benefit-card-container">
        {careerBenefits.map((benefit, idx) => (
          <div
            className="p-2 p-lg-4 text-center benefit-card rounded-4 d-flex flex-column align-items-center justify-content-around"
            key={idx}
          >
            <div className="benefit-img-con flexElem d-flex align-items-center justify-content-center">
              <Image src={benefit.img} alt="" width={70} height={70} />
            </div>
            <p className="fs-5 fw-semibold flexElem d-flex align-items-center justify-content-center m-0 mb-sm-4">
              {benefit.benefit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinUsJob;

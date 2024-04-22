import Image from "next/image";
import Marquee from "react-fast-marquee";

const IndustriesWeServe = () => {
  const line1 = [
    {
      img: "/education.png",
      title: "Education Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/fintech.png",
      title: "Fintech Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/healthcare.png",
      title: "Healthcare & Fitness Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/lifestyle.png",
      title: "Lifestyle Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/social media.png",
      title: "Social Media & Entertainment Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/real estate.png",
      title: "Real Estate Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  const line2 = [
    {
      img: "/eCommerce.png",
      title: "E-Commerce Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/sports.png",
      title: "Sports Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/transport.png",
      title: "Transport & Logistics Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/travel.png",
      title: "Travel & Hospitality Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/power.png",
      title: "Energy & Power Generation Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "/AI AR.png",
      title: "AI and AR Industry",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div className="ind-w-s text-center py-2 py-md-5">
      <h3 className="fs-4 fw-semibold">Industries We Serve</h3>
      <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
        Impactful Solutions for Various Sectors
      </p>
      <div className="scrollers py-5">
        <Marquee>
          <div className="w-100 d-flex justify-content-between py-4">
            {line1.map((l, idx) => (
              <div
                className={`p-2 p-md-4 d-flex flex-column align-items-center justify-content-center gap-1 ind-ws-card bg-white me-3 me-md-5`}
                key={idx}
              >
                <div className="img-con">
                  <Image src={l.img} alt="" width={70} height={70} />
                </div>
                <h5 className="fw-semibold">{l.title}</h5>
                <h6 className="w-100 opacity-50">{l.desc}</h6>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="w-100 d-flex justify-content-between py-4">
            {line2.map((l, idx) => (
              <div
                className={`p-2 p-md-4 py-5 d-flex flex-column align-items-center justify-content-center gap-1 ind-ws-card bg-white me-3 me-md-5`}
                key={idx}
              >
                <div className="img-con d-flex align-items-start justify-content-center">
                  <Image src={l.img} alt="" width={70} height={70} />
                </div>
                <h5 className="fw-semibold">{l.title}</h5>
                <h6 className="w-100 opacity-50">{l.desc}</h6>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default IndustriesWeServe;

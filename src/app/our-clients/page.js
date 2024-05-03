import TopBg from "@/components/topBg";
import Image from "next/image";
import "./page.css";
import ContactUs from "@/components/contactUs";

const OurClients = () => {
  const clients = [
    {
      img: "/rovio.svg",
    },
    {
      img: "/subway.svg",
    },
    {
      img: "/klapty.svg",
    },
    {
      img: "/Blue-Elephants.svg",
    },
    {
      img: "/intelli sports.svg",
    },
    {
      img: "/yeti-visit.svg",
    },
    {
      img: "/dribble-bridge.svg",
    },
    {
      img: "/poptaps.svg",
    },
    {
      img: "/juthoor.svg",
    },
    {
      img: "/yoyo-kids.svg",
    },
    {
      img: "/iuncta2.svg",
    },
    {
      img: "/Medics2You.svg",
    },
    {
      img: "/ets.svg",
    },
    {
      img: "/ab-coach.svg",
    },
    {
      img: "/Tendask.svg",
    },
    {
      img: "/spark-my-sports.svg",
    },
    {
      img: "/sparkon.svg",
    },
    {
      img: "/nature.svg",
    },
    {
      img: "/giffi.svg",
    },
    {
      img: "/fitness factory.svg",
    },
  ];
  return (
    <>
      <TopBg
        state={"Our Clients"}
        text={"We have happy clients, and their satisfaction pleases us."}
      />
      <div className="container text-center pt-3 pt-md-5">
        <p className="fs-1 fw-semibold">Our Awesome Clients</p>
        <p className="fs-5 fw-medium text-00000099">
          We cannot thank our clients enough for placing their trust in us to
          develop their applications and websites.
        </p>
        <div className="clients py-5">
          {clients.map((c, idx) => (
            <div
              className="client p-3 p-md-4 p-lg-5 rounded-4 d-flex align-items-center justify-content-center"
              key={idx}
            >
              <Image
                className="client-logo"
                src={`${c.img}`}
                alt="client-img"
                width={100}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default OurClients;

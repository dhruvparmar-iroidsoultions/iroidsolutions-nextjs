import NumberFacts from "@/components/number-facts";
import TopBg from "@/components/topBg";
import Image from "next/image";
import OfficeVideoComponent from "@/components/OfficeVideoComponent";
import Button from "@/components/button";
import LifeAtIroidDemo from "../career/LifeAtIroidDemo";
import "@/app/career/page.css";
import "./page.css";

const AboutUs = () => {
  const players = [
    {
      img: "/text-ceo.png",
      name: "Daxesh Patel",
      position: "CEO, Founder",
    },
    {
      img: "/text-hr.png",
      name: "Ami Vaidya",
      position: "HR",
    },
    {
      img: "/text-pm.png",
      name: "Hardik Parmar",
      position: "Project Manager",
    },
    {
      img: "/text-pm2.png",
      name: "Salman Anasari",
      position: "Team Leader",
    },
    {
      img: "/text-tl1.png",
      name: "Payal Patel",
      position: "Team Leader",
    },
    {
      img: "/text-shr.png",
      name: "ABCD",
      position: "Team Leader",
    },
    {
      img: "/text-spm.png",
      name: "Kartik Patel",
      position: "Team Leader",
    },
    {
      img: "/text-tl2.png",
      name: "Laxman",
      position: "Team Leader",
    },
    {
      img: "/text-tl3.png",
      name: "Akashay",
      position: "Team Leader",
    },
    {
      img: "/text-tl4.png",
      name: "Nikhil",
      position: "Team Leader",
    },
  ];

  const teamImg = [
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
    "/team-img-1.png",
    "/team-img-2.png",
    "/team-img-3.png",
    "/team-img-4.png",
  ];
  return (
    <>
      <TopBg
        state={"Meet the Team"}
        text={
          "We believe the greatest minds achieve more together. Our team isn't just a collection of skills, it's a collaborative force dedicated to understanding your challenges. Through open communication and a deep empathy for human needs, we transform obstacles into ingenious solutions with a lasting impact."
        }
      />
      <div className="container px-2 py-3 py-lg-5 gap-2 gap-lg-4 player-container">
        {players.map((player, idx) => (
          <div
            className="player-intro d-flex flex-column align-items-center justify-content-end"
            key={idx}
          >
            <div className="player-intro-img-con  px-2 pt-2">
              <Image
                src={player.img}
                alt={player.name}
                width={1200}
                height={300}
              />
            </div>
            <p className="playerName fw-semibold mt-2 mt-lg-3 mb-1">
              {player.name}
            </p>
            <p className="playerPosition fs-6 fw-medium opacity-60">
              {player.position}
            </p>
          </div>
        ))}
      </div>
      <h1 className="fw-semibold text-center mt-2 mt-lg-5">Hello</h1>
      <h5 className="text-center opacity-60 lh-base">
        "We're iRoid, a dynamic team of designers, strategists, and tech experts
        shaping tomorrow's possibilities."
      </h5>
      <div className="all-player-container px-2 d-flex gap-3 gap-lg-5 overflow-auto py-3 py-lg-5">
        {teamImg.map((img, idx) => (
          <Image
            className="team-img rounded-5"
            src={img}
            alt="team"
            width={1200}
            height={800}
            key={idx}
          />
        ))}
      </div>
      <div className="amazing-fact">
        <div className="container text-center">
          <h1 className="fw-semibold my-3 mb-md-5">Amazing Facts</h1>
          <NumberFacts />
        </div>
      </div>
      <div className="container py-3 py-md-5 my-3 my-md-5">
        <p className="fs-1 fw-semibold text-center mb-2 my-md-4">
          Our Vision, Mission and Core Values
        </p>
        <div className="row">
          <div className="col-12 mb-4 col-lg">
            <div className="p-3 vmc-card-container rounded-5 ">
              <div className="p-3 vmc-card d-flex flex-column flex-md-row flex-lg-column align-items-center gap-2 gap-sm-4 gap-lg-0">
                <div className="">
                  <Image
                    className="vmc-img object-fit-contain p-4 mb-3"
                    src={"/vision.png"}
                    alt="vision-image"
                    width={150}
                    height={150}
                  />
                  <p className="fs-4 fw-bolder text-center text-005490">
                    Our Vision
                  </p>
                </div>

                <p className="fs-5 fw-medium vmc-text">
                  At iRoid Solutions, our charge is clear- to deliver slice-edge
                  products and services that keep you at the van of technology.
                  We're your visionary IT solutions provider, committed to
                  guiding you through the dynamic IT geography with tailor-made
                  solutions designed to meet your evolving requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4 col-lg">
            <div className="p-3 vmc-card-container vmc-m-card-container rounded-5 ">
              <div className="p-3 vmc-card vmc-m-card d-flex flex-column flex-md-row flex-lg-column align-items-center gap-2 gap-sm-4 gap-lg-0">
                <div className="">
                  <Image
                    className="vmc-img object-fit-contain p-4 mb-3"
                    src={"/mission.png"}
                    alt="mission-image"
                    width={150}
                    height={150}
                  />
                  <p className="fs-4 fw-bolder text-center text-white">
                    Mission
                  </p>
                </div>
                <p className="fs-5 fw-medium vmc-text text-white">
                  At iRoid Solutions, our charge is clear- to deliver slice-edge
                  products and services that keep you at the van of technology.
                  We're your visionary IT solutions provider, committed to
                  guiding you through the dynamic IT geography with tailor-made
                  solutions designed to meet your evolving requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mb-4 col-lg">
            <div className="p-3 vmc-card-container rounded-5 ">
              <div className="p-3 vmc-card d-flex flex-column flex-md-row flex-lg-column align-items-center gap-2 gap-sm-4 gap-lg-0">
                <div className="">
                  <Image
                    className="vmc-img object-fit-contain p-4 mb-3"
                    src={"/core-values.png"}
                    alt="core-values-image"
                    width={150}
                    height={150}
                  />
                  <p className="fs-4 fw-bolder text-center text-005490">
                    Core Values
                  </p>
                </div>
                <p className="fs-5 fw-medium vmc-text">
                  At iRoid Solutions, our charge is clear- to deliver slice-edge
                  products and services that keep you at the van of technology.
                  We're your visionary IT solutions provider, committed to
                  guiding you through the dynamic IT geography with tailor-made
                  solutions designed to meet your evolving requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center fw-semibold my-3 my-md-5">
          Our Office Environment
        </h1>
        <OfficeVideoComponent />
      </div>
      <div className="container pt-3 pt-md-5">
        <h1 className="text-center fw-semibold mt-3 my-md-4">
          "Experience our vibrant workplace culture."
        </h1>
        <h5 className="mb-2 mx-auto text-00000099 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Discover a culture that inspires and supports you
        </h5>
        <div className="container mt-3 mt-lg-5">
          <LifeAtIroidDemo />
        </div>
      </div>
    </>
  );
};

export default AboutUs;

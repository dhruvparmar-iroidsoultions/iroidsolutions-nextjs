import NumberFacts from "@/components/number-facts";
import TopBg from "@/components/topBg";
import "./page.css";
import Image from "next/image";
import OfficeVideoComponent from "@/components/OfficeVideoComponent";
import Button from "@/components/button";

const AboutUs = () => {
  return (
    <>
      <TopBg
        state={"Meet the Team"}
        text={
          "We believe the greatest minds achieve more together. Our team isn't just a collection of skills, it's a collaborative force dedicated to understanding your challenges. Through open communication and a deep empathy for human needs, we transform obstacles into ingenious solutions with a lasting impact."
        }
      />
      <div className="amazing-fact py-5">
        <div className="container text-center">
          <h1 className="fw-semibold my-3 my-md-5">Amazing Facts</h1>
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
        <p className="mb-2 mx-auto f20 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Discover a culture that inspires and supports you
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <Button text={"Life at iRoid"} linkPath={"/life-at-iroid"} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;

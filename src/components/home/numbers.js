"use client";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className="wwr w-100 py-5 position-relative text-center my-5 d-flex flex-column align-items-center justify-content-center wow animate__animated animate__fadeIn">
      <img src={"/bgTopLeft.svg"} alt="" className="wwr-bg" />
      <img src={"/bgBottomLeft.svg"} alt="" className="wwr-bg" />
      <img src={"/bgTopRight.svg"} alt="" className="wwr-bg" />
      <img src={"/bgBottomRight.svg"} alt="" className="wwr-bg" />
      <div className="container d-flex flex-column align-items-center">
        <h3 className="firstBlue">Who We Are</h3>
        <p className="f38 wow animate__animated animate__fadeInLeft">
          Architects of Digital Success
        </p>
        <p className="mb-5 f20 wow animate__animated animate__fadeInRight">
          "With a passion for technology and a commitment to excellence, we are
          your trusted partner in navigating the ever-changing IT landscape and
          unlocking new opportunities."
        </p>
        <div className="homeGridContainer">
          <div className="homeGridItem">
            <img src={"/hgi1.svg"} alt="" />
            <h1>
              <CountUp
                start={0}
                end={9}
                duration={4}
                enableScrollSpy={true}
                suffix="+"
              />
            </h1>
            <p className="mb-0 mb-lg-1">Years in Business</p>
          </div>
          <div className="homeGridItem">
            <img src={"/hgi2.svg"} alt="" />
            <h1>
              <CountUp
                start={0}
                end={50}
                duration={4}
                enableScrollSpy={true}
                suffix="+"
              />
            </h1>
            <p>Team Members</p>
          </div>
          <div className="homeGridItem">
            <img src={"/hgi3.svg"} alt="" />
            <h1>
              <CountUp
                start={0}
                end={200}
                duration={4}
                enableScrollSpy={true}
                suffix="+"
              />
            </h1>
            <p>Happy Clients</p>
          </div>
          <div className="homeGridItem">
            <img src={"/hgi4.svg"} alt="" />
            <h1>
              <CountUp
                start={0}
                end={400}
                duration={4}
                enableScrollSpy={true}
                suffix="+"
              />
            </h1>
            <p>Projects Completed</p>
          </div>
          <div className="homeGridItem">
            <img src={"/hgi5.svg"} alt="" />
            <h1>
              <CountUp
                start={0}
                end={91}
                duration={4}
                enableScrollSpy={true}
                suffix="%"
              />
            </h1>
            <p>Clients Recommended Us</p>
          </div>
          <div className="homeGridItem">
            <img src={"/hgi6.svg"} alt="" />
            <h1>
              <CountUp
                start={0}
                end={87}
                duration={4}
                enableScrollSpy={true}
                suffix="%"
              />
            </h1>
            <p>Repeat Clients Ratio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;

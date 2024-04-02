import "./index.css";
import CountUp from "react-countup";

const WhyChoose = ({ project, line = true, pathName }) => {
  return (
    <div
      className="container chooseGrid p-0 pb-5 wow animate__animated animate__fadeIn"
      data-wow-delay="0.5s"
    >
      {line && (
        <h1
          className="text-center py-3 py-sm-5 mx-auto w-sm-75 wow animate__animated animate__fadeIn"
          data-wow-duration="1.5s"
        >
          {pathName.includes("solutions") ? (
            <p>
              <span>Why Choose iRoid Solutions </span>
              <span>For Your {project}?</span>
            </p>
          ) : (
            <p>
              Why <span>Choose Us</span>
            </p>
          )}
        </h1>
      )}
      <div className="grid-container text-white ">
        <div className="chooseGrid-item item1">
          <p className="">
            Agile <br />
            Development <br />
            Model
          </p>
        </div>
        <div className="chooseGrid-item item2 ">
          <h1 className="f58">
            <CountUp
              start={0}
              end={50}
              duration={4}
              enableScrollSpy={true}
              suffix="+"
            />
          </h1>
          <p>
            Countries World Wide <br />
            Served
          </p>
        </div>
        <div className="chooseGrid-item item3 ">
          <h1 className="mt-2 mb-4 f67">
            <CountUp
              start={0}
              end={400}
              duration={4}
              enableScrollSpy={true}
              suffix="+"
            />
          </h1>
          <p className="mb-5">
            Projects Live On <br />
            Digital World
          </p>
        </div>
        <div className="chooseGrid-item item4 position-relative">
          <h1 className="  f134">
            <CountUp
              start={0}
              end={9}
              duration={4}
              enableScrollSpy={true}
              suffix="+"
            />
          </h1>
          <p className=" ">Years Experiece</p>
          <img src={"/Group.svg"} alt="" className="position-absolute " />
        </div>
        <div className="chooseGrid-item item5 ">
          <p className="">
            Splendid UI/UX <br />
            Design
          </p>
        </div>
        <div className="chooseGrid-item item6 ">
          <h1 className="  f67">
            <CountUp
              start={0}
              end={50}
              duration={4}
              enableScrollSpy={true}
              suffix="+"
            />
          </h1>
          <p className=" ">
            Expert Team <br />
            Members
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

"use client";
import Image from "next/image";
import CountUp from "react-countup";

const NumberFacts = () => {
  return (
    <div className="homeGridContainer">
      <div className="homeGridItem">
        <Image src={"/hgi1.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={9}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Years in Business</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi2.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={50}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Team Members</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi3.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={200}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Happy Clients</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi4.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={86}
            duration={4}
            suffix="%"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Repeat Clients Ratio</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi9.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={30}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Countries served</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi5.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={90}
            duration={4}
            suffix="%"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Clients Recommended Us</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi6.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={400}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Apps Launched</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi7.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={50}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Websites Launched</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi8.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={150}
            duration={4}
            suffix="+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">5 Star Ratings</p>
      </div>
      <div className="homeGridItem">
        <Image src={"/hgi10.svg"} alt="" width={70} height={70} />
        <h1 className="fw-bolder mt-2 mt-lg-4">
          <CountUp
            start={0}
            end={5}
            duration={4}
            suffix="M+"
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </h1>
        <p className="mb-md-0 mb-lg-2">Happy End-users</p>
      </div>
    </div>
  );
};

export default NumberFacts;

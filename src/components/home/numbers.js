"use client";
import Image from "next/image";
import CountUp from "react-countup";

const Numbers = () => {
  return (
    <div className="wwr w-100 py-5 position-relative text-center my-5 d-flex flex-column align-items-center justify-content-center wow animate__animated animate__fadeIn">
      <div className="container d-flex flex-column align-items-center">
        <h3 className="fs-4 fw-semibold">Who We Are</h3>
        <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
          Our Self-explanatory Statistics
        </p>
        <p
          className="mb-5 f20 fs-5 fw-medium wow animate__animated animate__fadeInRight"
          style={{ maxWidth: "750px" }}
        >
          Our self-explanatory statistics are a testament to our global reach
          and unwavering dedication to excellence.
        </p>
        <div className="homeGridContainer">
          <div className="homeGridItem">
            <Image src={"/hgi1.svg"} alt="" width={70} height={70} />
            <h1>
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
            <h1>
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
            <h1>
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
            <h1>
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
            <Image src={"/hgi5.svg"} alt="" width={70} height={70} />
            <h1>
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
            <h1>
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
            <h1>
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
            <h1>
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
        </div>
      </div>
    </div>
  );
};

export default Numbers;

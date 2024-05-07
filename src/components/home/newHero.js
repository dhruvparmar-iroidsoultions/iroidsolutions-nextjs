import Button from "../button";

const HeroSection = () => {
  return (
    <main className="hero-main pt-5 mx-2 mx-sm-auto">
      <div className="container my-3 my-md-5 p-md-5 overflow-hidden d-flex align-items-center">
        <div className="p-4 p-md-5">
          <div className="py-1">
            <h3 className="mb-3 text-005490 fw-medium">
              10+ Years of Excellence
            </h3>
            <p className="mb-4 fs-50 fw-semibold">
              We provide you with complete{" "}
              <span className="fw-bold">
                IT Solutions
                <img src="/border.png" alt="" />
              </span>{" "}
              for your Business
            </p>
            <p className="fs-22 fw-medium text-00000099">
              We live and breathe apps - <br />
              that's why our clients love working with us
            </p>
            <Button
              text={"See Testimonials"}
              linkPath={"testimonials"}
              m={"my-2 my-md-5 m-lg-0"}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="ratings py-3 pb-lg-5">
          <div className="d-flex align-items-center justify-content-center d-sm-block">
            <img src={"/rating 1.svg"} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center d-sm-block">
            <img src={"/rating 2.svg"} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center d-sm-block">
            <img src={"/rating 3.svg"} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center d-sm-block">
            <img src={"/rating 4.svg"} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center d-sm-block">
            <img src={"/rating 5.svg"} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

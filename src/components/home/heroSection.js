import Button from "../button";

const HeroSection = () => {
  return (
    <div className="homeSecContainer pt-5">
      <div className="container row align-items-center justify-content-center pt-5 mx-auto gap-5 gap-lg-0 overflow-hidden">
        <div className="wow animate__animated animate__fadeInLeft col-12 col-lg-6 p-0 mx-auto">
          <div className="d-flex flex-column justify-content-around align-items-baseline">
            <h3 className="mb-3 fh3">9+ Years of Excellence</h3>
            <p className="mb-4 f48">
              We provide you with complete{" "}
              <span>
                IT Solutions
                <img src="/border.png" alt="" />
              </span>{" "}
              for your Business
            </p>
            <h3 className="mb-4 sh3">
              We live and breathe apps - <br />
              that's why our clients love working with us
            </h3>
            <Button
              text={"See Testimonials"}
              cn="btn shadowBtn d-flex align-items-center justify-content-around fs-5 py-2 px-5 position-relative"
            />
          </div>
        </div>
        <div className="wow animate__animated animate__fadeInRight md-col d-flex justify-content-around align-items-center col-lg-6 p-0 row position-relative">
          <img className="col p-0" src={"/img1.png"} alt="imge" />
          <img
            className="position-absolute top-50 start-50 translate-middle p-0"
            src={"/img1Bg.png"}
            alt="imge"
          />
        </div>
      </div>
      <div className="wow animate__animated animate__fadeInUp my-5 award text-center text-wrap d-flex flex-column align-items-center justify-content-center overflow-hidden w-100">
        <div
          className="award-text f20 wow animate__animated animate__fadeInRight my-5 wow animate__animated animate__fadeInRight"
          data-wow-duration="2s"
        >
          <h1 className="f38">Awards & Recognition</h1>
          <p className="f20">
            Recognition for work of excellence. Figures that demonstrates our
            work quality. Awards that are reflecting our client’s trust on our
            services
          </p>
        </div>
        <div className="homeSec2 ratingConatiner container d-flex flex-wrap justify-content-around justify-content-xl-between align-items-center gap-4 my-lg-5 my-xxl-0  w-100">
          <img className="" src={"/rate1.svg"} alt="rating" />
          <img className="" src={"/rate2.svg"} alt="rating" />
          <img className="" src={"/rate3.svg"} alt="rating" />
          <img className="" src={"/rate4.svg"} alt="rating" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

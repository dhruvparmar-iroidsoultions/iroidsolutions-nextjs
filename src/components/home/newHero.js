import React from "react";
import Button from "../button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="hero-main pt-5 mx-2 mx-sm-auto">
      <div className="container my-3 my-md-5 p-md-5 overflow-hidden">
        <div className="p-4 p-md-5">
          <div className="py-1 py-sm-3 py-md-5">
            <h3 className="mb-3 fh3">10+ Years of Excellence</h3>
            <p className="mb-4 f48">
              We provide you with complete{" "}
              <span className="fw-bold">
                IT Solution
                <img src="/border.png" alt="" />
              </span>{" "}
              for your Business
            </p>
            <h5 className="mb-4 mb-sm-5 sh3 fw-medium">
              We live and breathe apps - <br />
              that's why our clients love working with us
            </h5>
            <Button
              text={"See Testimonials"}
              cn="btn shadowBtn d-flex align-items-center justify-content-around fs-5 py-2 px-5 position-relative"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="ratings row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2 g-sm-3 g-md-4 g-lg-5 justify-content-sm-between justify-content-md-center">
          <div className="col p-0 d-flex align-items-center justify-content-center">
            <Image src={"/rating 1.svg"} width={180} height={100} />
          </div>
          <div className="col p-0 d-flex align-items-center justify-content-center">
            <Image src={"/rating 2.svg"} width={180} height={100} />
          </div>
          <div className="col p-0 d-flex align-items-center justify-content-center">
            <Image src={"/rating 3.svg"} width={180} height={100} />
          </div>
          <div className="col p-0 d-flex align-items-center justify-content-center">
            <Image src={"/rating 4.svg"} width={180} height={100} />
          </div>
          <div className="col p-0 d-flex align-items-center justify-content-center">
            <Image src={"/rating 5.svg"} width={180} height={100} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

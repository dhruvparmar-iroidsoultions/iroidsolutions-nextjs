import Button from "@/components/button";
import TopBg from "@/components/topBg";
import Getindustry from "./getindustry";

const Industries = () => {
  return (
    <>
      <TopBg
        state={"Industries We Serve"}
        text={
          "Empowering industries with forward-thinking solutions for transformative growth."
        }
      />
      <Getindustry />
      <div className="container pt-3 pt-md-5">
        <h1 className="text-center fw-semibold mt-3 my-md-4">
          "Bring Your Ideas to Life With Us."
        </h1>
        <p className="mb-2 mx-auto f20 text-center fs-5 fw-medium wow animate__animated animate__fadeInRight">
          Tell us more about your project—we're here to listen and support your
          vision
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <Button text={"Get in Touch"} linkPath={"/contact"} />
        </div>
      </div>
    </>
  );
};

export default Industries;

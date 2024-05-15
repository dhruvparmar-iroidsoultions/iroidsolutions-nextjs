import Image from "next/image";
import Button from "@/components/button";
import "./not-found.css";

const Error = () => {
  return (
    <div className="errorContainer d-flex align-items-center justify-content-center w-100 h-100 px-2">
      <div className="errorImages d-flex flex-column align-items-center justify-content-between gap-3 gap-lg-5 mt-3">
        <div className="text-center">
          <p className="errorHeading fw-bolder text-005490">Oh No!</p>
          <h1 className="errorSubHeading fw-medium text-00000099">
            This page is not found
          </h1>
        </div>
        <div>
          <Image
            className="img-fluid img-404"
            src={"/404-img.svg"}
            alt="404 Image"
            width={1200}
            height={1500}
          />
        </div>
        <div className="go-to-home d-flex justify-content-center w-100 px-2">
          <Button linkPath={"/"} text={"Back to Home"} />
        </div>
      </div>
    </div>
  );
};

export default Error;

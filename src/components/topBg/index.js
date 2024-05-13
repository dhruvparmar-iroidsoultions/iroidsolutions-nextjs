import Image from "next/image";
import "./index.css";

const TopBg = ({ state, text, extra }) => {
  return (
    <div className="topBg position-relative py-5 py-sm-0 py-lg-5 overflow-hidden d-flex align-items-center justify-content-center">
      <div className="contentText m-auto text-light text-center px-2 py-3 py-md-5">
        {/* <h1 className="fs-1 text-capitalize mb-2 mb-md-4 mt-5"> */}
        <h1 className="fs-1 mb-2 mb-md-4 mt-sm-5">
          {state}{" "}
          <span className="position-relative overflow-hidden">
            <Image
              className="position-absolute top-0 translate-middle top-bg-star"
              src={"/top-bg-star.png"}
              alt=""
              width={50}
              height={50}
            />
          </span>
        </h1>
        <p className="fs-5 top-bg-text fw-medium m-auto px-2">{text}</p>
        {extra}
      </div>
    </div>
  );
};

export default TopBg;

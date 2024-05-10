import Image from "next/image";
import "./index.css";

const WMUSpcial = () => {
  return (
    <div className="mx-2 mt-md-5 py-3 py-lg-5">
      <div className="mw-1270 mx-auto p-3 p-md-5 rounded-5 overflow-hidden w-u-sp">
        <div className="d-flex align-items center justify-content-center">
          <Image
            className="talk-emoji mb-2 mb-lg-4"
            src={"/talk-emoji.png"}
            alt="emoji"
            width={1200}
            height={150}
          />
        </div>
        <p className="fs-1 fw-semibold text-center">What makes us special?</p>
        <div className="point mx-2 mx-md-5">
          <p className="mb-0 fs-6 fw-semibold text-005490">
            1. Top-notch expertise:
          </p>
          <p className="fs-6 fw-medium text-00000099">
            We have skilled developers, designers, and UI/UX specialists ready
            to tackle your toughest challenges.
          </p>
        </div>
        <div className="point mx-2 mx-md-5">
          <p className="mb-0 fs-6 fw-semibold text-005490">
            2. Proven track record:
          </p>
          <p className="fs-6 fw-medium text-00000099">
            Our award-winning projects showcase our dedication to excellence and
            innovation.
          </p>
        </div>
        <div className="point mx-2 mx-md-5">
          <p className="mb-0 fs-6 fw-semibold text-005490">
            3. Wide range of services:
          </p>
          <p className="fs-6 fw-medium text-00000099">
            From web development to graphic design, we offer a comprehensive
            suite of solutions to meet your needs.
          </p>
        </div>
        <div className="point mx-2 mx-md-5">
          <p className="mb-0 fs-6 fw-semibold text-005490">
            4. Trusted partner:
          </p>
          <p className="fs-6 fw-medium text-00000099">
            We're a reliable and respected name in the IT industry, dedicated to
            your success.
          </p>
        </div>
        <p className="fs-1 fw-bolder text-center text-005490 mt-5">Join us!</p>
      </div>
    </div>
  );
};

export default WMUSpcial;

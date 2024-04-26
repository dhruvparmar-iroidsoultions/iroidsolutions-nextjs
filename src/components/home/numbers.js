import NumberFacts from "../number-facts";

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
        <NumberFacts />
      </div>
    </div>
  );
};

export default Numbers;

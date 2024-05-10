import "./not-found.css";

const Error = () => {
  return (
    <div className="errorContainer container pt-5 d-flex flex-column align-items-center justify-content-center w-100">
      <div className="errorImages d-flex align-items-center justify-content-between gap-3 gap-lg-5 mt-5">
        <div>
          <img className="img-fluid" src={"/errComp.svg"} alt="errorComputer" />
        </div>
        <div>
          <img
            className="img-fluid"
            src={"/errorArrows.svg"}
            alt="errorArrows"
          />
        </div>
        <div>
          <img className="img-fluid" src={"/errPap.svg"} alt="errorPaper" />
        </div>
      </div>
      <p className="errorText text-center my-5 my">
        <span>This page</span> is not available.
      </p>
    </div>
  );
};

export default Error;

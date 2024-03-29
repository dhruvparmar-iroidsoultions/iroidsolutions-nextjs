import "./index.css";

const EnquiryBanner = ({ line1, line2, textAlign }) => {
  return (
    <div className="enquiryBanner container p-0 my-5 d-flex flex-column gap-5 flex-lg-row align-items-center justify-content-center py-5 gap-xl-4 gap-xxl-5 position-relative">
      <p className="m-0 px-sm-5 pe-lg-0" style={{ textAlign: textAlign }}>
        {line1} <br /> {line2}
      </p>
      <img src={"/soluArrow.svg"} alt="direction arrow" />
      <button className="mx-md-5">Enquire Now</button>
    </div>
  );
};

export default EnquiryBanner;

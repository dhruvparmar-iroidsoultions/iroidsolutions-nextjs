import QueAns from "../QnsAns";
import Button from "../button";

const FAQs = ({ faqs, show = true, btn = true }) => {
  return (
    <div className="FAQsContainer container text-center py-3 my-md-5 py-md-5">
      {show && <h3 className="fs-4 fw-semibold">FAQs</h3>}
      {show && (
        <p className="text-005490 fs-1 fw-bolder mb-md-5 wow animate__animated animate__fadeInLeft">
          Frequently Asked Quetions
        </p>
      )}
      <QueAns QA={faqs} id={"FAQs"} />
      {btn && <Button linkPath={"/FAQs"} />}
    </div>
  );
};

export default FAQs;

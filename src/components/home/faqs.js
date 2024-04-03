import QueAns from "../QnsAns";
import Button from "../button";

const FAQs = ({ faqs, show = true, btn = true }) => {
  return (
    <div className="FAQsContainer container text-center my-5">
      {show && <h3 className="firstBlue">FAQs</h3>}
      {show && (
        <p className="f38 mb-5 wow animate__animated animate__fadeInLeft">
          Frequently Asked Quetions
        </p>
      )}
      <QueAns QA={faqs} id={"FAQs"} />
      {btn && <Button text={"See All FAQs"} />}
    </div>
  );
};

export default FAQs;

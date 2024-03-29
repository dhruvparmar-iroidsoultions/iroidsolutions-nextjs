import QueAns from "../QnsAns";
import Button from "../button";

const FAQs = ({ faqs }) => {
  return (
    <div className="FAQsContainer container text-center my-5">
      <h3 className="firstBlue">FAQs</h3>
      <p className="f38 mb-5 wow animate__animated animate__fadeInLeft">
        Frequently Asked Quetions{" "}
      </p>
      <QueAns QA={faqs} id={"FAQs"} />
      <Button text={"See All FAQs"} />
    </div>
  );
};

export default FAQs;

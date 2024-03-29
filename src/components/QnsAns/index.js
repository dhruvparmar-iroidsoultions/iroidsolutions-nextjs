import React from "react";
import "./qa.css";

const QueAns = ({ QA, id }) => {
  const mapQA = QA.slice(0, 7).map((qa) => (
    <div className="accordion-item" key={qa._id}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}-flush-${qa._id}`}
          aria-expanded="false"
          aria-controls={`#flush${qa._id}`}
        >
          Q. {qa.question}
        </button>
      </h2>
      <div
        id={`${id}-flush-${qa._id}`}
        className="accordion-collapse collapse"
        data-bs-parent={`#${id}`}
      >
        <div className="accordion-body">
          <span>Ans.</span> {qa.answer}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="accordion accordion-flush QueAns" id={id}>
      {mapQA}
    </div>
  );
};

export default QueAns;

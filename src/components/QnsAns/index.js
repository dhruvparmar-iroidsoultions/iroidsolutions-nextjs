import React from "react";
import "./qa.css";

const QueAns = ({ QA, id }) => {
  const removeTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    const wrappedContent = `${textContent}`;
    return wrappedContent;
  };

  const mapQA = QA.slice(0, 7).map((qa, idx) => (
    <div className="accordion-item" key={qa.id}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed fw-semibold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}-flush-${qa.id}`}
          aria-expanded="false"
          aria-controls={`#flush${qa.id}`}
          // aria-controls={`#flush${qa._id}`}
        >
          Q{idx + 1}. {qa.question}
        </button>
      </h2>
      <div
        id={`${id}-flush-${qa.id}`}
        className="accordion-collapse collapse"
        data-bs-parent={`#${id}`}
      >
        <div className="accordion-body d-flex alifn-items-center gap-2 fs-6">
          Ans. {<span dangerouslySetInnerHTML={{ __html: qa.answer }} />}
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

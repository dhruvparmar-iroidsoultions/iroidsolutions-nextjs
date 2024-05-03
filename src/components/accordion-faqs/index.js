"use client";

import { useState } from "react";
import "./index.css";

const Accordion = ({ faqs, id, mainClass }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className={`accordion accordion-flush mx-auto ${mainClass}`}
      id={`${id}`}
    >
      {faqs.map((faq, idx) => (
        <div
          className={`accordion-item my-3 rounded-4 overflow-hidden ${
            activeIndex === idx ? "active-faq" : "border-0"
          }`}
          key={faq.id}
          onClick={() => handleItemClick(idx)}
        >
          <h2
            className={`accordion-header  ${
              activeIndex === idx ? "" : "opened-faq"
            }`}
          >
            <button
              className={`accordion-button collapsed fs-5 fw-semibold d-flex align-items-center gap-3`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}-flush-${faq.id}`}
              aria-expanded="false"
              aria-controls={`${id}-flush-${faq.id}`}
              // aria-controls={`#flush${faq._id}`}
            >
              Q.{idx + 1} {faq.question}
            </button>
          </h2>
          <div
            id={`${id}-flush-${faq.id}`}
            className="accordion-collapse collapse position-relative"
            data-bs-parent={`#${id}`}
          >
            <div className="accordion-body d-flex gap-2 fs-6 pt-0">
              <span className="text-005490 fw-semibold">Ans. </span>{" "}
              <div
                className="fw-medium text-00000099"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

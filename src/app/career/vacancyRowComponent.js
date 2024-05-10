"use client";

const VacancyRowComponent = (vacancy) => {
  return (
    <div className="accordion-item" key={vacancy.id}>
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed fw-semibold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#availableVacancy-flush-${vacancy.id}`}
          aria-expanded="false"
          // aria-controls={`availableVacancy-flush-${vacancy.id}`}
          // aria-controls={`#flush${vacancy._id}`}
        >
          {vacancy.title}
        </button>
      </h2>
      <div
        id={`availableVacancy-flush-${vacancy.id}`}
        className="accordion-collapse collapse"
        data-bs-parent={`#availableVacancy`}
      >
        <div className="accordion-body d-flex alifn-items-center gap-2 fs-6">
          Ans. {<span dangerouslySetInnerHTML={{ __html: vacancy.benefits }} />}
        </div>
      </div>
    </div>
  );
};

export default VacancyRowComponent;

"use client";

import axiosApi from "@/api/axiosConfig";
import Image from "next/image";
import { useEffect, useState } from "react";

const AvailableVacancy = () => {
  const [availableVacancy, setAvailableVacancy] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const getVacancy = async () => {
    try {
      const { data } = await axiosApi.get("/career-job?page=1");
      console.log(data.data);
      setAvailableVacancy(data.data);
    } catch (error) {
      console.error("Getting Error in Fetching Vacancy ", error);
    }
  };

  useEffect(() => {
    getVacancy();
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="accordion accordion-flush mx-auto availableVacancy"
      id="availableVacancy"
    >
      {availableVacancy.map((vacancy, idx) => (
        <div
          className={`accordion-item my-3 rounded-4 overflow-hidden ${
            activeIndex === idx ? "active-career" : "border-0"
          }`}
          key={vacancy.id}
          onClick={() => handleItemClick(idx)}
        >
          <h2 className={`accordion-header`}>
            <button
              className={`accordion-button collapsed fs-4 fw-semibold d-flex align-items-center gap-3
               ${activeIndex === idx ? "bg-white" : "opened-career"}
              `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#availableVacancy-flush-${vacancy.id}`}
              aria-expanded="false"
              aria-controls={`availableVacancy-flush-${vacancy.id}`}
              // aria-controls={`#flush${vacancy._id}`}
            >
              <Image
                className="career-bullet"
                src={"/career-bullet.png"}
                alt=""
                width={30}
                height={30}
              />
              {vacancy.title}
              <span
                className={`fw-medium border-0 px-3 py-2 rounded-3 text-005490 ${
                  activeIndex === idx ? "" : "bg-white"
                } career-experience`}
                dangerouslySetInnerHTML={{ __html: vacancy.experience }}
              />
            </button>
          </h2>
          <div
            id={`availableVacancy-flush-${vacancy.id}`}
            className="accordion-collapse collapse position-relative"
            data-bs-parent={`#availableVacancy`}
          >
            <hr
              className={`openedVacancyHr mx-4 my-2 position-relative ${
                activeIndex === idx ? "d-block" : ""
              } `}
            />
            <div className="accordion-body">
              <>
                <div className="d-flex flex-wrap align-items-center gap-1 gap-sm-5">
                  <div className="me-2 me-md-5">
                    <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                      Experience:
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{ __html: vacancy.experience }}
                    />
                  </div>
                  <div className="me-md-5">
                    <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                      Salary:
                    </h3>
                    <p>{vacancy.salary}</p>
                  </div>
                  <div className="me-md-5">
                    <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                      Opening’s:
                    </h3>
                    <p>{vacancy.openings}</p>
                  </div>
                </div>
              </>
              <>
                <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                  Technical Skills:
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: vacancy.technicalskills }}
                />
              </>
              <>
                <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                  Technical Skills:
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: vacancy.technicalskills }}
                />
              </>
              <>
                <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                  Optional Skills:
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: vacancy.optionalskills }}
                />
              </>
              <>
                <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                  Other Skills:
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: vacancy.otherskills }}
                />
              </>
              <>
                <h3 className="fs-5 fw-semibold text-005490 mb-2 mt-md-1 mb-md-3">
                  Qualification:
                </h3>
                <p>{vacancy.qualification} </p>
              </>
              <div className="w-100 d-flex align-items-center justify-content-center">
                <button
                  className="w-100 text-white fs-6 fw-semibold mx-auto applyJob py-2 rounded-3"
                  data-bs-toggle="modal"
                  data-bs-target="#applyModal"
                  id="applyModalBtn"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableVacancy;

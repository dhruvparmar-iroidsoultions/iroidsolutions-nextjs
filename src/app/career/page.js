import TopBg from "@/components/topBg";
import React from "react";
import EmployeeTestmonial from "./employeeTestmonial";
import "./page.css";
import AvailableVacancy from "./availableVacancy";
import LifeAtIroidDemo from "./LifeAtIroidDemo";
import ContactUs from "@/components/contactUs";
import ApplyJobModal from "@/components/applyJobModal";
import WhyJoinUsJob from "@/components/why-join-us-job";

const Career = () => {
  return (
    <>
      <TopBg
        state={"Career Opportunities At iRoid Solutions"}
        text={"We’re looking for a talented employee"}
      />
      <div className="container py-3 py-lg-5">
        <p className="fs-1 fw-semibold text-center">
          Team Members Testimonials
        </p>
        <p
          className="fs-5 fw-medium text-center mx-auto text-00000099"
          style={{ maxWidth: "792px" }}
        >
          Working with our team is like being part of a family—supportive,
          collaborative, and driven to succeed.
        </p>
        <EmployeeTestmonial />
      </div>
      <WhyJoinUsJob />
      <div className="">
        <div className="available-vacancy container py-3 py-md-5">
          <p className="fs-1 fw-semibold text-center">
            Available Job Vacancies
          </p>
          <p
            className="fs-5 fw-medium text-center text-00000099 mx-auto mb-2 mb-md-5"
            style={{ maxWidth: "992px" }}
          >
            Unlock your potential in the world of technology. Explore exciting
            opportunities and join our innovative IT team today!
          </p>
          <AvailableVacancy />
        </div>
        <div className="container py-3 py-md-5">
          <p className="fs-1 fw-semibold text-center">
            "Experience our vibrant workplace culture."
          </p>
          <p className="fs-5 fw-medium text-center text-00000099 mx-auto mb-2 mb-md-5">
            Discover a culture that inspires and supports you
          </p>
          <ApplyJobModal />
          <LifeAtIroidDemo />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Career;

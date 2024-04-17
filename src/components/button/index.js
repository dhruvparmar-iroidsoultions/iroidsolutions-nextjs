import React from "react";
import "./index.css";
import Link from "next/link";

const Button = ({ linkPath, text, cn, arrow = true, children }) => {
  return (
    <button
      className={
        "more-btn my-2 my-md-5 position-relative fw-semibold rounded-3"
      }
    >
      <Link
        className="text-decoration-none d-block d-flex align-items-center justify-content-center w-100 h-100"
        href={`${linkPath}`}
      >
        {children ? children : text || "See More"}
        {/* {arrow && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="position-absolute top-50 translate-middle-y"
            style={{ right: cn && "12px" }}
          >
            <path
              d="M8.5 5L15.5 12L8.5 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )} */}
      </Link>
    </button>
  );
};

export default Button;

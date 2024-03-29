import React from "react";
import "./index.css";
import Link from "next/link";

const Button = ({ linkPath, text, cn, arrow = true }) => {
  return (
    <button className={cn || "seeAllBtn my-5 position-relative"}>
      <Link href={`${linkPath}`}>
        {text || "See All"}
        {arrow && (
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
        )}
      </Link>
    </button>
  );
};

export default Button;

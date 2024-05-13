"use client";

import axiosApi from "@/api/axiosConfig";
import { useEffect, useState } from "react";

const ClientTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const removeTags = (html) => {
    const cleanText = html.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const getTestimonials = async () => {
    try {
      const response = await axiosApi.get(
        "/client-testimonials?page=1&limit=10"
      );
      const data = response.data.data;
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const mapTestimonials = testimonials.map((review) => {
    const stars = [];
    const starLength = review.stars || 5;
    for (let i = 0; i < starLength; i++) {
      stars.push(
        <li key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23"
            fill="#FAB231"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </li>
      );
    }
    return (
      <div className="col">
        <div
          className="p-3 h-100 card testimonialCardContainer rounded-5 bg-white review-shadowbox"
          key={review.id}
        >
          <div className="card-body d-flex flex-column text-start py-2 py-md-4 px-3 px-lg-5">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <ul className="list-unstyled d-flex">{stars}</ul>
              <img src={"/quote-up-right.svg"} alt="" />
            </div>
            <div className="h-100 d-flex flex-column justify-content-between">
              <p className="my-3 testimonialReview f20 wow animate__animated animate__fadeInRight">
                “{removeTags(review.description)}”
              </p>
              <div className="testimonialProfileContainer d-flex align-items-center gap-4">
                <div className="d-flex justify-content-center">
                  <img
                    src={review.profilepic}
                    alt="profile"
                    className="testimonial-img rounded-circle"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="testimonialProfile">
                  <h5 className="font-weight-bold mb-0 text-capitalize">
                    {review.clientname}
                  </h5>
                  <h6 className="font-weight-bold my-1 text-uppercase">
                    {review.position}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row row-cols-1 row-cols-md-2 g-3 g-lg-5 py-3 py-lg-5">
      {mapTestimonials}
    </div>
  );
};

export default ClientTestimonial;

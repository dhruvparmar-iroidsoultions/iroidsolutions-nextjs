"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import Button from "../button";

const TestimonialReview = ({ clientTestimonial }) => {
  const mapTestimonialsReview =
    clientTestimonial &&
    clientTestimonial.map((review) => {
      const stars = [];
      const starLength = review.stars || 4;
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
        <SwiperSlide className="card testimonialCardContainer" key={review._id}>
          <div className="card-body d-flex flex-column  text-start  py-4 px-5">
            <ul className="list-unstyled d-flex">{stars}</ul>
            <p className="my-3 testimonialReview f20 wow animate__animated animate__fadeInRight">
              {review.description}
            </p>
            <div className="testimonialProfileContainer d-flex align-items-center gap-4">
              <div className="d-flex justify-content-center">
                <img
                  src={review.profilePic}
                  alt="profile"
                  className="rounded-circle"
                />
              </div>
              <div className="testimonialProfile">
                <h5 className="font-weight-bold mb-0 text-capitalize">
                  {review.clientName}
                </h5>
                <h6 className="font-weight-bold my-1 text-uppercase">
                  {review.position}
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  return (
    <div className="testimonialsSwiper container py-5 text-center d-flex flex-column align-items-center justify-content-center wow animate__animated animate__fadeIn">
      <p className="mt-2 mt-md-5 firstBlue">Testimonials</p>
      <p className="f38 wow animate__animated animate__fadeInLeft">
        What Clients Say
      </p>
      <p className="f20 container wow animate__animated animate__fadeInRight wow animate__animated animate__fadeInRight">
        This slide covers the client testimonials and what our customers have to
        say about our company and its services to understand the company’s
        market reputation.
      </p>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper wow animate__animated animate__fadeIn"
        spaceBetween={5}
        id="testimonialSwiper"
      >
        {mapTestimonialsReview}
        <div className="testimonialBlur position-absolute"></div>
      </Swiper>
      <Button linkPath={"/testimonials"} />
    </div>
  );
};

export default TestimonialReview;

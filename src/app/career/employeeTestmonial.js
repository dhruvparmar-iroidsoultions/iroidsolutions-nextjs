"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const EmployeeTestmonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dhruv Parmar",
      position: "frontend developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis, asperiores explicabo blanditiis provident repellendus aperiam enim voluptas, optio ut minus obcaecati ratione quae debitis laboriosam tenetur. Fugit, quidem nostrum?",
    },
    {
      id: 2,
      name: "Dhruv Parmar",
      position: "frontend developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis, asperiores explicabo blanditiis provident repellendus aperiam enim voluptas, optio ut minus obcaecati ratione quae debitis laboriosam tenetur. Fugit, quidem nostrum?",
    },
    {
      id: 3,
      name: "Dhruv Parmar",
      position: "frontend developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis, asperiores explicabo blanditiis provident repellendus aperiam enim voluptas, optio ut minus obcaecati ratione quae debitis laboriosam tenetur. Fugit, quidem nostrum?",
    },
    {
      id: 4,
      name: "Dhruv Parmar",
      position: "frontend developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis, asperiores explicabo blanditiis provident repellendus aperiam enim voluptas, optio ut minus obcaecati ratione quae debitis laboriosam tenetur. Fugit, quidem nostrum?",
    },
    {
      id: 5,
      name: "Dhruv Parmar",
      position: "frontend developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis, asperiores explicabo blanditiis provident repellendus aperiam enim voluptas, optio ut minus obcaecati ratione quae debitis laboriosam tenetur. Fugit, quidem nostrum?",
    },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper py-5 wow animate__animated animate__fadeIn"
        spaceBetween={20}
        id="testimonialSwiper"
      >
        {testimonials.map((review) => {
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
            <SwiperSlide
              className="card testimonialCardContainer"
              key={review.id}
            >
              <div className="card-body d-flex flex-column text-start me-lg-5 py-2 py-md-4 px-5">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <ul className="list-unstyled d-flex">{stars}</ul>
                  <Image
                    src={"/quote-up-right.svg"}
                    alt=""
                    width={55}
                    height={55}
                  />
                </div>
                <p className="my-3 testimonialReview f20 wow animate__animated animate__fadeInRight">
                  “{review.description}”
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
                      {review.name}
                    </h5>
                    <h6 className="font-weight-bold my-1 text-uppercase">
                      {review.position}
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="testimonialBlur position-absolute"></div>
      </Swiper>
    </div>
  );
};

export default EmployeeTestmonial;
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../button";
import Card from "../card";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Blogs = ({ blogs = [], show = true }) => {
  const removeTags = (html) => {
    const cleanText = html.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const prevSlide = () => {
    document
      .getElementById("home-blogs-swiper")
      ?.getElementsByClassName("swiper-button-prev")[0]
      .click();
  };

  const nextSlide = () => {
    document
      .getElementById("home-blogs-swiper")
      ?.getElementsByClassName("swiper-button-next")[0]
      ?.click();
  };

  const mapBlog = blogs.map((blog) => (
    <SwiperSlide
      className="bg-transparent p-3 p-md-0 d-flex align-items-center justify-content-center blog-slide"
      key={blog.id}
    >
      <Card
        cardOfClass={"blog"}
        cardText={blog.title}
        cardTitle={removeTags(blog.description)}
        // img={blog.thumbnail}
        img={"/blogImg1.png"}
        textStyle={"fs-4 fw-semibold"}
        titlestyle={"fs-5 fw-medium lh-base opacity-75"}
        readMore={true}
        readMoreLink={`/blog/${blog.slug}`}
      />
    </SwiperSlide>
  ));
  return (
    <div className="w-100 p-0 home-blogs-main-container">
      <div className="home-blogs-container">
        <div className="container text-center d-flex flex-column align-items-center">
          {show && <p className="mt-3 mt-md-5 fs-4 fw-semibold">Blogs</p>}
          {show && (
            <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
              Strategies & Ideas To Help Your Business Succeed!
            </p>
          )}
          {show && (
            <p className="f20 fs-5 fw-medium mb-3 mb-md-0 wow animate__animated animate__fadeInRight">
              "Each blog post is a stepping stone on our journey of growth,
              providing us with inspiration, guidance, and the latest trends in
              the ever-evolving tech landscape."
            </p>
          )}
          <div className="iwsButtons w-100 p-0 position-relative">
            <button
              className="position-absolute top-50 start-0 translate-middle-y d-flex align-items-center justify-content-center border border-0 z-3"
              onClick={prevSlide}
            >
              <img src={"/swiper-left-arrow.png"} alt="read more" />
            </button>
            <button
              className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center justify-content-center border border-0 z-3"
              onClick={nextSlide}
            >
              <img src={"/swiper-right-arrow.png"} alt="read more" />
            </button>
            <div className="home-blogs-container">
              <Swiper
                loop={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className="home-blogs-swiper blogs px-5 py-0 wow animate__animated animate__fadeIn"
                data-wow-duration="2s"
                slideActiveClass="home-blogs-active-slide"
                slidesPerView={1}
                // spaceBetween={50}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                    // spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 2,
                    // spaceBetween: 60,
                  },
                }}
                id="home-blogs-swiper"
              >
                {mapBlog}
              </Swiper>
            </div>
          </div>
          <Button linkPath="/blog" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;

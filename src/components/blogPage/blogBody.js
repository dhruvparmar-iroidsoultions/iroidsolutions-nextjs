"use client";

import { Fragment, useState } from "react";
import "./blogbody.css";
import TransitionGroupComponent from "../react-transition-group";
import WhyChoose from "../whyChooseUs";
import Quote from "../quote";

const BlogBody = ({ post }) => {
  console.log(post);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? post.clientComment.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === post.clientComment.length - 1 ? 0 : prevIndex + 1
    );
  };
  const slider =
    post && post.clientComment ? post.clientComment[currentSlideIndex] : null;
  return (
    <div className="container pt-5 wow animate__animated animate__fadeIn">
      <div
        className="blogTopLine pt-5 d-flex align-items-center justify-content-between wow animate__animated animate__fadeIn"
        data-wow-delay="0.5s"
      >
        <p>
          {post.postDate} - Written by <span>{post.postBy}</span>
        </p>
        <p>{post.postOn}</p>
      </div>
      <p
        className="blogTitle d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-1 wow animate__animated animate__fadeIn"
        data-wow-delay="0.5s"
      >
        <h1>{post.topic}</h1>
        <div className="shareIcons d-flex align-items-center justify-content-md-between gap-5 gap-md-3 my-3 my-md-0 ms-lg-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-share-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
          </svg>
        </div>
      </p>
      <div className="blogImg w-100 mt-3 mb-5 d-flex align-items-center justify-content-center rounded-4 overflow-hidden">
        <img src={"/demoBlog.webp"} alt="" className="w-100" />
      </div>
      <div className="blogContentContainer my-5 mx-auto wow animate__animated animate__fadeIn">
        {post.subTopic.map((topic, idx) => {
          return (
            <div className="blogTopic" key={idx}>
              <div className="card-body">
                <h5 className="card-title">{topic.title}</h5>
                {topic.description.map((desc, idx) => (
                  <p className="card-text" key={idx}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-center twoColor my-5 wow animate__animated animate__fadeIn">
        Latest <span>Blogs</span>
      </h1>
      {post.latestBlogs.map((blog, idx) => (
        <Fragment key={idx}>
          <div className="latestBlog w-100 my-2 my-md-5 wow animate__animated animate__fadeIn">
            <h1>{blog.topic}</h1>
            <p>{blog.text}</p>
            <img src={"/demoBlog.webp"} alt="" className="" />
          </div>
          {idx !== post.latestBlogs.length - 1 && <hr />}
        </Fragment>
      ))}
      <div className="clientComment py-5 wow animate__animated animate__fadeIn">
        <h1 className="twoColor text-center my-5">
          What Our <span>Clients Says</span>
        </h1>
        <div className="iwsInfo d-flex flex-column-reverse flex-lg-row  text-start wow animate__animated animate__fadeInUp">
          <div className="iwsInfoLeft d-flex flex-column justify-content-evenly overflow-hidden">
            <div className="ccHeader d-flex align-items-center justify-content-between gap-3">
              <div className="clientProfile d-flex align-items-center gap-4">
                <TransitionGroupComponent currentSlideIndex={currentSlideIndex}>
                  <img src={slider.img} alt="" />
                </TransitionGroupComponent>
                <TransitionGroupComponent currentSlideIndex={currentSlideIndex}>
                  <p className="m-0"> {slider.name}</p>
                </TransitionGroupComponent>
              </div>
              <img
                src={"/quote.svg"}
                alt=""
                className="d-none d-sm-block me-sm-1"
              />
            </div>
            <TransitionGroupComponent currentSlideIndex={currentSlideIndex}>
              <p className="iwsText my-3 mb-5">{slider.comment}</p>
            </TransitionGroupComponent>
            <div className="iwsButtons mb-3 d-flex align-items-center justify-content-between justify-content-lg-start gap-3">
              <button className="prevBtn" onClick={goToPreviousSlide}>
                <img src={"/read more.png"} alt="read more" />
              </button>
              <button className="nextBtn" onClick={goToNextSlide}>
                <img src={"/read more.png"} alt="read more" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ourInsights">
        <h1 className="twoColor text-center my-5 wow animate__animated animate__fadeIn">
          Our <span>Insights</span>
        </h1>
        <WhyChoose line={false} />
        <Quote />
      </div>
    </div>
  );
};

export default BlogBody;

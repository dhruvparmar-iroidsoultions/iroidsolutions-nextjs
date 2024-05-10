"use client";

import { useState } from "react";
import "./index.css";

const Quote = () => {
  const [contactDetail, setContactDetail] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setContactDetail({
      ...contactDetail,
      [name]: value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(contactDetail);
    setContactDetail({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div
      className="quote container text-center p-0 wow animate__animated animate__fadeIn"
      data-wow-delay="0.5s"
    >
      <h1 className="mt-5 mb-2">
        Get a quote <span>now!</span>
      </h1>
      <p>Connect with us for your requirements or queries.</p>
      <div className="p-0 px-md-5 d-flex flex-wrap flex-lg-nowrap flex-column flex-lg-row align-items-center justify-content-evenly">
        <img src={"/quote image.svg"} alt="" id="formUserImg" />
        <form className="mb-5 my-lg-5" onSubmit={onSubmit}>
          <div className="input-group position-relative mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name*"
              aria-label="Your Name*"
              aria-describedby="addon-wrapping"
              name="name"
              value={contactDetail.name}
              onChange={onChange}
            />
            <img src={"/Profile.svg"} alt="userPic" />
          </div>
          <div className="input-group position-relative mb-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email*"
              aria-label="Email*"
              aria-describedby="addon-wrapping"
              name="email"
              value={contactDetail.email}
              onChange={onChange}
            />
            <img src={"/formMessage.svg"} alt="mailPic" />
          </div>
          <div className="input-group position-relative mb-4">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number (optional)"
              aria-label="Phone number (optional)"
              aria-describedby="addon-wrapping"
              name="phone"
              value={contactDetail.phone}
              onChange={onChange}
            />
            <img src={"/formCalling.svg"} alt="phonePic" />
          </div>
          <div className="input-group position-relative mb-4">
            <textarea
              className="form-control"
              rows="4"
              placeholder="How can we help you?"
              name="message"
              value={contactDetail.message}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="input-group">
            <button type="submit" className="form-control">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;

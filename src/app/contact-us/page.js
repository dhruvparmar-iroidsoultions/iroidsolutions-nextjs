"use client";

import "./page.css";
import TopBg from "@/components/topBg";
import Link from "next/link";
import { useState } from "react";

const ContactUs = () => {
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
    <>
      <TopBg
        state={"Contact Us"}
        text={
          "Share a brief about your amazing project and Within one working day, we will get in touch with you"
        }
      />
      <div className="container conDetail text-center py-3 py-lg-5 p-0 mb-5">
        <p
          className="my-5 wow animate__animated animate__fadeInUp"
          data-wow-duration="2s"
        >
          <span>Let's bring</span> your dream into reality together.
        </p>
        <div className="text-center d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between row-gap-5 gap-md-5 gap-lg-0">
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1s"
          >
            <figure className="contactFigure ">
              <img className="mt-4 mb-5" src={"/Calling.svg"} alt="call" />
              <figcaption className="m-0">Phone/Whatsapp</figcaption>
            </figure>
            <Link href="tel:+917778869939">+ 91 77788 69939 (Sales)</Link>
            <br />
            <Link href="tel:+919023868898">+ 91 90238 68898 (HR)</Link>
          </div>
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1.3s"
          >
            <figure className="contactFigure wow animate__animated animate__fadeInUp">
              <img className="mt-4 mb-5" src={"/Skype.svg"} alt="call" />
              <figcaption className="m-0">Skype</figcaption>
            </figure>
            <Link href="skype:daxeshpatel7224">daxeshpatel7224</Link>
          </div>
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1.6s"
          >
            <figure className="contactFigure ">
              <img className="mt-4 mb-5" src={"/Message.svg"} alt="call" />
              <figcaption className="m-0">Email</figcaption>
            </figure>
            <Link href="mailto:business@iroidsolutions.in">
              business@iroidsolutions.in (Sales)
            </Link>
            <br />
            <Link href="mailto:hr@iroidsolutions.in">
              hr@iroidsolutions.in (HR)
            </Link>
          </div>
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1.9s"
          >
            <figure className="contactFigure">
              <img className="mt-4 mb-5" src={"/Location.svg"} alt="call" />
              <figcaption className="m-0">Address</figcaption>
            </figure>
            <p className="mx-2">
              318 A/318 B, Fortune High Street, Opp. Western Arena , Nr.
              Madhuvan Circle, LP Savani Rd, Adajan, Surat, Gujarat 395009
            </p>
          </div>
        </div>
      </div>
      <div className="contactUs container d-flex flex-column align-items-center justify-content-center text-center p-0 ">
        <p
          className="wow animate__animated animate__fadeInUp"
          data-wow-duration="1s"
        >
          <span>Contact </span>Us
        </p>
        <p
          className="mt-sm-4 mb-5 px-2 wow animate__animated animate__fadeInUp"
          data-wow-duration="1s"
        >
          If you are looking for a solid partner for your projects, send us an
          email. We'd love to talk to you!
        </p>
        <div
          className="map container p-0 d-flex flex-wrap align-items-center justify-content-center wow animate__animated animate__fadeInUp"
          data-wow-duration="1s"
        >
          <form onSubmit={onSubmit}>
            <div className="input-group d-flex flex-column text-start ">
              <p>Get a quote now!</p>
              <p>Connect with us for your requirements or queries.</p>
            </div>
            <div className="my-5">
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
              <div className="input-group position-relative">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="How can we help you?"
                  name="message"
                  value={contactDetail.message}
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
            <div className="input-group">
              <button type="submit" className="form-control">
                Send Message
              </button>
            </div>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.033194103235!2d72.78307547600137!3d21.19084028219047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7ad68cf639%3A0xbee15723022b9fe1!2siRoid%20Solutions%20-%20Best%20IT%20company%20in%20India%20%7C%20Android%20%26%20iOS%20App%20Development!5e0!3m2!1sen!2sin!4v1707222712449!5m2!1sen!2sin"
            width="600"
            height="750"
            style={{ border: 0 }}
            title="iROId Solutions Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

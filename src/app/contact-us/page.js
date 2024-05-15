"use client";

import axiosApi from "@/api/axiosConfig";
import "./page.css";
import TopBg from "@/components/topBg";
import FormValidInput from "@/components/validInput";
import Link from "next/link";
import { useState } from "react";
import ScrollerLine from "@/components/home/project-scroller";
import ContactUsComp from "@/components/contactUs/";

const ContactUs = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageSending, setIsMessageSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [contactDetail, setContactDetail] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errClass, setErrClass] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setContactDetail({
      ...contactDetail,
      [name]: value,
    });
    setErrClass({
      ...errClass,
      [name]: value.trim() === "",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const error = {};
    const fieldsToValidate = ["name", "email", "phone", "message"];

    fieldsToValidate.forEach((field) => {
      if (contactDetail[field].trim() === "") {
        error[field] = true;
      }
    });
    setErrClass(error);
    const hasErrors = Object.keys(error).length > 0;
    if (!hasErrors) {
      try {
        setIsMessageSent(false);
        setIsMessageSending(true);

        const response = await axiosApi.post("/contact-us", contactDetail);
        if (response.status === 200) {
          setContactDetail({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setIsMessageSent(true);
          setTimeout(() => {
            setIsMessageSending(false);
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        setIsMessageSent(false);
        setErrorMessage(true);
        setIsMessageSending(false);
        setTimeout(() => {
          setErrorMessage(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <TopBg
        state={"Contact iRoid Solutions"}
        text={
          "Discover possibilities: Reach out today to initiate a game-changing project discussion. Your vision, our expertise! Anticipate a response within one workday."
        }
      />
      <div className="container conDetail text-center py-3 py-lg-5 p-0 mb-5">
        <h1
          className="fw-semibold mt-3 mt-lg-5 lh-base wow animate__animated animate__fadeInUp"
          data-wow-duration="2s"
        >
          Let’s Bring Your Dream Into Reality Together.
        </h1>
        <h5
          className="fw-medium mb-3 mb-lg-5 text-00000099 lh-base wow animate__animated animate__fadeInUp"
          data-wow-duration="2s"
        >
          If you are looking for a solid partner for your projects, send us an
          email. We'd love to talk to you!
        </h5>
        <div className="text-center figure-main-con px-2 px-sm-0">
          {/* <div className="text-center figure-main-con d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between row-gap-5 gap-md-5 gap-lg-3"> */}
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1s"
          >
            <figure className="contactFigure ">
              <img className="mt-3 mb-4" src={"/Calling.svg"} alt="call" />
              <figcaption className="m-0">Phone/Whatsapp</figcaption>
            </figure>
            {/* <br className="d-none" /> */}
            <p className="mb-3">
              <Link href="tel:+917778869939">+ 91 77788 69939 (Sales)</Link>
            </p>
            <p>
              <Link href="tel:+919023868898">+ 91 90238 68898 (HR)</Link>
            </p>
          </div>
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1.3s"
          >
            <figure className="contactFigure wow animate__animated animate__fadeInUp">
              <img className="mt-3 mb-4" src={"/Skype.svg"} alt="call" />
              <figcaption className="m-0">Skype</figcaption>
            </figure>
            <p>
              <Link href="skype:daxeshpatel7224">daxeshpatel7224</Link>
            </p>
          </div>
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1.6s"
          >
            <figure className="contactFigure ">
              <img className="mt-3 mb-4" src={"/Message.svg"} alt="call" />
              <figcaption className="m-0">Email</figcaption>
            </figure>
            <p>
              <Link href="mailto:business@iroidsolutions.in">
                business@iroidsolutions.in (Business)
              </Link>
            </p>
            <p>
              <Link href="mailto:hr@iroidsolutions.in">
                hr@iroidsolutions.in (HR)
              </Link>
            </p>
          </div>
          <div
            className="figureContainer wow animate__animated animate__fadeInUp"
            // data-wow-duration="2s"
            data-wow-delay="1.9s"
          >
            <figure className="contactFigure">
              <img className="mt-3 mb-4" src={"/Location.svg"} alt="call" />
              <figcaption className="m-0">Address</figcaption>
            </figure>
            <p className="mx-2">
              318 A/318 B, Fortune High Street, Opp. Western Arena , Nr.
              Madhuvan Circle, LP Savani Rd, Adajan, Surat, Gujarat 395009
            </p>
          </div>
        </div>
      </div>
      <ScrollerLine />
      <ContactUsComp change={true} />
    </>
  );
};

export default ContactUs;

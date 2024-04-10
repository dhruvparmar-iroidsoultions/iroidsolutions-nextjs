"use client";

import axiosApi from "@/api/axiosConfig";
import FormValidInput from "@/components/validInput";
import axios from "axios";
import { useState } from "react";

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
      if (
        typeof contactDetail[field] === "string" &&
        contactDetail[field].trim() === ""
      ) {
        error[field] = true;
      }
    });
    setErrClass(error);
    const hasErrors = Object.keys(error).length > 0;
    if (!hasErrors) {
      try {
        setIsMessageSent(false);
        setIsMessageSending(true);

        const response = await axiosApi.post("contact-us", contactDetail);
        console.log(response);
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
    <div
      className="homeContactUs w-100 d-flex flex-column align-items-center my-5 position-relative wow animate__animated animate__fadeIn"
      data-wow-duration="2s"
    >
      <img src={"/bgTopLeft.svg"} alt="" className="wwr-bg" />
      <img src={"/bgBottomLeft.svg"} alt="" className="wwr-bg" />
      <img src={"/bgTopRight.svg"} alt="" className="wwr-bg" />
      <img src={"/bgBottomRight.svg"} alt="" className="wwr-bg" />
      <p className="mt-5 firstBlue">Contact Us</p>
      <p className="f38 text-center wow animate__animated animate__fadeInLeft">
        Get in Touch With Us
      </p>
      <p className="f20 mb-5 text-center wow animate__animated animate__fadeInRight">
        Connect with us for your requirements or queries.
      </p>
      <div className="container d-flex flex-column flex-lg-row py-5 mb-5">
        <div className="p-0 mx-auto d-flex flex-column justify-content-evenly gap-4 gap-xl-0 flexElem">
          <div className="d-flex align-start gap-4 gap-sm-5">
            <img src={"/location.png"} alt="" className="" />
            <div className="row conContainer">
              <h3 className=" p-0 f20 wow animate__animated animate__fadeInRight">
                Visit Us:
              </h3>
              <p className=" p-0 lText mb-0">
                318 A/318 B, Fortune High Street, Opp. Western Arena , Nr.
                Madhuvan Circle, LP Savani Rd, Adajan, Surat, Gujarat 395009
              </p>
            </div>
          </div>
          <div className="d-flex align-start gap-4 gap-sm-5">
            <img src={"/email.png"} alt="" className="col p-0" />
            <div className="row conContainer">
              <h3 className=" p-0 f20 wow animate__animated animate__fadeInRight">
                Mail Us:
              </h3>
              <p className=" p-0 lText mb-0">hr@iroidsolutions.in (HR)</p>
              <p className=" p-0 lText mb-0">
                business@iroidsolutions.in (Business)
              </p>
            </div>
          </div>
          <div className="d-flex align-start gap-4 gap-sm-5 ">
            <img src={"/phone.png"} alt="" className="" />
            <div className="row conContainer">
              <h3 className=" p-0 f20  wow animate__animated animate__fadeInRight">
                Phone Us:
              </h3>
              <p className=" p-0 lText mb-0">+ 91 90238 68898 (HR)</p>
              <p className=" p-0 lText mb-0">+ 91 77788 69939 (Business)</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flexElem" noValidate>
          <div className="my-5">
            <FormValidInput
              placeholder={"Name"}
              name={"name"}
              value={contactDetail.name}
              onChange={onChange}
              img={"/Profile.svg"}
              alt="mailPic"
              errClass={errClass.name}
              isRequired={true}
              invalidMessage={"Name is required"}
            />
            <FormValidInput
              type={"email"}
              placeholder={"Email"}
              name={"email"}
              value={contactDetail.email}
              onChange={onChange}
              img={"/formMessage.svg"}
              alt="mailPic"
              errClass={errClass.email}
              isRequired={true}
              invalidMessage={"Email is required"}
            />

            <FormValidInput
              type="number"
              placeholder="Phone number"
              name="phone"
              value={contactDetail.phone}
              onChange={onChange}
              img={"/formCalling.svg"}
              alt="phonePic"
              errClass={errClass.phone}
              isRequired={true}
              invalidMessage={"Phone Number is required"}
            />

            <div className="input-group position-relative mb-4">
              <div className="col">
                <textarea
                  className={`form-control ${
                    errClass.message ? "is-invalid" : ""
                  }`}
                  rows="4"
                  placeholder="How can we help you?"
                  name="message"
                  value={contactDetail.message}
                  onChange={onChange}
                ></textarea>
                <div
                  className={`invalid-feedback ${
                    errClass.message ? "d-block" : ""
                  }`}
                >
                  Message is Required
                </div>
              </div>
            </div>
            {/* <FormValidInput
              type="file"
              placeholder="Drag & Drop to Upload"
              name="attechment"
              onChange={onFileChange}
              isRequired={true}
              errClass={errClass.attechment}
              invalidMessage={"File is required"}
            /> */}
          </div>
          <div className="input-group">
            <button
              type="submit"
              className={`form-control mt-lg-5 ${
                isMessageSending ? "sendingMessage" : "sendMessage"
              }`}
              disabled={isMessageSending}
            >
              {isMessageSending &&
                (isMessageSent ? "Message Sent" : "sending...")}
              {!isMessageSending && !errorMessage && "Send Message"}
              {errorMessage && "Something Wrong, Message Not Sent"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

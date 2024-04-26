"use client";

import axiosApi from "@/api/axiosConfig";
import FormValidInput from "@/components/validInput";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./index.css";

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
  const phoneChange = (e) => {
    setContactDetail({ ...contactDetail, phone: e });
    setErrClass({
      ...errClass,
      phone: e.trim() === "" || e.length < 3,
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

        const response = await axiosApi.post("contact-us", contactDetail);
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
      className="homeContactUs text-start w-100 d-flex flex-column align-items-center p-1 my-md-5 position-relative wow animate__animated animate__fadeIn"
      data-wow-duration="2s"
    >
      <p className="mt-5 mb-0 mb-sm-2 mb-md-3 fs-4 fw-semibold">Contact Us</p>
      <p className="text-005490 fs-1 fw-bolder text-center wow animate__animated animate__fadeInLeft">
        Get in Touch With Us
      </p>
      <p className="f20 fs-5 fw-medium mb-md-5 text-center wow animate__animated animate__fadeInRight">
        If you are looking for a solid partner for your projects, send us an
        email. We'd love to talk to you!
      </p>
      <div className="container homeContact d-flex flex-column flex-lg-row py-5 mb-5 mb-lg-0 rounded-5">
        <div className="px-1 px-sm-3 px-md-5 mx-auto d-flex flex-column justify-content-evenly gap-4 gap-xl-0 flexElem">
          <h1 className="fw-bolder m-0">
            Let’s Discuss on Something
            <span className="text-005490"> Cool </span>
            Together {""}
            <span>
              <Image
                src={"/service-bullet.png"}
                alt=""
                width={30}
                height={30}
              />
            </span>
          </h1>
          <div className="position-relative w-100">
            <hr className="mt-0 position-absolute w-100 top-0 opacity-25" />
          </div>
          <div className="d-flex align-start  gap-2 gap-sm-4">
            <Image
              className="w-100 h-100"
              src={"/n-call.png"}
              alt=""
              width={100}
              height={100}
            />
            <div className="conContainer">
              <p className=" p-0 fs-6 fw-medium mb-2">+ 91 90238 68898 (HR)</p>
              <p className=" p-0 fs-6 fw-medium mb-2">
                + 91 77788 69939 (Business)
              </p>
            </div>
          </div>
          <div className="d-flex align-start  gap-2 gap-sm-4">
            <Image
              className="w-100 h-100"
              src={"/n-email.png"}
              alt=""
              width={100}
              height={100}
            />
            <div className="conContainer">
              <p className=" p-0 fs-6 fw-medium mb-2">
                hr@iroidsolutions.in (HR)
              </p>
              <p className=" p-0 fs-6 fw-medium mb-2">
                business@iroidsolutions.in (Business)
              </p>
            </div>
          </div>
          <div className="d-flex align-start  gap-2 gap-sm-4">
            <Image
              className="w-100 h-100"
              src={"/n-location.png"}
              alt=""
              width={100}
              height={100}
            />
            <div className="conContainer">
              <p className=" p-0 fs-6 fw-medium mb-2">
                318 A/318 B, Fortune High Street, Opp. Western Arena , Nr.
                Madhuvan Circle, LP Savani Rd, Adajan, Surat, Gujarat 395009
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flexElem mt-3 mt-lg-0 px-2 px-sm-3 px-md-5 bg-white rounded-5"
          noValidate
        >
          <p className="fs-4 fw-medium text-center text-black my-3 my-md-5">
            Reach out to us!
          </p>
          <div className="">
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
            <div className="input-group position-relative mb-4">
              <div className="w-100">
                <PhoneInput
                  country={"in"}
                  placeholder="Phone Number"
                  value={contactDetail.phone}
                  onChange={phoneChange}
                  isValid={true}
                  containerClass={`position-relative ${
                    errClass.phone ? "phoneErr" : ""
                  }`}
                  inputClass={`w-100 py-4 fs-medium`}
                  searchClass="d-flex align-items-center"
                  enableSearch
                  specialLabel=""
                />
                <div
                  className={`invalid-feedback ${
                    errClass.phone ? "d-block" : ""
                  }`}
                >
                  Phone is Required
                </div>
              </div>
            </div>

            {/* <FormValidInput
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
            /> */}

            <div className="input-group position-relative mb-4">
              <div className="w-100">
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
              className={`form-control rounded-3 fs-5 fw-semibold mb-4 ${
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

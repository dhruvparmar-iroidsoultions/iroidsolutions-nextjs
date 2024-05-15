"use client";

import axiosApi from "@/api/axiosConfig";
import FormValidInput from "@/components/validInput";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./index.css";
import Link from "next/link";

const ContactUs = ({ change }) => {
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
    <div
      className="homeContactUs text-start w-100 d-flex flex-column align-items-center p-1 my-md-5 position-relative wow animate__animated animate__fadeIn"
      data-wow-duration="2s"
      id="contact-us"
    >
      <p className="mt-5 mb-0 mb-sm-2 mb-md-3 fs-4 fw-semibold">Contact Us</p>
      <p className="text-005490 fs-1 fw-bolder text-center wow animate__animated animate__fadeInLeft">
        Get in Touch With Us
      </p>
      <p
        className="fs-5 fw-medium opacity-75 mb-md-5 text-center wow animate__animated animate__fadeInRight"
        style={{ maxWidth: "720px" }}
      >
        If you are looking for a solid partner for your projects, send us an
        email. We'd love to talk to you!
      </p>
      <div className="container homeContact d-flex flex-column flex-lg-row gap-3 gap-lg-5 p-5 mb-5 mb-lg-0 rounded-5">
        {!change && (
          <div className="c-details mx-lg-auto flexElem py-lg-5 d-flex flex-column justify-content-between">
            <div className="px-1 px-sm-3 px-md-5 mx-lg-0 d-flex flex-column gap-2 gap-lg-4 gap-xl-0">
              <p className="fs-3 fw-semibold text-005490 lh-base mt-2 mt-lg-0 mb-0">
                Need a mobile app or website?
              </p>
              <p className="fs-4 fw-medium text-00000099">
                Get a free consultation!{" "}
                <span>
                  <Image
                    src={"/new-contact-star.png"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </span>
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href={"tel:+917778869939"}>
                  <Image
                    className="w-100 h-100"
                    src={"/n-call.png"}
                    alt="call"
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href={"https://wa.me/+917778869939"} target="_blank">
                  <Image
                    className="w-100 h-100"
                    src={"/n-whatsapp.png"}
                    alt="whatsapp"
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href={"mailto:business@iroidsolutions.in"}>
                  <Image
                    className="w-100 h-100"
                    src={"/n-email.png"}
                    alt="email"
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href={"skype:daxeshpatel7224?chat"}>
                  <Image
                    className="w-100 h-100"
                    src={"/n-skype.png"}
                    alt="skype"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
            <div className="px-1 px-sm-3 px-md-5 mx-lg-0 d-flex flex-column gap-2 gap-lg-4 gap-xl-0">
              <p className="fs-3 fw-semibold text-005490 lh-base mt-2 mt-lg-0 mb-0">
                Passionate about mobile apps & website?
              </p>
              <p className="fs-4 fw-medium text-00000099">
                Join our growing team!{" "}
                <span>
                  <Image
                    src={"/new-contact-star.png"}
                    alt=""
                    width={30}
                    height={30}
                  />
                </span>
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href={"tel:+919023868898"}>
                  <Image
                    className="w-100 h-100"
                    src={"/n-call.png"}
                    alt="call"
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href={"https://wa.me/+919023868898"} target="_blank">
                  <Image
                    className="w-100 h-100"
                    src={"/n-whatsapp.png"}
                    alt="whatsapp"
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href={"mailto:hr@iroidsolutions.in"}>
                  <Image
                    className="w-100 h-100"
                    src={"/n-email.png"}
                    alt="email"
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
        {change && (
          <div className="c-us-p-map-con d-flex flex-column justify-content-between change-flex">
            <h1 className="fw-bolder lh-base">
              Let’s Discuss on Something{" "}
              <span className="text-005490">Cool</span> Together{" "}
              <Image
                src={"/new-contact-star.png"}
                alt=""
                width={30}
                height={30}
              />
            </h1>
            <hr className="c-hr my-3 mt-lg-5 mb-lg-4" />
            <iframe
              className="c-us-p-map rounded-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.033194103235!2d72.78307547600137!3d21.19084028219047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e7ad68cf639%3A0xbee15723022b9fe1!2siRoid%20Solutions%20-%20Best%20IT%20company%20in%20India%20%7C%20Android%20%26%20iOS%20App%20Development!5e0!3m2!1sen!2sin!4v1707222712449!5m2!1sen!2sin"
              width="600"
              height="440"
              style={{ border: 0 }}
              title="iROId Solutions Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
        <form
          onSubmit={onSubmit}
          className="c-details mx-lg-auto flexElem mt-3 mt-lg-0 px-2 mx-sm-3 px-md-5 bg-white rounded-5 "
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

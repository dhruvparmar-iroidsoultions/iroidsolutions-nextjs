"use client";

import { useState } from "react";
import FormValidInput from "../validInput";
import PhoneInput from "react-phone-input-2";
import "./index.css";
import axiosApi from "@/api/axiosConfig";

const ApplyJobModal = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isMessageSending, setIsMessageSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [contactDetail, setContactDetail] = useState({
    name: "",
    email: "",
    phonenumber: "",
    cvv: null,
    career: 1,
  });
  const [errClass, setErrClass] = useState({
    name: false,
    email: false,
    phonenumber: false,
    cvv: false,
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

  const onFileChange = (e) => {
    const { name, files } = e.target;

    setContactDetail({
      ...contactDetail,
      [name]: files[0],
    });
  };

  const cancel = () => {
    setErrClass({ name: false, email: false, phonenumber: false, cvv: false });
  };

  const phoneChange = (e) => {
    setContactDetail({ ...contactDetail, phonenumber: e });
    setErrClass({
      ...errClass,
      phone: e.trim() === "" || e.length < 3,
    });
  };

  const onSubmit = async (e) => {
    console.log(contactDetail);
    e.preventDefault();
    const error = {};
    const fieldsToValidate = ["name", "email", "phonenumber", "cvv"];

    fieldsToValidate.forEach((field) => {
      if (field === "cvv") {
        if (!contactDetail[field]) {
          error[field] = true;
        }
      } else if (contactDetail[field].trim() === "") {
        error[field] = true;
      }
    });

    setErrClass(error);
    const hasErrors = Object.keys(error).length > 0;
    if (!hasErrors) {
      try {
        setIsMessageSent(false);
        setIsMessageSending(true);

        const response = await axiosApi.post("/job", contactDetail, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // const response = await axios.post(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}job`,
        //   contactDetail,
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
        // );

        if (response.status === 200) {
          setContactDetail({
            name: "",
            email: "",
            phonenumber: "",
            cvv: null,
            career: 1,
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
      className="modal fade"
      id="applyModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="applyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered d-flex flex-column align-items-center justify-content-center applyForm-container-modal">
        <div className="modal-content d-flex flex-column align-items-center justify-content-center position-relative rounded-5 overflow-hidden px-2 px-lg-5">
          <div className="py-3 py-sm-5 px-3 px-sm-5 w-100">
            <p className="text-center fs-6 fw-medium">Job Application Form</p>
            <form onSubmit={onSubmit} className="" noValidate>
              <FormValidInput
                placeholder={"Your Name*"}
                name={"name"}
                value={contactDetail.name}
                onChange={onChange}
                img={"/Profile.svg"}
                alt="mailPic"
                errClass={errClass.name}
                isRequired={true}
                invalidMessage={"Name is required"}
                extraInputClass={"ps-5 py-3 fs-6 rounded-4 apply-job-input"}
                imgClass={"position-absolute apply-job-img"}
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
                extraInputClass={"ps-5 py-3 fs-6 rounded-4 apply-job-input"}
                imgClass={"position-absolute apply-job-img"}
              />
              <div className="input-group position-relative">
                <div className="w-100">
                  <PhoneInput
                    country={"in"}
                    placeholder="Phone Number"
                    value={contactDetail.phonenumber}
                    onChange={phoneChange}
                    isValid={true}
                    containerClass={`position-relative ${
                      errClass.phone ? "phoneErr" : ""
                    }`}
                    inputClass={`w-100 py-4 fs-6 apply-job-input`}
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
              <FormValidInput
                type="file"
                placeholder="Drag & Drop to Upload"
                name="cvv"
                onChange={onFileChange}
                isRequired={true}
                errClass={errClass.cvv}
                id={"upload-file"}
                invalidMessage={"File is required"}
                extraInputClass={
                  "ps-5 py-3 fs-6 rounded-4 apply-job-input mt-4 d-none"
                }
                imgClass={"d-none"}
                extraErrorClass={"d-none"}
              />
              <button
                type="button"
                className="fs-6 fw-medium w-100 mb-4 py-3 rounded-3 border-0 d-flex align-items-center justify-content-center gap-2 apply-job-input"
                onClick={() => document.getElementById("upload-file").click()}
              >
                <img src="/upload-cv.png" alt="" />
                Uplaod CV
              </button>
              <div className="d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-between gap-2 gap-lg-5">
                <button
                  className="fs-6 fw-medium w-100 py-3 text-005490 rounded-3 border-0 apply-cancel-btn"
                  type="button"
                  id="closeModal"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  disabled={isMessageSending}
                  onClick={cancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`fs-6 fw-medium w-100 py-3 text-white rounded-3 border-0 apply-submit-btn ${
                    isMessageSending ? "sendingMessage" : "sendMessage"
                  }`}
                  disabled={isMessageSending}
                >
                  {isMessageSending &&
                    (isMessageSent ? "Application Sent" : "applying...")}
                  {!isMessageSending && !errorMessage && "Submit"}
                  {errorMessage && "Something Wrong"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobModal;

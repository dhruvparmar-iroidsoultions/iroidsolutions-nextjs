import React from "react";

const FormValidInput = ({
  colSpan,
  type,
  errClass,
  id,
  name,
  placeholder,
  value,
  onChange,
  isRequired,
  invalidMessage,
  extraInputClass,
  extraErrorClass,
  img,
  alt,
  imgClass,
}) => {
  return (
    <div className="input-group position-relative mb-4">
      <div className={`col-${colSpan || 12}`}>
        <div className="input-image position-relative">
          <input
            type={type || "text"}
            className={`form-control ${
              errClass ? "is-invalid" : ""
            } ${extraInputClass}`}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={isRequired}
          />
          <img className={imgClass} src={img} alt={alt || ""} />
        </div>
        <div
          className={`invalid-feedback ${
            errClass ? "d-block" : ""
          } ${extraErrorClass}`}
        >
          {invalidMessage}
        </div>
      </div>
    </div>
  );
};

export default FormValidInput;

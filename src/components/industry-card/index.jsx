import Image from "next/image";
import "./index.css";

const IndustryCard = ({ info, id, hoverdtitle = true }) => {
  return (
    <div className="row border-0 rounded-5 p-3 p-lg-5  text-start industry-info">
      <div className={`${id % 2 !== 0 ? "col-12 col-lg-5" : "d-lg-none"}`}>
        <div className="w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src={`${info.img}`}
            alt=""
            width={1200}
            height={400}
          />
        </div>
      </div>
      <div className="col-12 col-md">
        <p
          className={`fs-2 fw-semibold text-005490 mt-3 mt-lg-0 ${
            hoverdtitle ? "industry-title" : ""
          }`}
        >
          {info.industry}
        </p>
        <p className="fs-6 fw-medium m-0">{info.description}</p>
        <ul className={`ps-3 my-3 ${id === 4 ? "grid-0988" : ""}`}>
          {info.list?.map((l, idx) => (
            <li id={idx} className="ps-3 mb-2 fw-semibold fs-6">
              {l}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`d-none ${
          id % 2 === 0 ? "col-12 col-lg-5 d-lg-block " : "d-none"
        }`}
      >
        <div className="w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src={`${info.img}`}
            alt=""
            width={1200}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;

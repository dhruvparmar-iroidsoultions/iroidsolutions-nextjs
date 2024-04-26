import Image from "next/image";
import "./index.css";

const ServiceCard = ({ info, id }) => {
  return (
    <div className="row text-start service-info">
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
        <p className="px-3 fs-2 fw-semibold text-005490">{info.service}</p>
        <div className="p-3 rounded-4 service-info-header">
          <p className="fs-3 fw-semibold">{info.title}</p>
          <p className="fs-5 opacity-50 m-0">{info.subtitle}</p>
        </div>
        <ul className="my-3">
          {info.list.map((l, idx) => (
            <li id={idx} className="ps-3 mb-2 fw-semibold fs-6 opacity-75">
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

export default ServiceCard;

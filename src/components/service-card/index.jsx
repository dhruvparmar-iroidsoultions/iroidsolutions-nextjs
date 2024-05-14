import Image from "next/image";
import "./index.css";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  console.log(service);
  return service?.map((info) => (
    <div className="row text-start service-info" key={info.id}>
      <div className={`${info.id % 2 !== 0 ? "col-12 col-lg-5" : "d-lg-none"}`}>
        <div className="w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src={`${info.image}`}
            alt=""
            width={1200}
            height={400}
          />
        </div>
      </div>
      <div className="col-12 col-md">
        <p className="px-3 fs-2 fw-semibold text-005490">{info.category}</p>
        <div className="p-3 rounded-4 service-info-header">
          <p className="fs-3 fw-semibold">{info.title}</p>
          <p className="fs-5 opacity-50 m-0">{info.subtitle}</p>
        </div>
        <ul className="my-3">
          {info.development?.map((l, idx) => (
            <li id={idx} className="ps-3 mb-2" key={idx}>
              <Link
                href={`/services/${l.slug}`}
                className="fw-semibold fs-6 opacity-75 text-decoration-none text-dark"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`d-none ${
          info.id % 2 === 0 ? "col-12 col-lg-5 d-lg-block " : "d-none"
        }`}
      >
        <div className="w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src={`${info.image}`}
            alt=""
            width={1200}
            height={400}
          />
        </div>
      </div>
    </div>
  ));
};

export default ServiceCard;

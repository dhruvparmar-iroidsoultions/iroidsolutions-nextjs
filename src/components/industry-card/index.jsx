import Image from "next/image";
import "./index.css";
import Link from "next/link";

const IndustryCard = ({ info, id, hoverdtitle = true, link }) => {
  return (
    <div className="row border-0 rounded-5 p-3 p-lg-5  text-start industry-info">
      <div className={`${id % 2 !== 0 ? "col-12 col-lg-5" : "d-lg-none"}`}>
        <div className="w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src={`${info.thumbnail}`}
            alt=""
            width={1200}
            height={400}
          />
        </div>
      </div>
      <div className="col-12 col-md">
        {!link && (
          <p
            className={`fs-2 fw-semibold text-005490 mt-3 mt-lg-0 ${
              hoverdtitle ? "industry-title" : ""
            }`}
          >
            {info.name}
          </p>
        )}
        {link && (
          <Link
            href={`/solutions/${info.slug}`}
            className={`text-decoration-none`}
          >
            <p
              className={`fs-2 fw-semibold text-005490 mt-3 mt-lg-0 ${
                hoverdtitle ? "industry-title" : ""
              }`}
            >
              {info.name}
            </p>
          </Link>
        )}
        <div dangerouslySetInnerHTML={{ __html: info.description }} />
        {/* <p className="fs-6 fw-medium m-0">{info.description}</p> */}
        <ul className={`ps-3 my-3 ${id === 4 ? "grid-0988" : ""}`}>
          {info.subcategorie?.map((l, idx) => (
            <li id={idx} className="ps-3 mb-2 fw-semibold fs-6">
              {l.name}
            </li>
          ))}
        </ul>
        <div className="d-flex flex-wrap gap-2">
          {info.project_name?.split(",").map((item, idx) => (
            <p
              className="fs-6 fw-semibold border-0 px-3 py-1 rounded-3 text-005490 tags"
              key={idx}
            >
              {item.trim()}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`d-none ${
          id % 2 === 0 ? "col-12 col-lg-5 d-lg-block " : "d-none"
        }`}
      >
        <div className="w-100 h-100">
          <Image
            className="w-100 h-100 object-fit-cover rounded-4"
            src={`${info.thumbnail}`}
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

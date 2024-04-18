import Image from "next/image";

const Card = ({ cardOfClass, img, cardText, cardTitle, tag }) => {
  // const imgPath = img.replace(/uploads\\/g, "/");
  return (
    <div className={`${cardOfClass} card h-100`}>
      <div className="w-100 overflow-hidden rounded-4">
        <Image
          src={img}
          className="card-img-top w-100 m-0"
          alt=""
          width={200}
          height={200}
          // layout="responsive"
        />
      </div>
      <div className="card-body text-start pb-0">
        <h6 className="card-text mb-0 mb-sm-1 fs-6 text-005490">{cardText}</h6>
        <h5 className="card-title m-0 fs-5 fw-semibold">{cardTitle}</h5>
        {tag}
      </div>
    </div>
  );
};

export default Card;

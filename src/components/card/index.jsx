import Image from "next/image";

const Card = ({ cardOfClass, img, cardText, cardTitle, tag }) => {
  // const imgPath = img.replace(/uploads\\/g, "/");
  return (
    <div className={`${cardOfClass} card h-100`}>
      <img
        src={img}
        className="card-img-top m-0"
        alt=""
        width={200}
        height={200}
        // layout="responsive"
      />
      <div className="card-body text-start pb-0">
        <h6 className="card-text mb-0 mb-sm-1">{cardText}</h6>
        <h5 className="card-title m-0">{cardTitle}</h5>
        {tag}
      </div>
    </div>
  );
};

export default Card;

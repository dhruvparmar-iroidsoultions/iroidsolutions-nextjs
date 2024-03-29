import Image from "next/image";

const Card = ({ cardOfClass, img, cardText, cardTitle, tag }) => {
  const imgPath = img.replace(/uploads\\/g, "/");
  return (
    <div className={`${cardOfClass} card w-100 h-100"`}>
      <Image
        src={imgPath}
        className="card-img-top"
        alt=""
        width={150}
        height={150}
        // layout="responsive"
      />
      <div className="card-body text-start">
        <h6 className="card-text mb-0 mb-sm-1">{cardText}</h6>
        <h5 className="card-title">{cardTitle}</h5>
        {tag}
      </div>
    </div>
  );
};

export default Card;

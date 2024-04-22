import Image from "next/image";
import Link from "next/link";

const Card = ({
  cardOfClass,
  img,
  cardText,
  cardTitle,
  tag,
  textStyle,
  titlestyle,
  readMore,
  readMoreLink,
}) => {
  // const imgPath = img.replace(/uploads\\/g, "/");
  const longText = cardTitle;
  const words = longText.split(" ");
  const first15Words = words.slice(0, 16).join(" ");
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
        <h6
          className={`card-text ${
            textStyle ? textStyle : "mb-0 mb-sm-1 fs-6 text-005490"
          }`}
        >
          {cardText}
        </h6>
        <h5
          className={`card-title ${
            titlestyle ? titlestyle : "m-0 fs-5 fw-semibold"
          }`}
        >
          {first15Words}... &nbsp;
          {readMore && (
            <Link href={readMoreLink} className="fw-semibold fs-6">
              Read More
              <img className="ms-2" src={"/read more.png"} alt="" />
            </Link>
          )}
        </h5>
        {tag}
      </div>
    </div>
  );
};

export default Card;

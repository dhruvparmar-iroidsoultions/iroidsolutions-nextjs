import Image from "next/image";
import Link from "next/link";

const Card = ({
  cardOfClass,
  cardBodyExtraClass,
  img,
  imgExtraClass,
  cardText,
  cardTitle,
  isDoted = true,
  tag,
  textStyle,
  titlestyle,
  readMore,
  readMoreLink,
  readmoreArrow,
  onclick,
}) => {
  // const imgPath = img.replace(/uploads\\/g, "/");
  const longText = cardTitle;
  const words = longText?.split(" ");
  const first15Words = words?.slice(0, 16).join(" ");
  return (
    <div className={`${cardOfClass} card h-100`} onClick={onclick}>
      <div className="w-100 overflow-hidden rounded-4 p-lg-2 card-img-con">
        <Image
          src={img}
          className={`card-img-top m-0 ${imgExtraClass}`}
          alt=""
          width={300}
          height={300}
          // layout="responsive"
        />
      </div>
      <div className={`card-body text-start pb-0 ${cardBodyExtraClass} p-lg-2`}>
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
          {first15Words} {isDoted ? "... " : ""}
          {readMore && (
            <Link href={readMoreLink} className="fw-semibold fs-5">
              Read More
              {readmoreArrow ? (
                <img className="ms-2" src={"/read more.png"} alt="" />
              ) : (
                ""
              )}
            </Link>
          )}
        </h5>
        {tag}
      </div>
    </div>
  );
};

export default Card;

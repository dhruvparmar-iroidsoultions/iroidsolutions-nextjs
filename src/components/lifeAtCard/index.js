import Image from "next/image";
import "./index.css";

const LifeAtIroidCard = ({ info }) => {
  return (
    <div className="text-center d-flex flex-column justify-content-between life-card-img-container">
      <div className="position-relative">
        {info.images.map((img, idx) =>
          img.image.includes(".mp4") ? (
            <video className="rounded-4 overflow-hidden" key={idx} controls>
              <source src={img.image} type="video/mp4"></source>
            </video>
          ) : (
            <Image
              className="life-card-img rounded-4 overflow-hidden"
              src={img.image}
              alt=""
              key={idx}
              width={480}
              height={480}
              // layout="responsive"
            />
          )
        )}
      </div>
      <p className="my-3 fs-5 fw-semibold">{info.festival}</p>
    </div>
  );
};

export default LifeAtIroidCard;

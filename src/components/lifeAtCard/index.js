import Image from "next/image";
import "./index.css";

const LifeAtIroidCard = ({ info }) => {
  console.log(info.images.map((img, idx) => img.image));
  return (
    <div className="text-center d-flex flex-column justify-content-between life-card-img-container">
      <div className="position-relative">
        {info.images.map((img, idx) => (
          <Image
            className="life-card-img rounded-4 overflow-hidden"
            src={img.image}
            key={idx}
            width={480}
            height={480}
            layout="responsive"
          />
        ))}
      </div>
      <p className="my-3 fs-5 fw-semibold">{info.festival}</p>
    </div>
  );
};

export default LifeAtIroidCard;

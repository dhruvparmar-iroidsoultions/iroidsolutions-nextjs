import Image from "next/image";
import "./index.css";

const LifeAtIroidCard = ({ info, videoLink, openModal }) => {
  console.log("info.video_link: ", info.video_link);
  return (
    <div className="text-center d-flex flex-column justify-content-between life-card-img-container">
      <div className="position-relative">
        {info.images.map((img, idx) => (
          <div className="position-relative" key={idx}>
            <Image
              className="life-card-img rounded-4 overflow-hidden"
              src={img.image}
              alt=""
              width={480}
              height={480}
            />
            {info.video_link && (
              <Image
                className="rounded-4 position-absolute top-50 start-50 translate-middle demo-playbtn"
                src={"/project-play.png"}
                alt="Play Button"
                width={60}
                height={60}
                data-bs-toggle="modal"
                data-bs-target="#demoVideoModal"
                onClick={() => {
                  videoLink(info.video_link);
                  openModal(true);
                }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="my-3 fs-5 fw-semibold">{info.festival}</p>
    </div>
  );
};

export default LifeAtIroidCard;

import Image from "next/image";
import Marquee from "react-fast-marquee";
import "./index.css";

const QualityScroller = () => {
  return (
    <div className="rotate-text-container w-100 py-3 text-light">
      <Marquee className="d-flex align-items-center gap-2 overflow-hidden">
        <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
          <Image
            className="position-absolute rotate-text-img"
            src="/rotate-text.svg"
            alt=""
            width={90}
            height={90}
          />
          <Image
            className="p-3"
            src="/rotate-text-arrow.svg"
            alt=""
            width={90}
            height={90}
          />
          <p className="mb-0 fs-60 mx-3">QUALITY MATTERS</p>
        </div>
        <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
          <Image
            className="position-absolute rotate-text-img"
            src="/rotate-text.svg"
            alt=""
            width={90}
            height={90}
          />
          <Image
            className="p-3"
            src="/rotate-text-arrow.svg"
            alt=""
            width={90}
            height={90}
          />
          <p className="mb-0 fs-60 mx-3">QUALITY MATTERS</p>
        </div>
        <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
          <Image
            className="position-absolute rotate-text-img"
            src="/rotate-text.svg"
            alt=""
            width={90}
            height={90}
          />
          <Image
            className="p-3"
            src="/rotate-text-arrow.svg"
            alt=""
            width={90}
            height={90}
          />
          <p className="mb-0 fs-60 mx-3">QUALITY MATTERS</p>
        </div>
        <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
          <Image
            className="position-absolute rotate-text-img"
            src="/rotate-text.svg"
            alt=""
            width={90}
            height={90}
          />
          <Image
            className="p-3"
            src="/rotate-text-arrow.svg"
            alt=""
            width={90}
            height={90}
          />
          <p className="mb-0 fs-60 mx-3">QUALITY MATTERS</p>
        </div>
        <div className="rotate-text position-relative d-flex align-items-center gap-2 me-2">
          <Image
            className="position-absolute rotate-text-img"
            src="/rotate-text.svg"
            alt=""
            width={90}
            height={90}
          />
          <Image
            className="p-3"
            src="/rotate-text-arrow.svg"
            alt=""
            width={90}
            height={90}
          />
          <p className="mb-0 fs-60 mx-3">QUALITY MATTERS</p>
        </div>
      </Marquee>
    </div>
  );
};

export default QualityScroller;

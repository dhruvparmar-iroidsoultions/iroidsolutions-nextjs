import Image from "next/image";
import Marquee from "react-fast-marquee";

const ListedPlatforms = () => {
  return (
    <Marquee className="py-4" style={{ background: "#F1F9FF" }}>
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-1.svg"}
        alt=""
        width={300}
        height={50}
      />
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-2.svg"}
        alt=""
        width={300}
        height={50}
      />
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-3.svg"}
        alt=""
        width={300}
        height={50}
      />
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-4.svg"}
        alt=""
        width={300}
        height={50}
      />
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-5.svg"}
        alt=""
        width={300}
        height={50}
      />
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-6.svg"}
        alt=""
        width={300}
        height={50}
      />
      <Image
        className="hover-me-img px-5 w-100"
        src={"/hover-me-img-7.svg"}
        alt=""
        width={300}
        height={50}
      />
    </Marquee>
  );
};

export default ListedPlatforms;

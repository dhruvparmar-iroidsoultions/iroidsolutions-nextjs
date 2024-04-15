import Image from "next/image";
import "./loading.css";

const Loading = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        color: "#005490",
        minHeight: "100vh",
      }}
    >
      <div className="letter position-relative d-flex flex-column align-items-center justify-content-between gap-3">
        <div className="i-dot position-absolute"></div>
        <div className="letter-i position-absolute"></div>
      </div>
      <Image
        className="letter letter-r"
        src={"/letter r.svg"}
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="letter letter-o"
        src={"/letter O.svg"}
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="letter letter-si"
        src={"/letter i.svg"}
        alt=""
        width={200}
        height={200}
      />
      <Image
        className="letter letter-d"
        src={"/letter d.svg"}
        alt=""
        width={200}
        height={300}
      />
    </div>
  );
};

export default Loading;

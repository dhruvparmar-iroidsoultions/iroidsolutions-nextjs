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
      <svg
        className="letter letter-r"
        id="letter-r"
        width="30"
        height="33"
        viewBox="0 0 30 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="part1"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2127 0.338224C23.6934 -0.0486448 22.9794 0.0803115 22.59 0.596136L19.2148 5.1096C19.1499 5.17408 19.1499 5.23856 19.085 5.30304H7.92084C7.92084 5.23856 7.85593 5.23856 7.85593 5.17408L4.54563 0.596136C4.15619 0.0803115 3.4422 -0.0486448 2.92294 0.338224C2.40368 0.725092 2.27386 1.43435 2.66331 1.95018L5.0649 5.30304H0.261719V22.0029H7.66121H21.2269H27.8475C27.8475 22.0029 31.2876 17.6184 28.8212 10.9126C27.3932 7.04394 23.3689 5.75438 21.8111 5.43199L24.4723 2.01465C24.8618 1.49883 24.732 0.725092 24.2127 0.338224ZM7.72612 17.038V11.235H18.9552C18.9552 11.235 21.162 11.1061 21.162 14.0721C21.162 17.038 18.8903 17.038 18.8903 17.038H7.72612V17.038ZM7.5963 "
          fill="black"
        />
        <path
          id="part2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5963 25.7426V32.4483H0.261719V24.0017H25.6407L28.6913 32.4483H20.448L17.657 25.7426H7.5963V25.7426Z"
          fill="black"
        />
      </svg>
      {/* <Image
        className="letter letter-r"
        src={"/letter r.svg"}
        alt=""
        width={200}
        height={200}
      /> */}

      <Image
        className="letter letter-o"
        src={"/letter O.svg"}
        alt=""
        width={200}
        height={200}
      />
      <div className="letter sic d-flex justify-content-center position-relative">
        <span className="letter-si w-100 d-block position-absolute"></span>
      </div>
      {/* <Image
        className="letter letter-si"
        src={"/letter i.svg"}
        alt=""
        width={200}
        height={200}
      /> */}
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

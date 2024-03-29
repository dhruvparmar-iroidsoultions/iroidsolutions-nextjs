import "./index.css";

const TopBg = ({ state, text, backgroundImg }) => {
  return (
    <div className="topBg position-relative py-5">
      <img
        className="position-relative "
        src={backgroundImg || "/contactUsTop.svg"}
        alt="background"
      />
      <div className="contentText position-absolute top-50 start-50 translate-middle z-1 text-light px-2">
        <p className="text-center text-capitalize">{state}</p>
        <p className="text-center ">{text}</p>
      </div>
      <img
        className="colorbg position-absolute top-50 start-50 translate-middle w-100"
        src={"/pageTopBg.svg"}
        alt="background"
      />
    </div>
  );
};

export default TopBg;

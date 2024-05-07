import Image from "next/image";

const Map = () => {
  return (
    <div className="worldMap container w-100 my-5 py-lg-5 d-flex flex-column align-items-center justify-content-center text-center position-relative">
      <h3 className="fs-4 fw-semibold">Our Clients</h3>
      <p className="text-005490 fs-1 fw-bolder">
        Explore Our Global Clients On The Map
      </p>
      <p className="f20 fs-5 fw-medium mb-5 wow animate__animated animate__fadeInLeft">
        Trusted by clients worldwide, we deliver exceptional mobile app and
        website projects across 25+ countries and continue to expand our global
        reach.
      </p>
      <div className="map-container position-relative">
        <Image
          className="w-100 h-100"
          src={"/doted-map.png"}
          alt="world wide work map"
          width={1000}
          height={630}
        />
        <Image
          className="position-absolute map-animation"
          src={"/map-animation.svg"}
          alt="world wide work map"
          width={1000}
          height={630}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {/* <img src={mapAnimation} alt="" className="position-absolute" /> */}
      {/* <AmsChart /> */}
    </div>
  );
};

export default Map;

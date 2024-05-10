import OfficeVideoComponent from "../OfficeVideoComponent";

const OfcEnviroment = ({ slides }) => {
  return (
    <div className="ofcEnviroment container text-center py-2 py-md-4 d-flex flex-column align-items-center justify-content-center">
      <h3 className="mt-5 fs-4 fw-semibold">Our Office Environment</h3>
      <h1 className="text-005490 fs-1 fw-bolder mt-md-3 mb-md-5 wow animate__animated animate__fadeInLeft">
        "An Inspiring Hub for Growth and Innovation: Our Vibrant Office
        Environment"
      </h1>
      <OfficeVideoComponent slides={slides} />
    </div>
  );
};

export default OfcEnviroment;

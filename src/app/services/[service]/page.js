import ServiceAndTech from "@/components/services and tech";
import "./page.css";

const Service = ({ params }) => {
  const { service } = params;
  return (
    <>
      <ServiceAndTech serviceOrTech={service} pathName={"services"} />
    </>
  );
};

export default Service;

import ServiceAndTech from "@/components/services and tech";
import "./page.css";

const Service = ({ params }) => {
  const { service } = params;
  return (
    <div>
      <ServiceAndTech serviceOrTech={service} pathName={"services"} />
    </div>
  );
};

export default Service;

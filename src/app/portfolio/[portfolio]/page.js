import GetPorfolioDetail from "./getPorfolioDetail";
import "./page.css";

const PorfolioDetail = ({ params }) => {
  return <GetPorfolioDetail slug={params.portfolio} />;
};

export default PorfolioDetail;

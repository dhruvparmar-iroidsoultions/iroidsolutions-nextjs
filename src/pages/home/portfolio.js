import axiosApi from "@/api/axiosConfig";
import PortfolioHome from "@/components/home/portfolio";

const Portfolio = async () => {
  try {
    // const response = await axiosApi.get("getAllPortfolio");
    // const data = response.data;

    return <PortfolioHome portfolio={[]} />;
  } catch (error) {
    console.error(error);
    return <PortfolioHome portfolio={[]} />;
  }
};

export default Portfolio;

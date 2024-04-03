import axiosApi from "@/api/axiosConfig";
import OfcEnviroment from "@/components/home/ofcEnviroment";

const YTslides = async () => {
  const ytSlides = [
    {
      img: "/BG-1.png",
    },
    {
      img: "/BG-2.png",
    },
    {
      img: "/BG-3.png",
    },
    {
      img: "/BG-1.png",
    },
    {
      img: "/BG-2.png",
    },
    {
      img: "/BG-3.png",
    },
    {
      img: "/BG-1.png",
    },
  ];
  try {
    // const response = await axiosApi.get("getAllPortfolio");
    // const data = response.data;

    // return <PortfolioHome portfolio={data} />;

    return <OfcEnviroment slides={ytSlides} />;
  } catch (error) {
    console.error(error);
    return <OfcEnviroment slides={[]} />;
  }
};

export default YTslides;

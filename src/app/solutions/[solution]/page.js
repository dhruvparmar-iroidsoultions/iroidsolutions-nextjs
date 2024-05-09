import GetSolution from "./getSolution";
import "./page.css";

const Solution = ({ params }) => {
  return (
    <>
      <GetSolution slug={params.solution} />
    </>
  );
};

export default Solution;

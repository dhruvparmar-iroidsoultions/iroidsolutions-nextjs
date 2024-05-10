import OurStackComponent from "../our-stack";

const TechStacks = () => {
  return (
    <div className="techStacks-container py-5 my-5 text-center">
      <div className="container">
        <h3 className="fs-4 fw-semibold">Our Tech Stacks</h3>
        <p className="text-005490 fs-1 fw-bolder wow animate__animated animate__fadeInLeft">
          Technologies We Work With
        </p>
        <p className="mb-5 mx-auto f20 fs-5 fw-medium wow animate__animated animate__fadeInRight">
          "Behind every successful software application, there lies a
          well-crafted tech stack that enables efficiency, scalability, and user
          satisfaction."
        </p>
        <OurStackComponent />
      </div>
    </div>
  );
};

export default TechStacks;

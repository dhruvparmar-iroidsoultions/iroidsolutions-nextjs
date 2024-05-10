import Solutions from "../this-is-old-page";

const EducationManagementApp = () => {
  const solution = {
    project: "Health Care Software",
    paragraph1:
      "Technology has significantly lowered barriers in the healthcare industry, where organizations like hospitals, physicians, nutritionists, yoga studios, and others are utilizing cutting-edge healthcare and fitness tech solutions to improve patient experiences and manage assets.",
    paragraph2:
      "Being the most well-known healthcare and fitness app development company in the world, iRoid Solutions equips medical administration with highly customized apps that support your business needs so they can manage crucial assets and patient healthcare data more quickly.",
    featureText: "Health-Care",
    line1: "Want a Health-Care Solution For Your Business?",
    line2: "Your project begins here..!!",
    feature: [
      {
        featureTitle: "User Panel:",
        feature: [
          {
            subTitle: "Exercise, Yoga & Tutorial",
            subImg: "/workout 1.svg",
          },
          {
            subTitle: "Track Daily Management",
            subImg: "/routine 1.svg",
          },
          {
            subTitle: "Electronic  Healthcare Integration ",
            subImg: "/consulting-services 1.svg",
          },
          {
            subTitle: "Online Appointment",
            subImg: "/doctor 1.svg",
          },
        ],
      },
      {
        featureTitle: "Admin Panel:",
        feature: [
          {
            subTitle: "Order Medicines Online  ",
            subImg: "/medical-app 1.svg",
          },
          {
            subTitle: "Doctor Profile Management ",
            subImg: "/doctor (1) 1.svg",
          },
          {
            subTitle: "Schedule Management  ",
            subImg: "/calendar 1.svg",
          },
          {
            subTitle: "Online Support & Consulting",
            subImg: "/online-appointment 1.svg",
          },
        ],
      },
    ],
  };
  return (
    <>
      <Solutions
        backgroundImg={"/educationTopBg.svg"}
        appName={"Education Management App Development"}
        topBGText={
          "Enhancing the Academic Experience with the top Educational app development services."
        }
        project={solution.project}
        projectImg={"/solImg.svg"}
        aboutProject1={solution.paragraph1}
        aboutProject2={solution.paragraph2}
        primeFeature={solution.featureText}
        feature={solution.feature}
        bannerLine1={solution.line1}
        bannerLine2={solution.line2}
        pathName={"/solutions/education-management-app"}
      />
    </>
  );
};

export default EducationManagementApp;

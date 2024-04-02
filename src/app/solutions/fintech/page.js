import Solutions from "../page";

const Fintech = () => {
  const solution = {
    project: "Fintech App",
    paragraph1:
      "With all-inclusive fintech app development services, turn your concept into a digital masterpiece. Explore the Varied Finance Software Development Solutions We Deliver. When a lot of sensitive data and significant amounts of money are processed, top-notch security is essential. Our team creates financial applications that are specialised for businesses and uphold the highest standards in the sector.",
    paragraph2:
      "For iOS and Android devices, we create cross-platform and native accounting programmes that give businesses complete control over their accounting operations and access to real-time billing, bank balances, profit and loss statements, and tax deadlines. Apps for digital wallets provide smartphone users with a handy means of making payments wherever they go. Customer loyalty can be raised by integrating an e-wallet app with marketing resources like coupons and vouchers.",
    featureText: "Fintech App:",
    line1: "Want a Fintech Solution For Your Business?",
    line2: "Your project begins here..!!",
    feature: [
      {
        featureTitle: "",
        feature: [
          {
            subTitle: "Linking Bank Account",
            subImg: "/fintech userPanel (1).png",
          },
          {
            subTitle: "Instant Money Transfer",
            subImg: "/fintech userPanel (2).png",
          },
          {
            subTitle: "Cross-Platform Functionality ",
            subImg: "/fintech userPanel (3).png",
          },
          {
            subTitle: "P2P Lending Portals",
            subImg: "/fintech userPanel (4).png",
          },
          {
            subTitle: "Budget Organization",
            subImg: "/fintech userPanel (5).png",
          },
          {
            subTitle: "Money Calculator",
            subImg: "/fintech userPanel (6).png",
          },
          {
            subTitle: "Investment Advice",
            subImg: "/fintech userPanel (7).png",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Solutions
        backgroundImg={"/fintechTopBg.svg"}
        appName={"Fintech App Development"}
        topBGText={"FinTech Software Development Company"}
        project={solution.project}
        projectImg={"/Fintech.svg"}
        aboutProject1={solution.paragraph1}
        aboutProject2={solution.paragraph2}
        primeFeature={solution.featureText}
        feature={solution.feature}
        bannerLine1={solution.line1}
        bannerLine2={solution.line2}
        pathName={"/solutions/fintech"}
      />
    </>
  );
};

export default Fintech;

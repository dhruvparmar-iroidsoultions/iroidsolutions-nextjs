import Solutions from "../this-is-old-page";

const SocialNetworking = () => {
  const solution = {
    project: "Social Networking",
    paragraph1:
      "Best Social Media App Development Company Provide Robust Connectivity through Tech-rich Social Networking App Development Services. Social Media application development services. We develop interactive social media applications that help businesses reach their audience and engage with them enough to ignite conversations.",
    paragraph2:
      "As social media applications offer people today a number of benefits beyond simply keeping them connected to their own and professional group, they have become a captious utility. Utilizing the power of extensive, long-range social networking app development services can help you expand your company, improve brand recognition and credibility, increase conversion rates, and increase ROI.  At iRoid Solutions, we create dependable social networking apps that entice your consumers and hold their attention for a considerable amount of time. We have an impact on traditional social media platforms, bringing names and companies closer to their users. Our social networking apps are purposefully created to achieve your business goal and provide a happy user base.",
    featureText: "Social Networking:",
    line1: "Want a Social Networking Solution For Your Business?",
    line2: "Your project begins here..!!",
    feature: [
      {
        featureTitle: "",
        feature: [
          {
            subTitle: "Quick Profile Creation",
            subImg: "/social userPanel (1).png",
          },
          {
            subTitle: "Real time like, share & messaging",
            subImg: "/social userPanel (2).png",
          },
          {
            subTitle: "Images, audio, video editing ",
            subImg: "/social userPanel (3).png",
          },
          {
            subTitle: "Google Map integration",
            subImg: "/social userPanel (4).png",
          },
          {
            subTitle: "Secure login and privacy controls",
            subImg: "/social userPanel (5).png",
          },
          {
            subTitle: "Community & events",
            subImg: "/social userPanel (6).png",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Solutions
        backgroundImg={"/SocialNetworkingTopBg.svg"}
        appName={"Social Networking App Development"}
        topBGText={"Build Social Media App With us"}
        project={solution.project}
        projectImg={"/SocialNetworking.svg"}
        aboutProject1={solution.paragraph1}
        aboutProject2={solution.paragraph2}
        primeFeature={solution.featureText}
        feature={solution.feature}
        bannerLine1={solution.line1}
        bannerLine2={solution.line2}
        pathName={"/solutions/social-networking-app"}
      />
    </>
  );
};

export default SocialNetworking;

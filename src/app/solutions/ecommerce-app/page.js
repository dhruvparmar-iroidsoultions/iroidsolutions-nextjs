import Solutions from "../page";

const Ecommerce = () => {
  const solution = {
    project: "E-Commerce App",
    paragraph1:
      "We work with you to build a fully-customized, scalable eCommerce platform that performs at the highest levels.Experience Scalable Online Commerce Solutions across All Electronics Platforms.iRoid Solutions, a top e-commerce app development business, has raised billions for its associated brands and dramatically boosted their brand's popularity among consumers with massive fan followings. The company has successfully developed e-commerce apps with a 90% cart floating rate. Our tech team includes seasoned e-commerce app developers who, with the help of our soaring e-commerce solutions, accelerate the shopping experience.",
    paragraph2:
      "iRoid Solutions develops top-notch mobile solutions that have an unusual marriage of excellent coding and clear system architecture. With these products, we achieve our goal of providing our clients with cost-effective services that enable them to achieve improved results.",
    featureText: "E-Commerce App:",
    line1: "Want a E-Commerce Solution For Your Business?",
    line2: "Your project begins here..!!",
    feature: [
      {
        featureTitle: "User Panel:",
        feature: [
          {
            subTitle: "E-Catalogues",
            subImg: "/eCommerce userPanel (1).png",
          },
          {
            subTitle: "Order Tracking",
            subImg: "/eCommerce userPanel (2).png",
          },
          {
            subTitle: "Highly Secured Payment Method ",
            subImg: "/eCommerce userPanel (3).png",
          },
          {
            subTitle: "Product Reviews",
            subImg: "/eCommerce userPanel (4).png",
          },
          {
            subTitle: "Loyalty Programs",
            subImg: "/eCommerce userPanel (5).png",
          },
          {
            subTitle: "Add to Cart & Checkout",
            subImg: "/eCommerce userPanel (6).png",
          },
        ],
      },
      {
        featureTitle: "Admin Panel:",
        feature: [
          {
            subTitle: "Abandoned Checkouts  ",
            subImg: "/eCommerce adminPanel (1).png",
          },
          {
            subTitle: "Orders and Fulfilling ",
            subImg: "/eCommerce adminPanel (2).png",
          },
          {
            subTitle: "Customer Details  ",
            subImg: "/eCommerce adminPanel (3).png",
          },
          {
            subTitle: "Ordered Product Detail",
            subImg: "/eCommerce adminPanel (4).png",
          },
          {
            subTitle: "Payment and Fulfilment",
            subImg: "/eCommerce adminPanel (5).png",
          },
          {
            subTitle: "Manage Product",
            subImg: "/eCommerce adminPanel (6).png",
          },
        ],
      },
    ],
  };
  return (
    <>
      <Solutions
        backgroundImg={"/eCommerceTopBg.svg"}
        appName={"E-Commerce App Development"}
        topBGText={"E-Commerce App development Company"}
        project={solution.project}
        projectImg={"/eCommerce.svg"}
        aboutProject1={solution.paragraph1}
        aboutProject2={solution.paragraph2}
        primeFeature={solution.featureText}
        feature={solution.feature}
        bannerLine1={solution.line1}
        bannerLine2={solution.line2}
        pathName={"/solutions/ecommerce"}
      />
    </>
  );
};

export default Ecommerce;

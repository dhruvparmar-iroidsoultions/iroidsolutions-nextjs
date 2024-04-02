import Solutions from "../page";

const FoodDeliveryApp = () => {
  const solution = {
    project: "Food Delivery App",
    paragraph1:
      "With fully digital synced solutions for food delivery, you can put your potential customers at ease and make ordering food online simple. Add a useful mobile app to your food delivery company to automate deliveries, better manage orders, and increase ROI. We are experts at creating apps with cutting-edge aesthetics and cutting-edge functionality.",
    paragraph2:
      "People of all ages and food preferences use food delivery apps, so they should be able to accommodate a variety of expectations and needs.When it comes to iRoid Solutions, we provide clients with the best food delivery app development services at affordable charges. The best food delivery app is created by our team of talented developers, connecting restaurants, travellers, and hostel guests to reach foodies and provide the best service possible. We put a lot of effort into creating feature-rich, high-performing, and best-in-class food delivery apps that provide an outstanding user experience on all mobile devices.",
    featureText: "Food Delivery App:",
    line1: "Want a Food Delivery Solution For Your Business?",
    line2: "Your project begins here..!!",
    feature: [
      {
        featureTitle: "User Panel:",
        feature: [
          {
            subTitle: "Waiter Tracking",
            subImg: "/hotelBooking userPanel (1).png",
          },
          {
            subTitle: "Navigation & Search option",
            subImg: "/hotelBooking userPanel (2).png",
          },
          {
            subTitle: "Digital Menu Card",
            subImg: "/hotelBooking userPanel (3).png",
          },
          {
            subTitle: "Location-Based deals",
            subImg: "/hotelBooking userPanel (4).png",
          },
        ],
      },
      {
        featureTitle: "Restaurant Panel:",
        feature: [
          {
            subTitle: "Coupon Code Generation",
            subImg: "/hotelBooking adminPanel (1).png",
          },
          {
            subTitle: "Various Payment Methods",
            subImg: "/hotelBooking adminPanel (2).png",
          },
          {
            subTitle: "Delivery Area Management ",
            subImg: "/hotelBooking adminPanel (3).png",
          },
          {
            subTitle: "Timing Management",
            subImg: "/hotelBooking adminPanel (4).png",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Solutions
        backgroundImg={"/hotelTopBg.svg"}
        appName={"Hotel Booking App Development"}
        topBGText={
          "Offering world-class hotel booking app development solutions to help manage your hospitality business more easily and effectively"
        }
        project={solution.project}
        projectImg={"/hotelBookingApp.svg"}
        aboutProject1={solution.paragraph1}
        aboutProject2={solution.paragraph2}
        primeFeature={solution.featureText}
        feature={solution.feature}
        bannerLine1={solution.line1}
        bannerLine2={solution.line2}
        pathName={"/solutions/food-delivery-app"}
      />
    </>
  );
};

export default FoodDeliveryApp;

import "./index.css";

const WhyHireUs = () => {
  const points = [
    "We have an expert team of mobile and web developers.",
    "We have a strong retention ratio of our clients. Our clients love us.",
    "We do quality work.",
    "We are reasonably priced.",
    "We feel your pain and treat you as a partner not as a customer.",
    "100% Confidential Consultation! We sign NDA.",
    "We provide end-to-end solutions including design, development, testing and deployment.",
    "We Provide full support after your app is launched.",
    "We are here to stay.",
  ];
  return (
    <div className="why-hire-us-container w-100 py-3 py-md-5">
      <div className="container">
        <p className="fs-1 fw-bolder text-center text-005490">
          Why You Should Hire Us?
        </p>
        <div className="p-3 bg-white rounded-5 w-100 w-h-u-points mx-auto">
          <ul className="list-unstyled p-3 m-0">
            {points.map((point, idx) => (
              <li
                className={`why-hire-us-point fs-6 fw-semibold ${
                  idx === points.length - 1 ? "" : " mb-4"
                }`}
                key={idx}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyHireUs;

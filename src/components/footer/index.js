import "./index.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer overflow-hidden">
      <div className="container pt-5 p-0">
        <Link href="/home" className="mx-4 mx-sm-0">
          <img
            src={"/logo.svg"}
            alt="iroid_solutions"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div className="footerMiddle my-4 row justify-content-center mx-auto">
          <div className="company_info col col-10 col-sm-12 col-md col-lg-5 p-0">
            <h6>
              iRoid Solutions is a software development company established in
              2014. We offer comprehensive custom software development services
              including mobile applications, web applications, business software
              solutions, as well as software integration, support and
              maintenance of software applications.
            </h6>
            <div className="socialMedia d-flex gap-3 mb-5">
              <img src={"/Facebook.png"} alt="Facebook" />
              <img src={"/Instagram.png"} alt="Instagram" />
              <img src={"/LinkedIn.png"} alt="LinkedIn" />
              <img src={"/Youtube.png"} alt="Youtube" />
              <img src={"/Twitter.png"} alt="Twitter" />
            </div>
          </div>
          <div className="footerLinks col col-4 col-md mb-5 me-2 me-md-0">
            <Link href="/home">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="footerLinks col col-4 col-md  ms-2 ms-md-0">
            <Link href="/caseStudy">Case Study</Link>
            <Link href="/career">Career</Link>
            <Link href="/HireUs">Hire Us</Link>
            <Link href="/OurClients">Our Clients</Link>
            <Link href="/sitemap">Site Map</Link>
            <Link href="/AboutUs">About Us</Link>
          </div>
          <form className="footer_form col col-10 col-sm-12 col-md col-lg-3">
            <input
              className="mb-3"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <textarea
              className="mb-4 pt-3"
              name="message"
              id="message"
              cols="30"
              rows="2"
              placeholder="Your Message"
            ></textarea>
            <button className="" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="footerBottom row p-0 mx-auto mx-md-0">
          <div className="col-10 mx-auto mx-sm-0 col-sm-12 col-md-6 col-lg-5 row gap-3 mt-2 ">
            <img src={"/location.png"} alt="" className="col p-0" />
            <div className="infoDetail col p-0 d-flex flex-column my">
              <h3 className="mb-md-3">Visit Us:</h3>
              <p className="mb-1">
                318 A/318 B, Fortune High Street, Opp. Western Arena , Nr.
                Madhuvan Circle, LP Savani Rd, Adajan, Surat, Gujarat 395009
              </p>
            </div>
          </div>
          <div className="col-10 mx-auto mx-sm-0 col-md row gap-3 mt-2  ">
            <img src={"/phone.png"} alt="" className="col p-0" />
            <div className="infoDetail col p-0 d-flex flex-column my">
              <h3 className="mb-md-3">Phone Us:</h3>
              <p className="mb-1">+ 91 90238 68898 (HR)</p>
              <p className="mb-1">+ 91 77788 69939 (Business)</p>
            </div>
          </div>
          <div className="col-10 mx-auto mx-sm-0 col-sm-12 col-md-6 col-lg-4 row gap-3 mt-2 ">
            <img src={"/email.png"} alt="" className="col p-0" />
            <div className="infoDetail col p-0 d-flex flex-column my">
              <h3 className="mb-md-3">Mail Us:</h3>
              <p className="mb-1">hr@iroidsolutions.in (HR)</p>
              <p className="mb-1">business@iroidsolutions.in (Business)</p>
            </div>
          </div>
        </div>
        <hr className="footer_hr mt-md-5" />
        <span className="my-3 container text-center d-flex justify-content-center py-1">
          All rights reserved to iRoidSolutions.com &copy; 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;

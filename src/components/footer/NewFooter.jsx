"use client";

import Image from "next/image";
import Link from "next/link";

const NewFooter = () => {
  return (
    <footer className="w-100 new-footer" id="footer">
      <div className="footer-top-radius bg-white rounded-top position-relative d-none d-md-block"></div>
      <div className="container mt-3 mt-md-5">
        <div className="footer-grid">
          <div className="text-white foo-g-1">
            <Link href="/home">
              <Image
                className="mb-4"
                src={"/footer-logo.svg"}
                alt="iroid_solutions"
                style={{ cursor: "pointer" }}
                width={150}
                height={80}
              />
            </Link>
            <div className="mb-4">
              <p className="fs-5 fw-semibold">
                iRoid Solutions is a software development company established in
                2015.
              </p>
              <p className="fs-6 fw-medium opacity-50">
                We offer comprehensive custom software development services
                including mobile applications, web applications, business
                software solutions, as well as software integration, support and
                maintenance of software applications.
              </p>
            </div>
            <div className="follow mb-4">
              <p className="fs-5 fw-semibold">Follow #IROID</p>
              <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-3">
                <Link href={"https://www.facebook.com"}>
                  <Image
                    src={"/Facebook.png"}
                    alt="Facebook"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href={"https://www.facebook.com"}>
                  <Image
                    src={"/Instagram.png"}
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href={"https://www.facebook.com"}>
                  <Image
                    src={"/LinkedIn.png"}
                    alt="LinkedIn"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href={"https://www.facebook.com"}>
                  <Image
                    src={"/Youtube.png"}
                    alt="Youtube"
                    width={40}
                    height={40}
                  />
                </Link>

                <Link href={"https://www.facebook.com"}>
                  <Image
                    src={"/Twitter.png"}
                    alt="Twitter"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              {/* <ul className="list-unstyled row row-cols-lg-8 w-100">
                <li className="col mb-4 fw-medium">
                </li>
                <li className="col mb-4 fw-medium">
                </li>
                <li className="col mb-4 fw-medium">
                </li>
                <li className="col mb-4 fw-medium">
                </li>
                <li className="col mb-4 fw-medium">
                </li>
              </ul> */}
            </div>
          </div>
          <div className=" text-white f-s-part mt-lg-0 d-flex flex-column foo-g-2 mb-4 mb-md-0">
            <p className="fs-3 fw-bolder">Explore iRoid</p>
            <ul className="explore-iroid p-4 m-0 h-100">
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/about-us"}
                >
                  About Us
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/life-at-iroid"}
                >
                  Life at iRoid
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/testimonials"}
                >
                  Testimonials
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/hire-us"}
                >
                  Hire Us
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/services"}
                >
                  Services
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/career"}
                >
                  Career
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/industries"}
                >
                  Industries
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/contact-us"}
                >
                  Contact Us
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/solutions"}
                >
                  Solutions
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white"
                  href={"/our-clients"}
                >
                  Our Clients
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none text-white w-100"
                  href={"/blogs"}
                >
                  Blog
                </Link>
              </li>
              <li className="ps-2 fw-medium mb-3">
                <Link
                  className="text-decoration-none me-md-3 text-white w-100"
                  href={"/become-a-partner"}
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-100 d-flex flex-column foo-g-3">
            <p className="fs-3 fw-bolder text-white">Get In Touch</p>
            <div className="get-in-touch-cover h-100">
              <div className="get-in-touch c-details p-2 flexElem rounded-4 py-lg-4 d-flex flex-column justify-content-between gap-lg-4 h-100">
                <div className="px-1 px-sm-3 px-md-4 mx-lg-0 d-flex flex-column gap-2 gap-lg-4 gap-xl-0">
                  <h5 className="lh-base fw-semibold text-005490 lh-base mt-2 mt-lg-0 mb-0">
                    Need a mobile app or website?
                  </h5>
                  <h5 className=" fw-medium text-00000099">
                    Get a free consultation!{" "}
                    <span>
                      <Image
                        className="footer-touch-star"
                        src={"/new-contact-star.png"}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </span>
                  </h5>
                  <div className="d-flex flex-wrap gap-3">
                    <Link href={"tel:+917778869939"}>
                      <Image
                        className="w-100 h-100"
                        src={"/n-call.png"}
                        alt="call"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"https://wa.me/+917778869939"} target="_blank">
                      <Image
                        className="w-100 h-100"
                        src={"/n-whatsapp.png"}
                        alt="whatsapp"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"mailto:business@iroidsolutions.in"}>
                      <Image
                        className="w-100 h-100"
                        src={"/n-email.png"}
                        alt="email"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"skype:daxeshpatel7224?chat"}>
                      <Image
                        className="w-100 h-100"
                        src={"/n-skype.png"}
                        alt="skype"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
                <div className="px-1 px-sm-3 px-md-4 mx-lg-0 d-flex flex-column gap-2 gap-lg-4 gap-xl-0">
                  <h5 className="lh-base fw-semibold text-005490 lh-base mt-2 mt-lg-0 mb-0">
                    Passionate about mobile apps & website?
                  </h5>
                  <h5 className=" fw-medium text-00000099">
                    Join our growing team!{" "}
                    <span>
                      <Image
                        className="footer-touch-star"
                        src={"/new-contact-star.png"}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </span>
                  </h5>
                  <div className="d-flex flex-wrap gap-3">
                    <Link href={"tel:+919023868898"}>
                      <Image
                        className="w-100 h-100"
                        src={"/n-call.png"}
                        alt="call"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"https://wa.me/+919023868898"} target="_blank">
                      <Image
                        className="w-100 h-100"
                        src={"/n-whatsapp.png"}
                        alt="whatsapp"
                        width={100}
                        height={100}
                      />
                    </Link>
                    <Link href={"mailto:hr@iroidsolutions.in"}>
                      <Image
                        className="w-100 h-100"
                        src={"/n-email.png"}
                        alt="email"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-end text-white mt-3 mt-md-5 pt-md-5 fw-semibold">
          <p role="button" onClick={() => window.scrollTo(0, 0)}>
            Back to Top
            <Image
              className="ms-2 go-to-top"
              src={"/arrow-up.png"}
              alt="go-to-top"
              width={15}
              height={10}
            />
          </p>
        </div>
        <div className="footer-hr-line opacity-25 bg-white"></div>
        <span className="mt-3 container text-white text-center d-flex justify-content-center py-3 fw-semibold">
          &copy; 2024 iRoid Solutions. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default NewFooter;

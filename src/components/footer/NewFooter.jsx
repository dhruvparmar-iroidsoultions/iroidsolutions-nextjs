"use client";

import Image from "next/image";
import Link from "next/link";

const NewFooter = () => {
  return (
    <footer className="w-100 new-footer" id="footer">
      <div className="footer-top-radius bg-white rounded-top position-relative d-none d-md-block"></div>
      <div className="container mt-3 mt-md-5">
        <div className="row">
          <div className="col-12 col-lg-4 col-xxl-5 text-white">
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
            <div className="follow">
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
          <div className="col text-white f-s-part mt-4 mt-lg-0">
            <div className="d-flex flex-wrap flex-md-nowrap">
              <div className="">
                <p className="fs-3 fw-bolder">Explore iRoid</p>
                <ul className="explore-iroid row row-cols-2 row-cols-md-2">
                  <li className="col col-sm-3 my-4 mb-md-0 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/about-us"}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="col col-sm-3 my-4 mb-md-0 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/life-at-iroid"}
                    >
                      Life at iRoid
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 my-sm-4 mb-md-0 mb-md-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/testimonials"}
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 my-sm-4 mb-md-0 mb-md-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/hire-us"}
                    >
                      Hire Us
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/services"}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/career"}
                    >
                      Career
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/industries"}
                    >
                      Industries
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/contact-us"}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/solutions"}
                    >
                      Solutions
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 fw-medium">
                    <Link
                      className="text-decoration-none text-white"
                      href={"/our-clients"}
                    >
                      Our Clients
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 mb-sm-2 fw-medium">
                    <Link
                      className="text-decoration-none text-white w-100"
                      href={"/blogs"}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="col col-sm-3 mb-4 mb-sm-2 fw-medium">
                    <Link
                      className="text-decoration-none me-md-3 text-white w-100"
                      href={"/become-a-partner"}
                    >
                      Become a Partner
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-100">
                <p className="fs-3 fw-bolder">Get In Touch</p>
                <div className="get-in-touch d-flex flex-column justify-content-between gap-1 p-3 py-md-4 px-md-4 rounded-5">
                  <div className="mb-3 d-flex align-items-top gap-2 gap-sm-4 fw-medium">
                    <Image src={"/phone.png"} alt="" width={50} height={50} />
                    <div className="">
                      <p className="mb-1 text-005490">+ 91 90238 68898 (HR)</p>
                      <p className="mb-1 text-005490">
                        + 91 77788 69939 (Business)
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-top gap-2 gap-sm-4 fw-medium">
                    <Image src={"/email.png"} alt="" width={50} height={50} />
                    <div className="">
                      <p className="mb-1 text-005490">
                        hr@iroidsolutions.in (HR)
                      </p>
                      <p className="mb-1 text-005490">
                        business@iroidsolutions.in (Business)
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-top gap-2 gap-sm-4 fw-medium">
                    <Image
                      src={"/location.png"}
                      alt=""
                      width={50}
                      height={50}
                    />
                    <p className="mb-1 text-005490">
                      318 A/318 B, Fortune High Street, Opp. Western Arena , Nr.
                      Madhuvan Circle, LP Savani Rd, Adajan, Surat, Gujarat
                      395009
                    </p>
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

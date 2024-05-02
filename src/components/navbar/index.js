"use client";

import React, { useCallback } from "react";
// import menu from "../../assets/header-menu.svg";
// import menu from "../../assets/header menu.png";
import "./index.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const closeCanvas = useCallback(() => {
    document.getElementById("closeCanvas").click();
    document.getElementById("closeSecondCanvas").click();
    document.getElementById("closeThirdCanvas").click();
  }, []);

  const handleLiClick = useCallback(
    (event) => {
      if (event.target.tagName === "A") {
        closeCanvas();
      }
    },
    [closeCanvas]
  );
  return (
    <>
      <nav className="navbar py-1 py-lg-0 navbar-expand-lg position-fixed bg-white w-100">
        <div className="container p-lg-0">
          <Link href="/">
            <img
              src="/logo.svg"
              alt="iroid_solutions"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            id="navbarSideCanavs"
            role="button"
          >
            <Image src={"/header-menu.png"} alt="menu" width={25} height={25} />
          </button>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            id="navbarSideCanavs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7H21"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6 12H18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 17H14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button> */}
          <div className="collapse navbar-collapse center" id="navbarToggler">
            <ul
              className="navbar-nav mx-auto me-auto mb-2 mb-lg-0 gap-3 align-items-center"
              onClick={handleLiClick}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link py-4 mx-lg-0 mx-xl-2 d-lg-none d-xl-block ${
                    pathname.includes("about-us") ? "activeLink" : ""
                  }`}
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link py-4 mx-lg-0 mx-xl-2 ${
                    pathname.includes("testimonials") ? "activeLink" : ""
                  }`}
                  href="/testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li className="nav-item header_dropdown mx-lg-0 mx-xl-2">
                <div
                  className="dropdown-toggle options fw-medium"
                  role="button"
                >
                  Services
                  <ul className="dropdown-menu deepUl text-capitalize">
                    <li>
                      <div className="dropdown-item " type="button">
                        Mobile App
                        <ul className="dropdown-item dropMain">
                          <li>
                            <Link href="/services/iphone-app-development">
                              iphone App development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/android-app-development">
                              Android app development
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/flutter">Flutter</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item " type="button">
                        Web Development
                        <ul className="dropdown-item dropMain">
                          <li>
                            <Link href="/services/Website">Website</Link>
                          </li>
                          <li>
                            <Link href="/services/Web-App">Web App</Link>
                          </li>
                          <li>
                            <Link href="/services/PWA">PWA</Link>
                          </li>
                          <li>
                            <Link href="/services/API-Backend">
                              API & Backend
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item " type="button">
                        product Design
                        <ul className="dropdown-item dropMain">
                          <li>
                            <Link href="/services/web-frontend-design">
                              Web Frontend Design
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link py-4 mx-lg-0 mx-xl-2 ${
                    pathname.includes("industries") ? "activeLink" : ""
                  }`}
                  href="/industries"
                >
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link py-4 mx-lg-0 mx-xl-2 ${
                    pathname.includes("solutions") ? "activeLink" : ""
                  }`}
                  href="/solutions"
                >
                  Solutions
                </Link>
              </li>
              {/* <li className="nav-item header_dropdown">
                <div className={`dropdown-toggle options`} role="button">
                  Solutions
                  <ul className="dropdown-menu deepUl text-capitalize bg-light-subtle py-0">
                    <li className="m-0">
                      <ul className="dropdown-item px-3 bg-light-subtle">
                        <li>
                          <Link href="/solutions/hotel-booking-app">
                            Hotel Booking App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/education-management-app">
                            Education Management App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/food-delivery-app">
                            Food Delivery App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/ecommerce-app">
                            E-Commerce App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/fintech">
                            Fintech App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/social-networking-app">
                            Social Networking
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  className={`nav-link py-4 mx-lg-0 mx-xl-2 ${
                    pathname.includes("casestudy") ? "activeLink" : ""
                  }`}
                  href="/casestudy"
                >
                  Case Study
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className={`nav-link py-4 mx-lg-0 mx-xl-2 ${
                    pathname.includes("blog") ? "activeLink" : ""
                  }`}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname.includes("about") ? "activeLink" : ""
                  }`}
                  href="/about-us"
                >
                  About Us
                </Link>
              </li> */}
            </ul>
            <div className="d-flex gap-3 consult d-flex align-items-center justify-content-between">
              <Link
                href={"contact-us"}
                className="btn shadowBtn d-flex align-items-center justify-content-around gap-2 px-3"
              >
                <Image
                  src={"/white_calling.png"}
                  alt=""
                  width={20}
                  height={20}
                />
                <span>Free Consultation</span>
              </Link>
              {/* <Button
                cn={
                  "btn shadowBtn d-flex align-items-center justify-content-around"
                }
                text={"Free Consultation"}
                arrow={false}
              >
                hihui
              </Button> */}
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                id="canvasToggler"
              >
                <Image
                  src={"/header-menu.png"}
                  alt="menu"
                  width={25}
                  height={25}
                />
              </span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="#005490"
                // className="navbar-toggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                id="canvasToggler"
              >
                <path
                  d="M3 7H21"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 12H18"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 17H14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="fixed-top">
        <div className="container-fluid">
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="closeCanvas"
              ></button>
            </div>
            <div className="offcanvas-body px-2">
              <ul
                className="navbar-nav justify-content-end flex-grow-1 pe-3"
                onClick={handleLiClick}
              >
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item dropdown-toggle my-1 mx-2"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#servicesCanvas"
                  aria-controls="offcanvasRightLabel"
                  role="button"
                >
                  Services
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/testimonials">
                    Testimonials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/casestudy">
                    Case Study
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/life-at-iroid">
                    Life at iRoid
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/industries">
                    Industries
                  </Link>
                </li>
                <li
                  className="nav-item dropdown-toggle my-1 mx-2"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#solutionsCanvas"
                  aria-controls="offcanvasSolutionsCanvasLabel"
                  role="button"
                >
                  Solutions
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/ourClients">
                    Our Clients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/hireUs">
                    Hire Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/FAQs">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/career">
                    Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about-us">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas mt-5 offcanvas-end"
        tabIndex="-1"
        id="servicesCanvas"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header mt-1 pb-0 pt-4">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Go Back
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => document.getElementById("navbarSideCanavs").click()}
          ></button>
          <button
            type="button"
            className="btn-close d-none"
            data-bs-dismiss="offcanvas"
            data-bs-target="#servicesCanvas"
            aria-controls="servicesCanvas"
            id="closeSecondCanvas"
          ></button>
        </div>
        <div className="offcanvas-body secondCanvas">
          <ul className="text-capitalize ps-1" onClick={handleLiClick}>
            <li>
              <div className="">
                Mobile App
                <ul className="">
                  <li>
                    <Link href="/services/iphone-app-development">
                      iphone App development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/android-app-development">
                      Android app development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/flutter">Flutter</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="">
                Web Development
                <ul className="">
                  <li>
                    <Link
                      href="/services/Website"
                      state={"Website development"}
                    >
                      Website
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/Web-App">Web App</Link>
                  </li>
                  <li>
                    <Link href="/services/PWA">PWA</Link>
                  </li>
                  <li>
                    <Link href="/services/API-Backend">API & Backend</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="">
                product Design
                <ul className="">
                  <li>
                    <Link href="/services/web-frontend-design">
                      Web Frontend Design
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="offcanvas mt-5 offcanvas-end"
        tabIndex="-1"
        id="solutionsCanvas"
        aria-labelledby="offcanvasSolutionsCanvasLabel"
      >
        <div className="offcanvas-header mt-1 pb-0 pt-4">
          <h5 className="offcanvas-title" id="offcanvasSolutionsCanvasLabel">
            Go Back
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => document.getElementById("navbarSideCanavs").click()}
          ></button>
          <button
            type="button"
            className="btn-close d-none"
            data-bs-dismiss="offcanvas"
            data-bs-target="#solutionsCanvas"
            aria-controls="solutionsCanvas"
            id="closeThirdCanvas"
          ></button>
        </div>
        <div className="offcanvas-body thirdCanvas">
          <ul className="ps-1" onClick={handleLiClick}>
            <li>
              <Link href="/solutions/hotel-booking-app">
                Hotel Booking App Development
              </Link>
            </li>

            <li>
              <Link href="/solutions/education-management-app">
                Education Management App Development
              </Link>
            </li>
            <li>
              <Link href="/solutions/food-delivery-app">
                Food Delivery App Development
              </Link>
            </li>
            <li>
              <Link href="/solutions/ecommerce-app">
                E-Commerce App Development
              </Link>
            </li>
            <li>
              <Link href="/solutions/fintech">Fintech App Development</Link>
            </li>
            <li>
              <Link href="/solutions/social-networking-app">
                Social Networking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

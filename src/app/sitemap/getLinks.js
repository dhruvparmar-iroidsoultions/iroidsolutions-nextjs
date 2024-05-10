"use client";

import axiosApi from "@/api/axiosConfig";
import TopBg from "@/components/topBg";
import Link from "next/link";
import { useEffect, useState } from "react";

const GetLinks = () => {
  const [links, setLinks] = useState({});

  const getLinks = async () => {
    try {
      const { data } = await axiosApi.get("/sitemap");
      setLinks(data.data);
    } catch (error) {
      console.error("fetching sitemap links error: ", error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <TopBg
        state={"Sitemap"}
        text={
          "Using our sitemap, you can navigate to any webpage you want and learn about the content of our website."
        }
      />
      <div className="container py-3 py-lg-5">
        <div className="mb-2 mb-md-3 mb-lg-5">
          <p className="fs-50 fw-semibold text-005490">iRoid Solutions</p>
          <ul className="link-container text-b">
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/testimonials"}
              >
                Testimonials
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/our-clients"}
              >
                Our Clients
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/portfolio"}
              >
                Portfolio
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/hire-us"}
              >
                Hire Us
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/career"}
              >
                Career
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/about-us"}
              >
                About Us
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/internship"}
              >
                Internship
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/contact-us"}
              >
                Contact Us
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/life-at-iroid"}
              >
                Life at iRoid
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2 mb-md-3 mb-lg-5">
          <p className="fs-50 fw-semibold text-005490">Services</p>
          <ul className="link-container-2 text-b">
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Iphone App development
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Android app development
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Functional Testing
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Flutter (cross platform)
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Web App
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Non-Functional Testing
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Ecommerce
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                API & Backend
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                UI/UX Design
              </Link>
            </li>
            <li className="ps-2">
              <Link
                className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                href={"/Testimonials"}
              >
                Web design
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2 mb-md-3 mb-lg-5">
          <p className="fs-50 fw-semibold text-005490">Case Study</p>
          <ul className="link-container-2 text-b">
            {links.case_study?.map((c, idx) => (
              <li className="ps-2" key={idx}>
                <Link
                  className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                  href={`casestudy/${c.slug}`}
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-2 mb-md-3 mb-lg-5">
          <p className="fs-50 fw-semibold text-005490">Other Blogs</p>
          <ul className="link-container-2 text-b">
            {links.blogs?.map((c, idx) => (
              <li className="ps-2" key={idx}>
                <Link
                  className="text-decoration-none fs-4 fw-medium lh-base lh-lg"
                  href={`blog/${c.slug}`}
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default GetLinks;

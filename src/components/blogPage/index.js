"use client";

import { useEffect, useState } from "react";
import "./blogHomePage.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axiosApi from "@/api/axiosConfig";

const Blogs = ({ blogData, blogCategory = [] }) => {
  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState(blogData);
  const [showBlogOn, setShowBlogOn] = useState("all");
  const router = useRouter();

  const blogPoints = [
    "All",
    "Product",
    "Design",
    "MongoDB",
    "Express",
    "React",
    "Node",
    "Technology",
    "Businees",
    "Ai",
    "Java",
  ];

  const search = (e) => {
    setSearchText(e.target.value);
    const searchRelatedBlogs = blogs.filter(
      (blog) =>
        blog.topicFor.map((t) => t.includes(searchText)) ||
        blog.topic.includes(searchText)
    );
    setBlogs(searchRelatedBlogs);
  };

  const mapBlogs = blogs.slice(0, 21).map((blog, idx) => {
    const blogPath = blog.topic.replace(/ /g, "-").toLowerCase();
    return (
      <Link
        className="blog text-decoration-none text-dark wow animate__animated animate__fadeInRight"
        key={idx}
        href={`/blog/${1}`}
        // onClick={() => router.push(`/blog/${blogPath}`)}
      >
        <div className="blogImgContainer overflow-hidden">
          <img src={blog.blogImg} alt="" className="w-100" />
        </div>
        <div className="creationDateAndFor d-flex align-items-center justify-content-between gap-2 my-3">
          <p className="m-0">{blog.date}</p>
          <ul className="d-flex flex-wrap align-items-center gap-1 m-0">
            {blog.topicFor.map((topic, idx) => (
              <li
                key={idx}
                className="pe-4"
                style={{ listStyle: idx === 0 && "none" }}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <h4 className="blogTopic fw-semibold">{blog.topic}</h4>
        <p className="blogContent">{blog.text}</p>
      </Link>
    );
  });

  return (
    <>
      <div className="container position-relative blogCategory">
        <form id="blogSearchForm" className="position-absolute">
          <label htmlFor="searchInput" id="searchIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </label>
          <input
            type="search"
            name="search"
            id="searchInput"
            value={searchText}
            onChange={search}
          />
        </form>

        <ul className="blogSearchPoint d-flex align-items-center justify-content-between gap-3 flex-nowrap py-5">
          {blogCategory.map((category, idx) => (
            <li
              className={
                showBlogOn === category.toLowerCase()
                  ? "activeBlogSelection"
                  : ""
              }
              key={idx}
              onClick={() => setShowBlogOn(category.toLowerCase())}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="container blogContainer my-5 gap-3">{mapBlogs}</div>
    </>
  );
};

export default Blogs;

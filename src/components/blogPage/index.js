"use client";

import { useEffect, useState } from "react";
import "./blogHomePage.css";
import Link from "next/link";
import axiosApi from "@/api/axiosConfig";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [showBlogOn, setShowBlogOn] = useState("all");

  const search = (e) => {
    setShowBlogOn("all");
    setSearchText(e.target.value);
    getSearchedBlogs(e.target.value);
  };

  const removeTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    const wrappedContent = `${textContent}`;
    return wrappedContent;
  };

  const getBlogs = async (id) => {
    try {
      const response = await axiosApi.get(
        id === 0
          ? `blogs?page=1&latest=1`
          : `blogs?page=1&categoryId=${id}&latest=1`
      );
      const blogs = response.data.data;
      setBlogs(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const getSearchedBlogs = async (searchText) => {
    try {
      const response = await axiosApi.get(
        searchText.length === 0
          ? `blogs?page=1&latest=1`
          : `blogs?page=1&search=${searchText}&latest=1'`
      );
      console.log(response);
      const blogs = response.data.data;
      setBlogs(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };
  const getCategory = async () => {
    try {
      const response = await axiosApi.get("/blog-category?page=1");
      const category = response.data.data;
      setBlogCategory(category);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const newBlogs = (category) => {
    setShowBlogOn(category.name);
    getBlogs(category.id);
  };

  const mapBlogs = blogs.map((blog, idx) => {
    const wrappedText = removeTags(blog.description);
    const date = new Date(blog.created_at * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return (
      <Link
        className="blog text-decoration-none text-dark wow animate__animated animate__fadeInRight w-100 overflow-hidden"
        key={idx}
        href={`/blog/${blog.slug}`}
      >
        <div className="blogImgContainer overflow-hidden w-100">
          <img src={blog.thumbnail} alt="" className="w-100" height={250} />
        </div>
        <div className="creationDateAndFor d-flex align-items-center justify-content-between gap-2 my-3">
          <p className="m-0">{formattedDate}</p>
          <ul className="d-flex flex-wrap align-items-center gap-1 m-0">
            {blog.category.map((topic, idx) => (
              <li
                key={idx}
                className="pe-4"
                style={{ listStyle: idx === 0 && "none" }}
              >
                {topic.name}
              </li>
            ))}
          </ul>
        </div>
        <h4 className="blogTopic fw-semibold text-wrap w-100 overflow-hidden">
          {blog.title}
        </h4>
        <p
          className="blogContent"
          // dangerouslySetInnerHTML={{ __html: blog.description }}
        >
          {wrappedText}
        </p>
      </Link>
    );
  });

  useEffect(() => {
    getCategory();
    getBlogs(0);
    // filterBlogs();
  }, []);

  return (
    <>
      <div className="container position-relative blogCategory">
        <form
          id="blogSearchForm"
          className="position-absolute"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="searchInput" id="searchIcon">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.7084"
                cy="12.7084"
                r="11.2357"
                stroke="#005490"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5229 21.1055L24.928 25.4991"
                stroke="#005490"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
          <input
            type="text"
            name="search"
            id="searchInput"
            value={searchText}
            onChange={search}
          />
        </form>

        <ul className="blogSearchPoint d-flex align-items-center justify-content-between gap-3 flex-nowrap py-5 pe-none">
          <li
            className={
              showBlogOn.toLowerCase() === "all"
                ? "activeBlogSelection pe-auto"
                : "pe-auto"
            }
            onClick={() => {
              newBlogs({ name: "all", id: 0 });
            }}
          >
            All
          </li>
          {blogCategory.map((category, idx) => (
            <li
              className={
                showBlogOn.toLowerCase() === category.name.toLowerCase()
                  ? "activeBlogSelection pe-auto"
                  : "pe-auto"
              }
              key={idx}
              onClick={() => {
                newBlogs(category);
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="container blogContainer my-5 gap-3 w-100">{mapBlogs}</div>
    </>
  );
};

export default Blogs;

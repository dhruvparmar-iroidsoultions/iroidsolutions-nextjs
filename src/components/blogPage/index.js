"use client";

import { useEffect, useState } from "react";
import "./blogHomePage.css";
import Link from "next/link";
import axiosApi from "@/api/axiosConfig";
import Image from "next/image";

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [showBlogOn, setShowBlogOn] = useState({
    id: 0,
    name: "all",
  });
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const search = (e) => {
    // setShowBlogOn("all");
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

  const getCategory = async () => {
    try {
      const response = await axiosApi.get("/blog-category?page=1");
      const category = response.data.data;
      setBlogCategory(category);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getBlogs = async (id, pageNumber = 1) => {
    console.log(pageNumber);
    // let url
    // if( id === 0){
    //   url = `blogs?page=${pageNumber}&limit=9&latest=1`
    // }else
    try {
      const response = await axiosApi.get(
        id === 0
          ? `/blogs?page=${pageNumber}&limit=9&latest=1`
          : `/blogs?page=${pageNumber}&limit=9&categoryId=${id}&latest=1`
      );
      console.log(response);
      const blogs = response.data.data;
      const lastPage = response.data.meta.last_page;
      setBlogs(blogs);
      setLastPage(lastPage);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const getSearchedBlogs = async (searchText) => {
    try {
      const response = await axiosApi.get(
        searchText.length === 0
          ? `/blogs?page=1&limit=9&latest=1`
          : `/blogs?page=1&limit=9&search=${searchText}&latest=1'`
      );
      console.log(response);
      const blogs = response.data.data;
      setBlogs(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const newBlogs = (category) => {
    setShowBlogOn(category);
    getBlogs(category.id);
  };

  const mapBlogs = blogs.map((blog, idx) => {
    const wrappedText = removeTags(blog.description);
    const words = wrappedText.split(" ");
    const first15Words = words.slice(0, 18).join(" ");
    const date = new Date(blog.created_at * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });

    return (
      <Link
        className="blog blog-p-bg p-3 text-decoration-none text-dark wow animate__animated animate__fadeInRight w-100 overflow-hidden"
        key={idx}
        href={`/blog/${blog.slug}`}
      >
        <div className="blogImgContainer overflow-hidden w-100">
          <Image
            src={blog.thumbnail}
            alt=""
            className=""
            width={1200}
            height={250}
          />
        </div>
        <div className="my-3 d-flex flex-wrap text-nowrap align-items-center justify-content-between fw-medium fs-5 gap-1">
          <p className="mb-0 fs-6 d-flex align-items-center justify-content-center gap-1 blog-d">
            <Image
              className="blog-writer"
              src={"/blog-profile.png"}
              alt="writer"
              width={1200}
              height={1200}
            />
            <span>{blog.blog_user}</span>
          </p>
          <p className="mb-0 fs-6 d-flex align-items-center justify-content-center gap-1 blog-d">
            <Image
              className="blog-writer"
              src={"/blog-date.png"}
              alt="writer"
              width={1200}
              height={1200}
            />
            <span>{formattedDate}</span>
          </p>
          <p className="mb-0 fs-6 d-flex align-items-center justify-content-center gap-1 blog-d">
            <Image
              className="blog-writer"
              src={"/blog-time.png"}
              alt="writer"
              width={1200}
              height={1200}
            />
            <span>{blog.time}</span>
          </p>
        </div>
        <h4 className="blogTopic fw-semibold text-wrap w-100 overflow-hidden">
          {blog.title}
        </h4>
        <p className="fs-6 fw-medium">
          {first15Words}...
          <span className="text-005490 fw-semibold"> Read More</span>
        </p>
      </Link>
    );
  });

  const pagination = (c, m) => {
    var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }

      rangeWithDots.push(i);
      l = i;
    }
    // return rangeWithDots;
    return setPages(rangeWithDots);
  };

  const handlePageChange = (category, pageNumber) => {
    getBlogs(category, pageNumber);
    setCurrentPage(pageNumber);
    pagination(pageNumber, lastPage);
  };

  const handlePrevPageChange = (category, pageNumber) => {
    getBlogs(category, pageNumber);
    setCurrentPage(pageNumber - 1);
    pagination(pageNumber - 1, lastPage);
  };

  const handleNextPageChange = (category, pageNumber) => {
    getBlogs(category, pageNumber);
    setCurrentPage(pageNumber + 1);
    pagination(pageNumber + 1, lastPage);
  };

  useEffect(() => {
    getCategory();
    getBlogs(0, 1);
    pagination(1, lastPage);
    // for (let i = 1, l = 20; i <= l; i++)
    //   console.log(`Selected page ${i}:`, pagination(i, l));
  }, []);
  useEffect(() => {
    pagination(1, lastPage);
    console.log("updating...");
  }, [lastPage]);

  return (
    <>
      <div className="container position-relative blogCategory pt-5">
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
            placeholder="What're you searching for?"
            id="searchInput"
            value={searchText}
            onChange={search}
          />
        </form>

        <p className="fs-1 fw-semibold text-center mb-2 my-md-4">
          Exploring the iRoid Solutions Tech Blog
        </p>
        <p className="f20 fs-5 fw-medium  text-center mx-auto wow animate__animated animate__fadeInRight">
          Introducing the future of tech with iRoid Solutions Tech Blog - Where
          innovation meets simplicity in every byte, making tech exploration a
          breeze!
        </p>

        <ul className="blogSearchPoint d-flex align-items-center justify-content-between gap-3 flex-nowrap py-5 pe-none">
          <li
            className={
              showBlogOn.name.toLowerCase() === "all"
                ? "activeBlogSelection rounded-3  pe-auto"
                : "pe-auto text-005490 rounded-3 blogCat"
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
                showBlogOn.name.toLowerCase() === category.name.toLowerCase()
                  ? "activeBlogSelection rounded-3 pe-auto"
                  : "pe-auto text-005490 rounded-3 blogCat"
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
      <div className="container blogContainer gap-3 w-100 pb-5">{mapBlogs}</div>
      <div className="blog-pagination d-flex align-items-center justify-content-center py-2 pb-md-5 gap-2">
        <button
          className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 blog-pagination-btn`}
          disabled={currentPage === 1}
          onClick={() => handlePrevPageChange(showBlogOn.id, currentPage)}
        >
          Prev
        </button>
        {pages.map((p, idx) => (
          <button
            className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 blog-pagination-btn ${
              p === "..." ? "pe-none border-0" : ""
            } ${currentPage === p ? "active-blog-page text-white" : ""}`}
            key={idx}
            onClick={() => handlePageChange(showBlogOn.id, p)}
          >
            {p}
          </button>
        ))}
        <button
          className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 blog-pagination-btn`}
          disabled={currentPage === lastPage}
          onClick={() => handleNextPageChange(showBlogOn.id, currentPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Blogs;

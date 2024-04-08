"use client";

import { useEffect, useState } from "react";
import "./blogHomePage.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axiosApi from "@/api/axiosConfig";

const Blogs = ({ blogData, blogCategory = [] }) => {
  const [searchText, setSearchText] = useState("");
  const [blogs, setBlogs] = useState(blogData);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [showBlogOn, setShowBlogOn] = useState("all");
  const router = useRouter();
  // blogs.map((b) =>
  //   b.category.map((c) =>
  //     console.log(c.name.toLowerCase().includes(showBlogOn))
  //   )
  // )
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
    setShowBlogOn("all");
    setSearchText(e.target.value);
  };

  const filterBlogs = () => {
    setFilteredBlogs(
      blogData.filter(
        (b) =>
          (showBlogOn === "all" ||
            b.category.map((c) => c.name.toLowerCase()).includes(showBlogOn)) &&
          (searchText.trim() === "" || b.title.includes(searchText.trim()))
      )
    );
  };

  const removeTags = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    const wrappedContent = `${textContent}`;
    return wrappedContent;
  };

  const mapBlogs = filteredBlogs.map((blog, idx) => {
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
    filterBlogs();
  }, [showBlogOn, searchText]);

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
            type="text"
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
      <div className="container blogContainer my-5 gap-3 w-100">{mapBlogs}</div>
    </>
  );
};

export default Blogs;

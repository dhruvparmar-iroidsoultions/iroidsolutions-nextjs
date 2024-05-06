"use client";

import axiosApi from "@/api/axiosConfig";
import LifeAtIroidCard from "@/components/lifeAtCard";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const getGallery = async (pageNumber) => {
    try {
      const { data } = await axiosApi.get(
        `/life-at-iroids?page=${pageNumber}&limit=6`
      );
      const lastPage = data.meta.last_page;
      setGallery(data.data);
      setLastPage(lastPage);
    } catch (error) {
      console.error("Fetching gallery error: ", error);
    }
  };

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

  const handlePageChange = (pageNumber) => {
    getGallery(pageNumber);
    setCurrentPage(pageNumber);
    pagination(pageNumber, lastPage);
  };

  const handlePrevPageChange = (pageNumber) => {
    getGallery(pageNumber);
    setCurrentPage(pageNumber - 1);
    pagination(pageNumber - 1, lastPage);
  };

  const handleNextPageChange = (pageNumber) => {
    getGallery(pageNumber);
    setCurrentPage(pageNumber + 1);
    pagination(pageNumber + 1, lastPage);
  };

  useEffect(() => {
    getGallery(1);
    pagination(1, lastPage);
  }, []);

  useEffect(() => {
    pagination(1, lastPage);
    console.log("updating...");
  }, [lastPage]);

  return (
    <div className="py-2 py-md-5">
      <div className="gallery">
        {gallery.map((i) => (
          <LifeAtIroidCard info={i} key={i.id} />
        ))}
      </div>
      <div className="gallery-pagination d-flex align-items-center justify-content-center pt-2 pt-md-5 mt-md-2 gap-2">
        <button
          className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 gallery-pagination-btn`}
          disabled={currentPage === 1}
          onClick={() => handlePrevPageChange(showBlogOn.id, currentPage)}
        >
          Prev
        </button>
        {pages.map((p, idx) => (
          <button
            className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 gallery-pagination-btn ${
              p === "..." ? "pe-none border-0" : ""
            } ${currentPage === p ? "active-gallery-page text-white" : ""}`}
            key={idx}
            onClick={() => handlePageChange(showBlogOn.id, p)}
          >
            {p}
          </button>
        ))}
        <button
          className={`py-2 px-3 fs-6 fw-semibold text-center rounded-4 border-0 gallery-pagination-btn`}
          disabled={currentPage === lastPage}
          onClick={() => handleNextPageChange(showBlogOn.id, currentPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;

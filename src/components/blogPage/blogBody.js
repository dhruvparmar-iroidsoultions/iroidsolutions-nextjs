"use client";

import { useEffect, useState } from "react";
import "./blogbody.css";
// import dynamic from "next/dynamic";
import HtmlContent from "../htmlContent";
import { usePathname, useRouter } from "next/navigation";
import Button from "../button";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "../contactUs";

const BlogBody = ({ post, latestBlogs }) => {
  console.log(post);
  const pathName = usePathname();
  const router = useRouter();

  const [socialLink, setSocialLink] = useState({
    url: "",
    title: "",
    img: "",
  });

  const removeTags = (html) => {
    const cleanText = html.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  // date, author and category data not avilable (not coming from api)
  const date = new Date(post.created_at * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  useEffect(() => {
    const url = `https://localhost:3000${pathName}`;
    setSocialLink({
      url: url,
      img: post.thumbnail,
      title: post.title,
    });
  }, []);

  return (
    <>
      <div className="blog-main-container container py-5 wow animate__animated animate__fadeIn">
        <p className="fs-1 fw-semibold lh-base text-center mt-3 mt-md-5 mb-0 mb-lg-4 py-3 py-lg-4">
          {post.title}
        </p>
        <div
          className="blogTopLine d-flex align-items-center justify-content-between gap-3 wow animate__animated animate__fadeIn"
          data-wow-delay="0.5s"
        >
          <div className="d-flex flex-wrap align-items-center justify-content-between fw-medium fs-5">
            <p className="mb-0 me-3 me-xl-5 d-flex align-items-center gap-2">
              <Image
                src={"/blog-profile.png"}
                alt="writer"
                width={25}
                height={25}
              />
              <span>John Andrew</span> {post.postBy}
            </p>
            <p className="mb-0 me-3 me-xl-5 d-flex align-items-center gap-2">
              <Image
                src={"/blog-date.png"}
                alt="writer"
                width={25}
                height={25}
              />
              <span>Mar 5, 2024</span> {/* {formattedDate} */}
            </p>
            <p className="mb-0 me-3 me-xl-5 d-flex align-items-center gap-2">
              <Image
                src={"/blog-time.png"}
                alt="writer"
                width={25}
                height={25}
              />
              <span>{post.time}</span>
            </p>
          </div>
          <div className="shareIcons d-flex align-items-center justify-content-md-between gap-5 gap-md-4">
            <Link
              className="d-none d-lg-block"
              href={`https://twitter.com/share?url=${socialLink.url}&text=${socialLink.title}`}
              target="_blank"
            >
              <svg
                className="twitter"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="52" height="52" rx="26" fill="white" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.4207 37.1719L28.4863 24.1495L28.5015 24.1617L36.5572 14.8281H33.8652L27.3028 22.425L22.0915 14.8281H15.0313L23.3725 26.9862L23.3715 26.9852L14.5742 37.1719H17.2662L24.5621 28.7198L30.3606 37.1719H37.4207ZM21.0249 16.8594L33.5605 35.1406H31.4272L18.8815 16.8594H21.0249Z"
                  fill="#005490"
                />
              </svg>
            </Link>
            <Link
              className="d-none d-lg-block"
              href={`https://www.facebook.com/sharer.php?u=${socialLink.url}`}
              target="_blank"
            >
              <svg
                className="facebook"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="52" height="52" rx="26" fill="white" />
                <path
                  d="M36.1209 33.5156L37.2736 26H30.0627V21.125C30.0627 19.0684 31.0682 17.0625 34.2979 17.0625H37.5783V10.6641C37.5783 10.6641 34.6025 10.1562 31.7588 10.1562C25.8174 10.1562 21.9377 13.7566 21.9377 20.2719V26H15.3361V33.5156H21.9377V51.6852C23.2631 51.8934 24.6189 52 26.0002 52C27.3814 52 28.7373 51.8934 30.0627 51.6852V33.5156H36.1209Z"
                  fill="#005490"
                />
              </svg>
            </Link>
            <Link
              className="d-none d-lg-block"
              href={`https://www.linkedin.com/shareArticle?url=${socialLink.url}&title=${socialLink.title}`}
              target="_blank"
            >
              <svg
                className="linkedin"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="52" height="52" rx="26" fill="white" />
                <path
                  d="M38.1885 11.6992H13.8109C13.251 11.6992 12.714 11.9217 12.3181 12.3176C11.9221 12.7135 11.6997 13.2505 11.6997 13.8105V38.188C11.6997 38.7479 11.9221 39.2849 12.3181 39.6809C12.714 40.0768 13.251 40.2992 13.8109 40.2992H38.1885C38.7484 40.2992 39.2854 40.0768 39.6813 39.6809C40.0773 39.2849 40.2997 38.7479 40.2997 38.188V13.8105C40.2997 13.2505 40.0773 12.7135 39.6813 12.3176C39.2854 11.9217 38.7484 11.6992 38.1885 11.6992ZM20.2241 36.0628H15.9242V22.4044H20.2241V36.0628ZM18.0712 20.5116C17.5834 20.5088 17.1074 20.3617 16.7032 20.0887C16.299 19.8156 15.9848 19.429 15.8001 18.9775C15.6154 18.5261 15.5686 18.0301 15.6656 17.552C15.7626 17.074 15.999 16.6354 16.345 16.2916C16.691 15.9479 17.1311 15.7143 17.6097 15.6204C18.0884 15.5264 18.5841 15.5764 19.0344 15.764C19.4846 15.9515 19.8692 16.2683 20.1396 16.6742C20.4101 17.0801 20.5542 17.5571 20.5538 18.0448C20.5584 18.3714 20.4972 18.6955 20.3739 18.9979C20.2505 19.3003 20.0676 19.5748 19.8359 19.805C19.6042 20.0352 19.3286 20.2164 19.0254 20.3378C18.7222 20.4592 18.3977 20.5183 18.0712 20.5116ZM36.0733 36.0748H31.7753V28.6129C31.7753 26.4123 30.8399 25.7331 29.6323 25.7331C28.3572 25.7331 27.106 26.6944 27.106 28.6686V36.0748H22.806V22.4143H26.9411V24.3071H26.9967C27.4118 23.4669 28.8657 22.031 31.0842 22.031C33.4834 22.031 36.0752 23.455 36.0752 27.6258L36.0733 36.0748Z"
                  fill="#005490"
                />
              </svg>
            </Link>
            <Link
              className="d-none d-lg-block"
              href={`https://pinterest.com/pin/create/bookmarklet/?media=${socialLink.img}&url=${socialLink.url}`}
              target="_blank"
            >
              <svg
                className="pinterest"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="52" height="52" rx="26" fill="white" />
                <path
                  d="M25.9935 10.3984C17.3689 10.3984 10.3999 17.3802 10.3999 25.992C10.3999 32.6016 14.5069 38.2487 20.3079 40.5204C20.1668 39.2883 20.0512 37.3888 20.3593 36.0412C20.6416 34.822 22.1817 28.2894 22.1817 28.2894C22.1817 28.2894 21.7197 27.3525 21.7197 25.9792C21.7197 23.8102 22.9774 22.1931 24.5432 22.1931C25.878 22.1931 26.5197 23.1942 26.5197 24.3877C26.5197 25.7225 25.6726 27.7246 25.2234 29.5856C24.8512 31.1385 26.0063 32.4091 27.5336 32.4091C30.3058 32.4091 32.4363 29.4829 32.4363 25.2733C32.4363 21.5386 29.7539 18.9332 25.9165 18.9332C21.4758 18.9332 18.8705 22.2572 18.8705 25.6968C18.8705 27.0316 19.3838 28.469 20.0256 29.2519C20.1539 29.4059 20.1668 29.5471 20.1282 29.7011C20.0127 30.1888 19.7432 31.254 19.6919 31.4722C19.6277 31.7546 19.4609 31.8188 19.1657 31.6776C17.2405 30.7535 16.0341 27.9043 16.0341 25.6198C16.0341 20.7043 19.602 16.1867 26.34 16.1867C31.7432 16.1867 35.9529 20.0369 35.9529 25.1963C35.9529 30.5738 32.5646 34.899 27.8673 34.899C26.2887 34.899 24.7999 34.0776 24.2994 33.1022C24.2994 33.1022 23.5165 36.0797 23.324 36.8113C22.9774 38.1717 22.0277 39.8658 21.386 40.9054C22.8491 41.3546 24.3892 41.5984 26.0063 41.5984C34.6181 41.5984 41.5999 34.6166 41.5999 26.0049C41.5871 17.3802 34.6052 10.3984 25.9935 10.3984Z"
                  fill="#005490"
                />
              </svg>
            </Link>
            <svg
              className="share"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => navigator.clipboard.writeText(socialLink.url)}
            >
              <circle cx="26" cy="26" r="26" fill="white" />
              <path
                d="M32.6673 30.4564C31.3247 30.4564 30.1222 31.0619 29.3276 32.0088L21.3863 27.4919C21.5645 27.0279 21.6642 26.524 21.6642 26.0014C21.6642 25.4777 21.5634 24.975 21.3863 24.5109L29.3276 19.9909C30.1221 20.9389 31.3246 21.5433 32.6673 21.5433C35.0566 21.5433 37 19.6252 37 17.2717C37 14.9181 35.0545 13 32.6673 13C30.278 13 28.3346 14.9181 28.3346 17.2717C28.3346 17.7976 28.4355 18.2981 28.6125 18.7621L20.6724 23.2802C19.8779 22.3322 18.6754 21.7278 17.3327 21.7278C14.9434 21.7278 13 23.6459 13 25.9994C13 28.3529 14.9455 30.2711 17.3327 30.2711C18.6753 30.2711 19.8778 29.6656 20.6724 28.7187L28.6103 33.2379C28.4321 33.7019 28.3323 34.2058 28.3323 34.7284C28.3323 37.084 30.2778 39 32.665 39C35.0543 39 36.9977 37.0819 36.9977 34.7284C36.9966 32.3749 35.0567 30.4567 32.6673 30.4567V30.4564ZM29.7671 17.2695C29.7671 15.6939 31.0671 14.4121 32.6653 14.4121C34.2634 14.4121 35.5635 15.6938 35.5635 17.2695C35.5635 18.8451 34.2635 20.1269 32.6653 20.1269C31.8539 20.1269 31.1221 19.7954 30.5943 19.264C30.2581 18.927 30.0093 18.506 29.877 18.0397C29.8075 17.7934 29.7671 17.5358 29.7671 17.2695ZM17.3296 28.8589C15.7315 28.8589 14.4314 27.5772 14.4314 26.0015C14.4314 24.4259 15.7314 23.1441 17.3296 23.1441C18.141 23.1441 18.8728 23.4756 19.4006 24.007C19.7369 24.344 19.9857 24.765 20.1179 25.2312C20.1862 25.4776 20.2266 25.7351 20.2266 26.0003C20.2266 26.2665 20.1862 26.5262 20.1179 26.7693C19.9856 27.2355 19.7369 27.6576 19.4006 27.9935C18.8762 28.5249 18.1421 28.8589 17.3296 28.8589ZM32.6673 37.5874C31.0692 37.5874 29.7691 36.3058 29.7691 34.73C29.7691 34.4616 29.8094 34.2041 29.8778 33.9577C30.01 33.4915 30.2588 33.0694 30.595 32.7335C31.1229 32.202 31.8547 31.8706 32.6661 31.8706C34.2642 31.8706 35.5643 33.1522 35.5643 34.728C35.5643 36.3057 34.2655 37.5874 32.6673 37.5874Z"
                fill="#005490"
              />
            </svg>
          </div>
        </div>

        <div className="blogImg w-100 my-3 my-md-5 d-flex align-items-center justify-content-center rounded-4 overflow-hidden">
          <Image
            className="blog-cover-image"
            src={post?.cover_image}
            alt=""
            width={1200}
            height={800}
          />
        </div>
        <div className="blogContentContainer my-5 mx-auto wow animate__animated animate__fadeIn overflow-auto">
          <HtmlContent htmlContent={post.description} />
        </div>
      </div>
      <div className="latest-blogs-container pt-5 pb-3 pb-md-0">
        <p className="fs-1 fw-bolder text-center text-005490">
          Recent Blog Posts
        </p>
        <div className="container blogContainer pb-3 gap-3 w-100">
          {latestBlogs.map((blog, idx) => {
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
                className="blog p-3 text-decoration-none text-dark wow animate__animated animate__fadeInRight w-100 overflow-hidden"
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
                    <span>John Andrew</span> {blog.postBy}
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
                <p className="fs-6 fw-medium mb-0">
                  {first15Words}...
                  <span className="text-005490 fw-semibold"> Read More</span>
                </p>
              </Link>
            );
          })}
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center">
          <Button linkPath={"/blog"} />
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default BlogBody;
// export default dynamic(() => Promise.resolve(BlogBody), { ssr: false });

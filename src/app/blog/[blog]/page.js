import BlogComp from "@/pages/blog/blog";

const Blog = ({ params }) => {
  return (
    <>
      <BlogComp slug={params.blog} />
    </>
  );
};

export default Blog;

import axiosApi from "@/api/axiosConfig";
import BlogBody from "@/components/blogPage/blogBody";
// import { post } from "@/constant/sample";

const BlogComp = async ({ slug }) => {
  try {
    const response = await axiosApi.get(`/blog/detail/${slug}`);
    const blog = response.data.data;
    const latestBlogs = await axiosApi.get("/blogs?page=1&limit=3&latest=1");
    const blogs = latestBlogs.data.data;
    return <BlogBody post={blog} latestBlogs={blogs} />;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return <BlogBody post={[]} latestBlogs={[]} />;
  }
};

export default BlogComp;

import axiosApi from "@/api/axiosConfig";
import BlogBody from "@/components/blogPage/blogBody";
// import { post } from "@/constant/sample";

const BlogComp = async ({ slug }) => {
  try {
    const response = await axiosApi.get(`blog/detail/${slug}`);
    const blog = response.data;

    return <BlogBody post={blog.data} />;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return <BlogBody post={[]} />;
  }
};

export default BlogComp;

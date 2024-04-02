import axiosApi from "@/api/axiosConfig";
import BlogBody from "@/components/blogPage/blogBody";
import { post } from "@/constant/sample";

const BlogComp = async () => {
  try {
    // const response = await axiosApi.get("allBlogs");
    // const blogs = response.data;

    return <BlogBody post={post} />;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return <BlogBody post={[]} />;
  }
};

export default BlogComp;

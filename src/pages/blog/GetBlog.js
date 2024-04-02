import axiosApi from "@/api/axiosConfig";
import Blogs from "@/components/blogPage";
import { post } from "@/constant/sample";

const FetchBlog = async () => {
  try {
    // const response = await axiosApi.get("allBlogs");
    // const blogs = response.data;

    return <Blogs blogData={post.latestBlogs} />;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return <Blogs blogData={[]} />;
  }
};

export default FetchBlog;

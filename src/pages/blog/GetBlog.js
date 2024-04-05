import axiosApi from "@/api/axiosConfig";
import Blogs from "@/components/blogPage";
import { post } from "@/constant/sample";

const FetchBlog = async () => {
  try {
    // const response = await axiosApi.get("allBlogs");
    // const blogs = response.data;
    const res = await axiosApi.get("/blog-category?page=1");
    const names = res.data.data.map((item) => item.name);
    return <Blogs blogData={post.latestBlogs} blogCategory={names} />;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return <Blogs blogData={[]} />;
  }
};

export default FetchBlog;

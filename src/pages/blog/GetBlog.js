import axiosApi from "@/api/axiosConfig";
import Blogs from "@/components/blogPage";
import { post } from "@/constant/sample";

const FetchBlog = async () => {
  try {
    const response = await axiosApi.get("blogs?page=1&latest=1");
    const blogs = response.data.data;

    const category = await axiosApi.get("/blog-category?page=1");
    const names = category.data.data.map((item) => item.name);

    return <Blogs blogData={blogs} blogCategory={names} />;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return <Blogs blogData={[]} />;
  }
};

export default FetchBlog;

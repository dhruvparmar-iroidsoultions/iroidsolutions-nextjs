import axiosApi from "@/api/axiosConfig";
import Blogs from "@/components/home/blogs";

const FetchBlogs = async ({ show }) => {
  try {
    // const response = await axiosApi.get("allBlogsForWeb");
    // const data = response.data;
    const response = await axiosApi.get("/blogs?page=1&latest=1");
    const blogs = response.data.data;
    return <Blogs blogs={blogs} show={show} />;
  } catch (error) {
    console.error(error);
    return <Blogs blogs={[]} show={show} />;
  }
};

export default FetchBlogs;

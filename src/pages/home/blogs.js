import axiosApi from "@/api/axiosConfig";
import Blogs from "@/components/home/blogs";

const FetchBlogs = async ({ show }) => {
  try {
    const response = await axiosApi.get("allBlogsForWeb");
    const data = response.data;

    return <Blogs blogs={data} show={show} />;
  } catch (error) {
    console.error(error);
    return <Blogs blogs={[]} show={show} />;
  }
};

export default FetchBlogs;

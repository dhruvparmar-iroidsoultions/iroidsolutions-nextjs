import axiosApi from "@/api/axiosConfig";
import Blogs from "@/components/home/blogs";

const FetchBlogs = async () => {
  try {
    const response = await axiosApi.get("allBlogsForWeb");
    const data = response.data;

    return <Blogs blogs={data} />;
  } catch (error) {
    console.error(error);
    return <Blogs blogs={[]} />;
  }
};

export default FetchBlogs;

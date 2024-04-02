import TopBg from "@/components/topBg";
import FetchBlog from "@/pages/blog/GetBlog";

const BlogHomePage = () => {
  return (
    <>
      <TopBg
        state={"Blog"}
        text={
          "Insights on app development, website development and information technology"
        }
      />
      <FetchBlog />
    </>
  );
};

export default BlogHomePage;

import Blogs from "@/components/blogPage";
import TopBg from "@/components/topBg";

const BlogHomePage = () => {
  return (
    <>
      <TopBg
        state={"Our Latest Blog Post"}
        text={
          "Insights on app development, website development and information technology"
        }
      />
      <Blogs />
    </>
  );
};

export default BlogHomePage;

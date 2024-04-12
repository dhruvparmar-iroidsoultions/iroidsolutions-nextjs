import Button from "../button";
import Card from "../card";
import Link from "next/link";

const Blogs = ({ blogs, show = true }) => {
  const removeTags = (html) => {
    const cleanText = html.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  const mapBlog =
    blogs &&
    blogs.slice(0, 3).map((blog) => (
      <div className="col">
        <Card
          key={blog.id}
          cardOfClass={"blog"}
          cardText={blog.title}
          cardTitle={removeTags(blog.description)}
          img={blog.thumbnail}
          tag={
            <Link href={`/blog/${blog.slug}`} className="text-end mb-0">
              Read More
              <span>
                <img className="ms-2 " src={"/read more.png"} alt="" />
              </span>
            </Link>
          }
        />
      </div>
    ));
  return (
    <div className="container text-center d-flex flex-column align-items-center">
      {show && <p className="mt-3 mt-md-5 firstBlue">Blogs</p>}
      {show && (
        <p className="f38 wow animate__animated animate__fadeInLeft">
          Strategies & ideas to help your business succeed!
        </p>
      )}
      {show && (
        <p className="f20 mb-3 mb-md-5 wow animate__animated animate__fadeInRight">
          "Each blog post is a stepping stone on our journey of growth,
          providing us with inspiration, guidance, and the latest trends in the
          ever-evolving tech landscape."
        </p>
      )}
      <div className="blogs row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 g-lg-4 w-100 row wow animate__animated animate__fadeInUp">
        {mapBlog}
      </div>
      <Button linkPath="/blog" />
    </div>
  );
};

export default Blogs;

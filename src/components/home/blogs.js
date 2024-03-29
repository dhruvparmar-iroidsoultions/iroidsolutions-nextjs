import Button from "../button";
import Card from "../card";

const Blogs = ({ blogs }) => {
  const mapBlog =
    blogs &&
    blogs.slice(0, 3).map((blog) => (
      <Card
        key={blog._id}
        cardOfClass={"blog"}
        cardText={blog.description}
        cardTitle={blog.title}
        img={blog.img}
        tag={
          <p className="text-end mb-0">
            Read More
            <span>
              <img className="ms-2 " src={"/read more.png"} alt="" />
            </span>
          </p>
        }
      />
    ));
  return (
    <div className="container text-center d-flex flex-column align-items-center">
      <p className="mt-5 firstBlue">Blogs</p>
      <p className="f38 wow animate__animated animate__fadeInLeft">
        Strategies & ideas to help your business succeed!
      </p>
      <p className="f20 mb-5 wow animate__animated animate__fadeInRight">
        "Each blog post is a stepping stone on our journey of growth, providing
        us with inspiration, guidance, and the latest trends in the
        ever-evolving tech landscape."
      </p>
      <div className="blogs w-100 d-flex flex-column flex-md-row flex-wrap flex-lg-nowrap gap-5 justify-content-center justify-content-lg-between wow animate__animated animate__fadeInUp">
        {mapBlog}
      </div>
      <Button linkPath="/blog" />
    </div>
  );
};

export default Blogs;

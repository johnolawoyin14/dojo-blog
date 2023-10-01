import BlogList from "./BlogList";
import useFetch from "./usefectch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8001/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div className="wait">Loading...</div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter(( blog)=>
blog.author==="John"
     )} title="John's Blog!"/> */}
    </div>
  );
};

export default Home;

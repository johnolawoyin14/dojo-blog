import { useParams } from "react-router-dom";
import useFetch from "./usefectch";
import { useHistory } from "react-router-dom";

const Blogdetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8001/blogs/" + id);
  const History = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8001/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      History.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div className="wait">Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;

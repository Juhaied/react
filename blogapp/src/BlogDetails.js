import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const{data:blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+id);
    return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog &&(
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <h1>{blog.body}</h1>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
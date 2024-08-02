import "../styles/blogPreview.css";
import { Link } from "react-router-dom";
import blogsData from "../static/blogs.json";
import React from "react";

const BlogPreview = () => {
  const [blogs, setBlogs] = React.useState(blogsData.blogPosts);
  return ( 
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog-post" key={blog.id}>
          <div className="blog-text">
            <h2 style={{ display: "inline-block" }}>
              <Link className="blog-title" to={`${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                {blog.title}
              </Link>
            </h2>
            <div className="blog-intro">{blog.introduction}</div>
            <div className="blog-date" style={{ color: "grey" }}>{blog.date}</div>
            <button>
              <Link to={`${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>Read</Link>
            </button>
          </div>
          <div className="blog-img" style={{ backgroundImage: `url(${require(`../static/images/${blog.image}`)})` }}></div> 
        </div>
      ))}
    </div>
   );
}
 
export default BlogPreview;
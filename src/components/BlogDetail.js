import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../static/blogs.json";
import "../styles/blogDetail.css";
import BackIcon from "../static/icons/BackIcon.js";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.blogPosts.filter((blog) => blog.id === id);

  return (
    <div className="blog-detail">
      <div className="blog-page">
        <Link className="back-button" to="/blog">
          <BackIcon />
          <p>Back</p>
        </Link>
        <div className="blog-page-title">{blog[0].title}</div>
        <div className="blog-page-date">{blog[0].date}</div>
        <ReactMarkdown
          className="blog-page-content"
          children={blog[0].contentFile}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </div>
  );
};

export default BlogDetail;

/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { BLOG_URL, fetchData } from "../utils/utility";
import "./blog.css";

const Blog = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchBlogs = async () => {
    setIsLoading(true);

    try {
      const data = await fetchData(BLOG_URL);
      setItems(data.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      {isError && (
        <p className="errorMessage">Ups... Error while fetching the content</p>
      )}
      {isLoading ? (
        <p className="loading">Hang tight, getting you there...</p>
      ) : (
        <div className="list1">
          {items?.map((item) => (
            <div key={item.id} className={`blog-list`}>
              <a href={item.url} target="_blank">
                {item.urlToImage && (
                  <div className="image">
                    <img src={item.urlToImage} alt="url" loading="lazy" />
                  </div>
                )}
                <div className="blog-body">
                  <div className="post-info">
                    <p>{item.author}</p>
                    <div className="publishDate">
                      <p>{item.publishedAt}</p>
                    </div>
                  </div>
                  <div className="title">
                    <p>{item.title}</p>
                  </div>
                  <div className="content">
                    <p>{item.description}</p>
                    <p>{item.content}</p>
                  </div>
                  <div className="sourceInfo">
                    <p>SOURCE: {item.source.name}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Blog;

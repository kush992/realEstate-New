/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from "react";
import "./blog.css";

const Blog = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // newsapi api key: a78991520000448da9094c4f9325e40d
  // newsapi api link: https://newsapi.org/v2/everything?q=apple&from=2022-04-21&to=2022-04-21&apiKey=a78991520000448da9094c4f9325e40d

  //--------------------------------------------------------------------------------

  // https://www.thenewsapi.com/account/dashboard - API Token: 7BnnTSB6aYYAWxDk1iwIq5bME9EQ8lkNGiYFc5W4
  // All news: https://api.thenewsapi.com/v1/news/all?api_token=7BnnTSB6aYYAWxDk1iwIq5bME9EQ8lkNGiYFc5W4
  // Top stories: https://api.thenewsapi.com/v1/news/top?api_token=7BnnTSB6aYYAWxDk1iwIq5bME9EQ8lkNGiYFc5W4

  const fetchData = () => {
    setIsLoading(true);
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2022-03-22&sortBy=publishedAt&apiKey=a78991520000448da9094c4f9325e40d"
    )
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setItems(json);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="list1">
          {items.map((item) => (
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

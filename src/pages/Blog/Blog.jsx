import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MainFooter from "../../components/MainFooter/MainFooter";
import Spinner from "../../components/Spinner/Spinner";
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thetosinfaith"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();

    const timer = setTimeout(() => {
      setLoadingTimeout(true);
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const extractImage = (content) => {
    const regex = /<img[^>]+src="([^">]+)"/g;
    const matches = regex.exec(content);
    return matches ? matches[1] : null;
  };

  return (
    <>
      <Navbar />
      <div className="blog-container">
        <div className="blog-content">
          <h1>Read My Journal</h1>
          <p>Latest articles from Medium</p>
        </div>

        <div className="blog-posts">
          {isLoading ? (
            <Spinner />
          ) : posts.length > 0 ? (
            posts.map((post, index) => {
              const imageUrl = extractImage(post.content);
              return (
                <div key={index} className="blog-post">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className="blog-post-image"
                    />
                  )}
                  <h2>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </h2>
                  <p>
                    {post.description.replace(/<[^>]*>/g, "").slice(0, 100)}...
                  </p>
                </div>
              );
            })
          ) : (
            <p>
              {loadingTimeout ? "No blog posts available." : "Loading posts..."}
            </p>
          )}
        </div>
      </div>
      <MainFooter />
    </>
  );
};

export default Blog;

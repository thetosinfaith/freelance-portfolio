import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainFooter from '../../components/MainFooter/MainFooter';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thetosinfaith'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const extractImage = (content) => {
    const regex = /<img[^>]+src="([^">]+)"/g;
    const matches = regex.exec(content);
    return matches ? matches[1] : null;
  };

  return (
    <>
      <Navbar />
      <div className='blog-container'>
      <div className='blog-content'>
        <h1>Our Blog</h1>
        <p>Latest articles from Medium</p>
      </div>

      <div className="blog-posts">
        {posts.length > 0 ? (
          posts.map((post, index) => {
            const imageUrl = extractImage(post.content); // Extract image URL from content
            return (
              <div key={index} className="blog-post">
                {imageUrl && (
                  <img src={imageUrl} alt={post.title} className="blog-post-image" />
                )}
                <h2>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h2>
                <p>{post.description.replace(/<[^>]*>/g, '').slice(0, 200)}...</p>
              </div>
            );
          })
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
      </div>
      <MainFooter/>
    </>
  );
};

export default Blog;

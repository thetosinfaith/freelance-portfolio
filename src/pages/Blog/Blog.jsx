import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Blog.css'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <div>
      <h1>About Us</h1>
      <Link to="/">Back to Home</Link> 
    </div>
    

    <div className="blog-embed-container">
    <iframe
      src="https://cowrywise.com/blog/" 
      title="Blog"
      className="blog-embed-iframe"
    ></iframe>
  </div>
    </>
  )
}

export default Blog


import React from 'react';
import PropTypes from 'prop-types';
import Blog from '../blog';

const BlogList = ({ blogs, toggleBlog }) => (
  <ul>
    {blogs.map(blog => (
      <Blog key={blog.id} {...blog} onClick={() => toggleBlog(blog.id)} />
    ))}
  </ul>
)

BlogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleBlog: PropTypes.func.isRequired
}

export default BlogList;
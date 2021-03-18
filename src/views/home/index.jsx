import React, { Component } from 'react';
import AddBlog from '../add-blog';
import VisibleBlogList from '../visible-blog-list';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <AddBlog />
        <VisibleBlogList />
      </div>
    )
  }
}

export default Home;
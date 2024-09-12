import React from "react";
import { Helmet } from "react-helmet"

import Timeline from '../components/Timeline';
import Nav from '../components/Nav';
import '../styles/main.scss';
import '../styles/blog.scss';

export default () => {
  const PostItem = (props) => {
    const {
      url,
      title,
      date
    } = props;

    return (
      <li class="post">
        <a href={url}>
          <span>{ title }</span>
          <span class="post-date">{ date }</span>
        </a>
      </li>
    )
  }

  const PostGroup = (props) => {
    return (
      <div class="year-section">
        <div class="post-year" id="2019">2019</div>
        <ul class="posts">
          { props.children }
        </ul>
      </div>
    )
  }

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700|Raleway:400,500,700|Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav />
      <main class="container">
        <PostGroup>
          <PostItem url="/" title="Post 1" date="Mar 10"/>
          <PostItem url="/" title="Post 2" date="Mar 11"/>
          <PostItem url="/" title="Post 3" date="Mar 12"/>
        </PostGroup>
	    </main>
    </div>
  )
}

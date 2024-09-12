import React from "react";
import { Helmet } from "react-helmet"

import Timeline from '../components/Timeline';
import Nav from '../components/Nav';
import '../styles/main.scss';
import '../styles/home.scss';

export default () => {
  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700|Raleway:400,500,700|Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="container">
        <Nav />
        <div className="content">
          <p className="bio">
            I am a Software Engineer based in New York with a passion for making incredible web applications. Currently I am a developer at Policygenius, where I am building full stack web apps in React, Ruby on Rails, and Go. Outside of work you can find me at the gym, picking up heavy things and putting them back down. <br /> <br />If you want to get to know more about me or want to work on a project together, feel free to contact me on sunnyvmistry at gmail.com.
          </p>
          
          <div className="image-container">
            <img src="/profile-photo.jpg" />
          </div>
        </div>

        <div className="social-icons">
          <a href="https://github.com/sunnymis">
            <img className="icon" src="/icons/github-logo.svg" />
          </a>
          <a href="https://www.linkedin.com/in/sunnymistry/">
            <img className="icon" src="/icons/linkedin-logo.svg" />
          </a>
          <a href="mailto:sunny.v.mistry@gmail.com">
            <img className="icon" src="/icons/email-icon.svg" />
          </a>
        </div>
      </div>
    </div>
  )
}

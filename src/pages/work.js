
import React from "react";
import { Helmet } from "react-helmet"

import Timeline from '../components/Timeline';
import Nav from '../components/Nav';
import '../styles/main.scss';

export default () => {
  return (
    <div className="container">
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700|Raleway:400,500,700|Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Nav />
      <Timeline />
    </div>
  )
}

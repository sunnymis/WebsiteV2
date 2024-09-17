// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import Timeline from '../components/Timeline';
import type { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const AboutTemplate = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const { frontmatter } = data.markdownRemark;
  const { title: pageTitle, description: pageDescription, socialImage } = frontmatter;
  const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImage} >
      <Sidebar />
      <Page title="About Me">
        <h2>Who am I?</h2>
        <p>
          Hey 👋! I am a Software Engineer based in New York with a passion for building incredible web applications. Currently I am a developer at Policygenius, where I am building full stack web apps in React, Ruby on Rails, and Go. Outside of work you can find me at the gym, picking up heavy things and putting them back down. <br /> <br />If you want to get to know more about me or want to work on a project together, feel free to get in touch via email or LinkedIn! 
        </p>
        <h2>Work Experience</h2>
        <Timeline />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query AboutBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        socialImage
      }
    }
  }
`;

export default AboutTemplate;

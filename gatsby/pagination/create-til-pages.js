'use strict';

const path = require('path');
const siteConfig = require('../../config.js');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "til" }, draft: { ne: true } } }
      ) { totalCount }
    }
  `);

  const { tilPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / tilPerPage);

  for (let i = 0; i < numPages; i += 1) {
    createPage({
      path: i === 0 ? '/til' : `/til/page/${i}`,
      component: path.resolve('./src/templates/til-template.js'),
      context: {
        currentPage: i,
        postsLimit: tilPerPage,
        postsOffset: i * tilPerPage,
        prevPagePath: i <= 1 ? '/til' : `/til/page/${i - 1}`,
        nextPagePath: `/til/page/${i + 1}`,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1
      }
    });
  }
};

const path = require('path');
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
plugins: [
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      cssLoaderOptions: {
        camelCase: false,
      },
      includePaths: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/components/**/**'),
      ],
    }
  },
  `gatsby-plugin-react-helmet`,
]
}

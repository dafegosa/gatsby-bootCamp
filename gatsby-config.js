/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Daniel Fernando Gómez Salazar',
    author: 'Dafegosa',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:  `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
};

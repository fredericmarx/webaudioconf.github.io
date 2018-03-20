module.exports = {
  siteMetadata: {
    siteUrl: 'http://webaudioconf.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-less`
  ]
}

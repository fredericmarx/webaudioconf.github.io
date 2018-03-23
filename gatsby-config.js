module.exports = {
  siteMetadata: {
    siteUrl: 'https://webaudioconf.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-plugin-less`
  ]
}

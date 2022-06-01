const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Ida Trøan's Portfolio`,
    siteUrl: `https://www.idatroan.no`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "ecvk87bd",
      "dataset": "production"
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/favicon_white.png'
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: path.join(__dirname, `src`, `images`)
    }
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-image',
  'gatsby-plugin-netlify',
  'gatsby-plugin-mdx',
  'gatsby-plugin-sharp'
]};
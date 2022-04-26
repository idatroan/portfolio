module.exports = {
  siteMetadata: {
    title: `idatroan`,
    siteUrl: `https://www.idatroan.no`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "zrnl608k",
      "dataset": "production"
    }
  },
  'gatsby-plugin-image',
  'gatsby-plugin-netlify'

]
};
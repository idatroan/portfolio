module.exports = {
  siteMetadata: {
    title: `idatroan`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "zrnl608k",
      "dataset": "production"
    }
  }]
};
module.exports = {
  pathPrefix: `/walz.alexanderboenninger`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Blog',
    author: 'Alexander Bönninger',
    authorUrl: 'http://alexanderboenninger.de/',
  },
};

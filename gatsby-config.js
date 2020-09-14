module.exports = {
  assetPrefix: '/_deck',
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: 'decks'
      }
    }
  ]
}

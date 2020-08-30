module.exports = {
  siteMetadata: {
    title: `Check My Weather`,
    description: `Get the current weather and other useful information for your cite`,
    date: `2020`,
    author: `@nickyy00`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Check My Weather`,
        short_name: `CMW`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/weather/*`] },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/layout.js`),
      },
    },
    `gatsby-plugin-react-svg`,
  ],
};

module.exports = {
    siteMetadata: {
        title: `Data Translator`,
        description: `Data Translator`,
        keywords: `data translator, renci`,
        menuLinks: [
            {
                text: "About", path: "/",
            },
            {
                text: "Use Cases", path: "/use-cases",
            },
            {
                text: "Apps", path: "/apps",
                submenu: [
                    { text: "ROBOKOP", path: "/apps/robokop", },
                    { text: "ICEES", path: "/apps/icees", },
                    { text: "TranQL", path: "/apps/tranql", },
                ]
            },
            {
                text: "APIs", path: "/apis",
            },
            {
                text: "Publications", path: "/publications",
            },
            {
                text: "Team Science", path: "/team-science",
            },
        ]
    },
    pathPrefix: "/data-translator", // for github pages
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "pages",
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 800,
                        },
                    },
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                            strict: `ignore`
                        }
                    }
                ],
            },
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}

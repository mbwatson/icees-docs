module.exports = {
    siteMetadata: {
        title: `Data Translator`,
        description: `Data Translator`,
        keywords: `data translator, renci`,
        menuLinks: [
            {
                text: "Home",
                path: "/",
            },
            {
                text: "About",
                path: "/about",
                submenu: [
                    { text: "Program", path: "/about/program", },
                    { text: "Gamma", path: "/about/gamma", },
                    { text: "Green", path: "/about/green", },                ]
            },
            {
                text: "Use Cases",
                path: "/use-cases",
                submenu: [
                    { text: "Genetic", path: "/use-cases/genetic", },
                    { text: "Clinical", path: "/use-cases/clinical", },
                ]
            },
            {
                text: "Products",
                path: "/products",
                submenu: [
                    { text: "Apps", path: "/products/apps", },
                    { text: "APIs", path: "/products/apis", },
                    { text: "Data", path: "/products/data", },
                ]
            },
            {
                text: "Publications",
                path: "/publications",
            },
        ]
    },
    plugins: [
        `gatsby-plugin-sass`,
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
        `gatsby-transformer-remark`,
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
    pathPrefix: "/data-translator", // for github pages
}

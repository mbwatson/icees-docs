module.exports = {
    siteMetadata: {
        title: `Translator Program`,
        subtitle: `Teams Green and Gamma`,
        description: `Data Translator`,
        keywords: `data translator, renci`,
        menuLinks: [
            {
                text: "About", path: "/",
            },
            {
                text: "Use Cases", path: "/use-cases",
                submenu: [
                    { text: 'COP Insights', path: '/use-cases/cop-insights' },
                    { text: 'AOP Insights', path: '/use-cases/aop-insights' },
                    { text: 'Open Clinical Research', path: '/use-cases/open-clinical-research' },
                    { text: 'Serendipity', path: '/use-cases/serendipity' },
                    { text: 'Drug Discovery', path: '/use-cases/drug-discovery' },
                    { text: 'Hackathon Insights', path: '/use-cases/hackathon-insights' },
                    { text: 'Medication Indicators', path: '/use-cases/medication-indicators' },
                    { text: 'Racial Disparities', path: '/use-cases/racial-disparities' },
                ]
            },
            {
                text: "Apps", path: "/apps",
                submenu: [
                    { text: "ROBOKOP", path: "/apps/robokop", },
                    { text: "ICEES", path: "/apps/icees", },
                    { text: "TranQL", path: "/apps/tranql", },
                    { text: "Roadway Service", path: "/apps/roadway", },
                    { text: "CMAQ Service", path: "/apps/cmaq", },
                    { text: "ACS Service", path: "/apps/acs", },
                    { text: "CAMP FHIR", path: "/apps/camp-fhir", },
                    { text: "FHIR PIT", path: "/apps/fhir-pit", },
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

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    
    const loadTemplate = filename => path.resolve(`src/templates/${ filename }.js`)
    const defaultTemplate = loadTemplate('default')

    return graphql(`
        {
            allMarkdownRemark(
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                            template
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            let pageTemplate = defaultTemplate
            if (node.frontmatter.template) {
                pageTemplate = loadTemplate(node.frontmatter.template)
            }
            createPage({
                path: node.frontmatter.path,
                component: pageTemplate,
                context: {}, // additional data can be passed via context
            })
        })
    })
}
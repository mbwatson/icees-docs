import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Page/Page"
import SEO from "../components/Seo/Seo"
import Image from '../components/Image/Image' 

export default function Template({ data }) {
    console.log(data)
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <SEO
                title={ frontmatter.seo.title }
                description={ frontmatter.seo.description }
                keywords={ frontmatter.seo.keywords }
            />
            <h1>Use Case: { frontmatter.title }</h1>
            <div className="page-content" dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                seo {
                    title
                    keywords
                    description
                }
            }
        }
    }
`
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const titleQuery = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

const SiteTitle = styled.h1`
    color: #fff;
    margin: 0;
`

export default () => (
    <StaticQuery
        query={ titleQuery }
        render={
            data => (
                <Link to="/">
                    <SiteTitle>{ data.site.siteMetadata.title }</SiteTitle>
                </Link>
            )
        }
    />
)

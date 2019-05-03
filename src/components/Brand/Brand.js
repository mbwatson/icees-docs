import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import useWindowWidth from '../../hooks/useWindowWidth'

const SiteHeader = styled.h1`
    color: #fff;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
`

const Title = styled.div`
    text-align: ${ props => props.center ? 'center' : 'left' };
    flex: 1;
`

const Subtitle = styled.div`
    text-align: ${ props => props.center ? 'center' : 'left' };
    flex: 1;
    color: var(--color-accent);
    font-weight: normal;
    font-size: 80%;
`

export default () => {
    const windowWidth = useWindowWidth()
    console.log(windowWidth)

    return (
        <StaticQuery
            query={ titleQuery }
            render={
                data => (
                    <Link to="/">
                        <SiteHeader>
                            <Title center={ windowWidth < 600 }>
                                { data.site.siteMetadata.title }
                            </Title>
                            <Subtitle center={ windowWidth < 600 }>
                                { data.site.siteMetadata.subtitle }
                            </Subtitle>
                        </SiteHeader>
                    </Link>
                )
            }
        />
    )
}

const titleQuery = graphql`
    query SiteHeaderQuery {
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './Navigation.scss'
import { StaticQuery, Link } from 'gatsby'

export const MenuItem = ({ to, text, level, children }) => {
    return (
        <Link
            to={ to }
            className="menuItem"
            activeClassName="active"
            style={ level ? { paddingLeft: `calc(1rem + 10px * ${ level })` } : null }
        >
            { text }
            { children }
        </Link>
    )
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired, // location to which the link routes 
    text: PropTypes.string.isRequired, // text displayed for clicking
    level: PropTypes.number, // indent amount
}

export const NavigationSubmenu = styled.ul`
    position: absolute;
    left: 0;
    top: 100%;
`

export const NavigationMenu = () => (
    <StaticQuery
        query={
            graphql`
                query NavigationQuery {
                    site {
                        siteMetadata {
                            menuLinks {
                                text
                                path
                                submenu {
                                    text
                                    path
                                }
                            }
                        }
                    }
                }`
        }
        render={
            data => {
                return (
                    <nav className="menu">
                        {
                            data.site.siteMetadata.menuLinks.map(
                                item => {
                                    if (item.submenu) {
                                        return (
                                            <Fragment key={ item.path }>
                                                <MenuItem to={ item.path } text={ item.text } level={ 0 } />
                                                {
                                                    item.submenu.map(
                                                        subitem => <MenuItem key={ subitem.path } to={ subitem.path } text={ subitem.text } level={ 1 }/>
                                                    )
                                                }
                                            </Fragment>
                                        )
                                    } else {
                                        return <MenuItem key={ item.path } to={ item.path } text={ item.text } />
                                    }
                                }
                            )
                        }
                    </nav>
                )
            }
        }
    />
)


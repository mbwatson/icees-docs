import React from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import './Navigation.css'
import { StaticQuery, Link } from 'gatsby'

export const MenuItem = ({ to, text, children }) => {
    return (
        <Link
            to={ to }
            className="menuItem"
            activeClassName="active"
        >
            { text }
            { children }
        </Link>
    )
}

export const SubmenuItem = ({ to, text, children }) => {
    return (
        <Link
            to={ to }
            className="submenuItem"
            activeClassName="active"
         >
            { text }
            { children }
        </Link>
    )
}

export const NavigationSubmenu = styled.ul`
    position: absolute;
    left: 0;
    top: 100%;
`

MenuItem.propTypes = {
    to: PropTypes.node.isRequired,
    text: PropTypes.node.isRequired,
}

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
                                            <>
                                                <MenuItem key={ item.path } to={ item.path } text={ item.text } />
                                                {
                                                    item.submenu.map(
                                                        subitem => <SubmenuItem key={ subitem.path } to={ subitem.path } text={ subitem.text } />
                                                    )
                                                }
                                            </>
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

// export const NavigationMenu = () => {
//     return (
//         <nav className="NavigationMenu">
//             <MenuItem to="/" text="Home" />
//             <MenuItem to="/page-2" text="Two" />
//         </nav>
//     )
// }


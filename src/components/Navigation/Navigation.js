import React from 'react'
import PropTypes from "prop-types"
import './Navigation.css'
import { Link } from 'gatsby'

export const NavigationMenuItem = ({ to, text }) => {
    return (
        <Link
            to={ to }
            className="NavigationMenuItem"
            activeClassName="active"
        >
            { text }
        </Link>
    )
}

NavigationMenuItem.propTypes = {
    to: PropTypes.node.isRequired,
    text: PropTypes.node.isRequired,
}

export const NavigationMenu = () => {
    return (
        <nav className="NavigationMenu">
            <NavigationMenuItem to="/" text="Home" />
            <NavigationMenuItem to="/page-2" text="Two" />
        </nav>
    )
}


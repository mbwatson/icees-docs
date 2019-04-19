import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Toolbar } from '../../Toolbar/Toolbar'
import { NavigationMenu } from '../../Navigation/Navigation'
import Brand from '../../Brand/Brand'
import "./Page.css"

const Layout = ({ children }) => (
    <div className="site">
        <header>
            <div className="container">
                <Toolbar>
                    <Brand />
                    <NavigationMenu />
                </Toolbar>
            </div>
        </header>
        <main>
            <div className="Container">
                { children }
            </div>
        </main>
        <footer>
            <div className="container">
                &copy; {new Date().getFullYear()} <br/>
                Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
        </footer>
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import PropTypes from "prop-types"
import { Toolbar } from '../../Toolbar/Toolbar'
import { NavigationMenu } from '../../Navigation/Navigation'
import Brand from '../../Brand/Brand'
import "./Page.scss"

const Layout = ({ children }) => (
    <div className="site">
        <div className="sidebar">
            <NavigationMenu />
        </div>
        <main>
            <header>
                <div className="container">
                    <Toolbar>
                        <Brand />
                    </Toolbar>
                </div>
            </header>
            <div className="content">
                <div className="container">
                    { children }
                </div>
            </div>
            <footer>
                &copy; { new Date().getFullYear() } Data Translator
            </footer>
        </main>
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

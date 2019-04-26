import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import { Toolbar } from '../../Toolbar/Toolbar'
import MenuToggler from '../MenuToggler/MenuToggler'
import { NavigationMenu } from '../../Navigation/Navigation'
import Brand from '../../Brand/Brand'
import useWindowWidth from '../../../hooks/useWindowWidth'
import "./Page.scss"

const windowThreshold = 600

const Layout = ({ children }) => {
    const windowWidth = useWindowWidth()
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    useEffect(() => {
        if (windowWidth < windowThreshold) {
            setSidebarCollapsed(true)
        } else {
            setSidebarCollapsed(false)
        }
    }, [windowWidth])

    return (
        <div className="site">
            <header>
                <div className="container">
                    <Toolbar>
                        <Brand />
                    </Toolbar>
                </div>
            </header>
            <main>
                <MenuToggler open={ sidebarOpen } visible={ sidebarCollapsed } onClick={ handleSidebarToggle } />
                <aside className={ classnames('sidebar', sidebarCollapsed ? 'collapsed' : null, sidebarOpen ? 'open' : null) }>
                    <NavigationMenu />
                </aside>
                <div className="content">
                    <div className="container">
                        { children }
                    </div>
                </div>
            </main>
            <footer>
                &copy; { new Date().getFullYear() } Data Translator
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

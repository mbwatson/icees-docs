import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Toolbar } from '../../Toolbar/Toolbar'
import MenuToggler from '../MenuToggler/MenuToggler'
import { NavigationMenu } from '../../Navigation/Navigation'
import Brand from '../../Brand/Brand'
import useWindowWidth from '../../../hooks/useWindowWidth'
import Scroller from '../Scroller/Scroller'
import "./Page.scss"

const windowThreshold = 600

const Layout = ({ children }) => {
    const windowWidth = useWindowWidth()
    const headerElement = useRef(null)
    const [scrollThreshold, setScrollThreshold] = useState(0)
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

    useEffect(() => {
        setScrollThreshold(headerElement.current.offsetHeight)
    }, [headerElement])

    return (
        <div className="site">
            <header ref={ headerElement }>
                <div className="container">
                    <Toolbar>
                        <Brand />
                    </Toolbar>
                </div>
            </header>
            <main>
                <MenuToggler open={ sidebarOpen } visible={ sidebarCollapsed } onClick={ handleSidebarToggle } aria-label="Toggle Menu"/>
                <aside
                    className={
                        classnames(
                            'sidebar',
                            sidebarCollapsed ? 'collapsed' : null,
                            sidebarOpen ? 'open' : null
                        )
                    }
                >
                    <Scroller scrollThreshold={ scrollThreshold }>
                        <NavigationMenu />
                    </Scroller>
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

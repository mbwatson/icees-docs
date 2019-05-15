import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Rotator } from '../Rotator/Rotator'
import { ExpandMoreIcon } from '../Icons/ExpandMore'

const Menu = styled.div`
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    padding: 0;
`

Menu.propTypes = {
    children: PropTypes.node.isRequired,
}

const Item = styled.div`
    font-size: 90%;
    color: #666;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: color 250ms, letter-spacing 250ms;
    &:hover, &:focus {
        color: var(--color-accent);
        letter-spacing: 1.5px;
    }
`

Item.propTypes = {
    children: PropTypes.node.isRequired,
}

const LinkedItem = styled(Link)`
    font-size: 90%;
    color: #666;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
    letter-spacing: 1px;
    transition: color 250ms, letter-spacing 250ms;
    &:hover, &:focus {
        color: var(--color-accent);
        letter-spacing: 1.5px;
    }
    &.active {
        color: var(--color-accent);
    }
`

LinkedItem.propTypes = {
    children: PropTypes.node.isRequired,
}

const Expander = styled.div`
    width: 100%;
    transition: max-height 500ms;
    max-height: ${ props => props.expanded ? `${ props.children.length * 50 }px` : 0 };
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-left: 0.5rem;
`

Expander.propTypes = {
    children: PropTypes.node.isRequired,
}


const Sublist = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

Sublist.propTypes = {
    children: PropTypes.node.isRequired,
}

const ExpandingSublist = ({ title, children }) => {
    const [open, setOpen] = useState(true)

    const handleExpand = () => setOpen(!open)

    return (
        <Sublist>
            <Item onClick={ handleExpand } style={{ display: 'flex', justifyContent: 'space-between' }}>
                { title }
                <Rotator rotated={ open }>
                    <ExpandMoreIcon />
                </Rotator>
            </Item>
            <Expander expanded={ open }>
                { children }
            </Expander> 
        </Sublist>
    )
}

ExpandingSublist.propTypes = {
    children: PropTypes.node.isRequired,
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
                    <Menu>
                        {
                            data.site.siteMetadata.menuLinks.map(item =>
                                item.submenu ? (
                                    <ExpandingSublist title={ item.text } key={ item.text }>
                                        {
                                            item.submenu.map(subitem => (
                                                <LinkedItem key={ subitem.path } to={ subitem.path } activeClassName="active">
                                                    { subitem.text }
                                                </LinkedItem>
                                            ))
                                        }
                                    </ExpandingSublist>
                                ) : (
                                    <LinkedItem key={ item.path } to={ item.path }>
                                        { item.text }
                                    </LinkedItem>
                                )
                            )
                        }
                    </Menu>
                )
            }
        }
    />
)


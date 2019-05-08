import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useScrollPosition from '../../../hooks/useScrollPosition'

const Scroller = styled.div`
    transform: ${
        props => props.scrollPosition && props.scrollPosition >= props.scrollThreshold
            ? `translateY(${ props.scrollPosition - props.scrollThreshold }px)`
            : 'translateY(0)'
    }
`

export default props => {
    const scrollPosition = useScrollPosition(0)

    return (
        <Scroller scrollPosition={ scrollPosition } scrollThreshold={ props.scrollThreshold }>
            { props.children }
        </Scroller>
    ) 
}

Scroller.propTypes = {
    scrollThreshold: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
}

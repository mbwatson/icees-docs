import styled from 'styled-components'
import PropTypes from 'prop-types'

const MenuToggler = styled.button`
    display: ${ props => props.visible ? 'block' : 'none' };
    background-color: var(--color-accent);
    position: absolute;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    font-size: 300%;
    line-height: 3rem;
    border: none;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    border-radius: 50%;
    z-index: 2;
    overflow: hidden;
    &::before, &::after {
        transform: translateX(-50%);
        transition: opacity 500ms, transform 250ms;
        height: 6px;
        width: 25px;
        border-radius: 2px;
        left: 50%;
        opacity: 0.5;
        content: '';
        position: absolute;
        background-color: #222;
        transform-origin: 50% 50%;
    }
    &::before {
        top: 18px;
        ${
            props => props.open
                ? `opacity: 1; transform: rotate(45deg) translate(-5px, 13px);`
                : `translateX(-9px) rotate(45deg)`
        }
    }
    &::after {
        bottom: 18px;
        ${
            props => props.open
                ? `opacity: 1; transform: rotate(-45deg) translate(-5px, -13px);`
                : `translateX(0px) rotate(45deg)`
        }
    }
    &:hover {
        &::before, &::after {
            opacity: 1;
        }
    }
`

MenuToggler.propTypes = {
    visible: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default MenuToggler

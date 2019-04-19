import styled from 'styled-components'

export const Toolbar = styled.div`
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
    @media only screen and (min-width: 960px) {
        flex-direction: row;
        padding: 0 1rem 0 1rem;
        height: 100px;
    }
`
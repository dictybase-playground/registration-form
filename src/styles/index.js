import { injectGlobal } from "styled-components"
import styled from "styled-components"

injectGlobal([
    `
    body {
        margin: auto;
    }
  `
])

export const Background = styled.div`
    background-color: #eeeeee;
    height: 100vh;
    padding: 10px;
`

export const AlignRight = styled.div`
    text-align: right;
`

export const AlignLeft = styled.div`
    text-align: left;
`

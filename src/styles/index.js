import { injectGlobal } from "styled-components"
import styled from "styled-components"

injectGlobal([
    `
    body {
        margin: auto;
        background-color: #eeeeee;
    }
  `
])

export const Background = styled.div`
    padding: 10px;
`

export const HeaderStyle = styled.div`
    background: #3f51b5;
    color: white;
    padding: 5px;
    text-align: center;
`

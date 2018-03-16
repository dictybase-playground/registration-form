// @flow
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
    color: #fff;
    padding: 5px;
    text-align: center;
`

export const ErrorStyle = styled.div`
    color: #f44336;
    margin-top: 5px;
    margin-bottom: 10px;
`

export const AlignLeft = styled.div`
    text-align: left;
`

export const AlignRight = styled.div`
    text-align: right;
`

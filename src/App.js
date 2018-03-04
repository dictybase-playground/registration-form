import React from "react"
import MainAccount from "./components/MainAccount"
import styled from "styled-components"
import Grid from "material-ui/Grid"

const Background = styled.div`
    background-color: #eeeeee;
    height: 100vh;
    padding: 10px;
`

const App = () => {
    return (
        <Background>
            <center>
                <h1>Registration Form</h1>
            </center>
            <Grid container justify="center" spacing={24}>
                <MainAccount />
            </Grid>
        </Background>
    )
}

export default App

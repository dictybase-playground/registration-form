import React from "react"
import UserForm from "./components/UserForm"
import SocialForm from "./components/SocialForm"
import styled from "styled-components"
import Paper from "material-ui/Paper"
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
                <Grid item xs={4}>
                    <Paper style={{ padding: "10px" }}>
                        <UserForm />
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <SocialForm />
                    </Paper>
                </Grid>
            </Grid>
        </Background>
    )
}

export default App

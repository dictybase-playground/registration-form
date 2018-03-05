import React from "react"
import UserForm from "./components/UserForm"
import Paper from "material-ui/Paper"
import Grid from "material-ui/Grid"
import { Background } from "./styles"

const App = () => {
    return (
        <Background>
            <center>
                <h1>dictyBase Registration Form</h1>
            </center>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={7}>
                    <Paper style={{ padding: "10px" }}>
                        <UserForm />
                    </Paper>
                </Grid>
            </Grid>
        </Background>
    )
}

export default App

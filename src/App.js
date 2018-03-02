import React from "react"
import UserForm from "./components/UserForm"
import SocialForm from "./components/SocialForm"
import Paper from "material-ui/Paper"
import Grid from "material-ui/Grid"

const App = () => {
    return (
        <div>
            <center>
                <h1>Registration Form</h1>
            </center>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <Paper>
                        <UserForm />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <SocialForm />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default App

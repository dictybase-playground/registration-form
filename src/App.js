// @flow
import React from "react"
import MainEmailForm from "./components/MainEmailForm"
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
            <MainEmailForm />
          </Paper>
        </Grid>
      </Grid>
    </Background>
  )
}

export default App

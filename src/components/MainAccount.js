import React, { Component } from "react"
// import { Formik, Form } from "formik"
import SocialForm from "./SocialForm"
import NextButton from "../common/NextButton"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"
import { AlignRight } from "../styles"

class MainAccount extends Component {
    state = { showSocialForm: false }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({ showSocialForm: true })
    }

    renderContent() {
        if (this.state.showSocialForm) {
            return (
                <SocialForm
                    onBackClick={() => this.setState({ showSocialForm: false })}
                />
            )
        }

        return (
            <Grid container direction="row" justify="center" spacing={24}>
                <Grid item xs={6}>
                    <center>
                        <h3>Please enter your main Dicty account</h3>
                    </center>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                type="text"
                                name="mainAccount"
                                label="Main Account"
                                fullWidth
                            />
                        </div>
                        <br />
                        <Grid item xs={12}>
                            <AlignRight>
                                <NextButton />
                            </AlignRight>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        )
    }
    render() {
        return <div>{this.renderContent()}</div>
    }
}

export default MainAccount

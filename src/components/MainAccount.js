import React, { Component } from "react"
// import { Formik, Form } from "formik"
import SocialForm from "./SocialForm"
import NextButton from "../common/NextButton"
import Grid from "material-ui/Grid"

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
            <div>
                <Grid item xs={12}>
                    <center>
                        <h3>Please enter your main Dicty account</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="text" name="mainAccount" />
                            </div>
                            <br />
                            <NextButton />
                        </form>
                    </center>
                </Grid>
            </div>
        )
    }
    render() {
        return <div>{this.renderContent()}</div>
    }
}

export default MainAccount

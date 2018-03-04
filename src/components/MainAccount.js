import React, { Component } from "react"
// import { Formik, Form } from "formik"
import SocialForm from "./SocialForm"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import Icon from "material-ui/Icon"

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

                            <Button
                                type="submit"
                                size="small"
                                variant="raised"
                                color="primary">
                                Next <Icon>arrow forward</Icon>
                            </Button>
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

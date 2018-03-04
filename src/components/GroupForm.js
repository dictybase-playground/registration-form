import React, { Component } from "react"
// import { Formik, Form } from "formik"
import FinalReview from "./FinalReview"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import Icon from "material-ui/Icon"

class GroupForm extends Component {
    state = { showFinalReview: false }

    handleSubmit = () => {
        this.setState({ showFinalReview: true })
    }

    renderContent() {
        if (this.state.showFinalReview) {
            return (
                <FinalReview
                    onBackClick={() =>
                        this.setState({ showFinalReview: false })
                    }
                />
            )
        }

        return (
            <div>
                <Grid item xs={12}>
                    <center>
                        <h3>Group/Lab Information</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="text" name="google" />
                                <input type="text" name="orcid" />
                                <input type="text" name="facebook" />
                                <input type="text" name="linkedin" />
                            </div>
                            <Button
                                onClick={this.props.onBackClick}
                                size="small"
                                variant="raised"
                                color="secondary">
                                <Icon>arrow back</Icon>
                                Back
                            </Button>
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

export default GroupForm

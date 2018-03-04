import React, { Component } from "react"
// import { Formik, Form } from "formik"
import FinalReview from "./FinalReview"
import Grid from "material-ui/Grid"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"

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
                            <BackButton onBackClick={this.props.onBackClick} />
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

export default GroupForm

import React, { Component } from "react"
// import { Formik, Form } from "formik"
import FinalReview from "./FinalReview"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"
import Paper from "material-ui/Paper"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"
import { AlignRight, AlignLeft } from "../styles"

class CollaboratorsForm extends Component {
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
            <Grid container justify="center" spacing={24}>
                <Grid item xs={7}>
                    <center>
                        <h3>Your Collaborators and Associates</h3>
                        <p>
                            Enter the names of your collaborators or associates
                            (not listed previously):
                        </p>
                    </center>
                    <Paper style={{ margin: "5px", padding: "5px" }}>
                        <form onSubmit={this.handleSubmit}>
                            <Grid container justify="center" spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator1"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator2"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator3"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator4"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator5"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator6"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator7"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator8"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator9"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="text"
                                            name="collaborator10"
                                            label="Last name, First name"
                                            fullWidth
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <center>
                        <h3>Your Research Interests</h3>
                        <p>
                            Please enter a general description of your
                            scientific research interests. Note: Please do not
                            enter more than 250 words. Thanks!
                        </p>
                    </center>
                    <Paper style={{ margin: "5px", padding: "5px" }}>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <TextField
                                    type="text"
                                    name="interests"
                                    label="Research Interests"
                                    multiline
                                    rows={2}
                                    fullWidth
                                />
                            </div>
                            <br />
                            <Grid container justify="center" spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <AlignLeft>
                                        <BackButton
                                            onBackClick={this.props.onBackClick}
                                        />
                                    </AlignLeft>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <AlignRight>
                                        <NextButton />
                                    </AlignRight>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
    render() {
        return <div>{this.renderContent()}</div>
    }
}

export default CollaboratorsForm

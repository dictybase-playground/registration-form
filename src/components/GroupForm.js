import React, { Component } from "react"
// import { Formik, Form } from "formik"
import CollaboratorsForm from "./CollaboratorsForm"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"
import { AlignRight, AlignLeft } from "../styles"

class GroupForm extends Component {
    state = { showCollaboratorsForm: false }

    handleSubmit = () => {
        this.setState({ showCollaboratorsForm: true })
    }

    renderContent() {
        if (this.state.showCollaboratorsForm) {
            return (
                <CollaboratorsForm
                    onBackClick={() =>
                        this.setState({ showCollaboratorsForm: false })
                    }
                />
            )
        }

        return (
            <Grid container justify="center" spacing={24}>
                <Grid item xs={7}>
                    <center>
                        <h3>Option 1</h3>
                        <h4>
                            Complete if you are a Supervisor, Advisor, Lab Head,
                            Group Leader, or P.I.
                        </h4>
                        <p>
                            Enter the names of your students, post-docs,
                            technicians
                        </p>
                    </center>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container justify="center" spacing={24}>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student1"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student2"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student3"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student4"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student5"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student6"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student7"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student8"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student9"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="text"
                                        name="student10"
                                        label="Last name, First name"
                                        fullWidth
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={7}>
                    <center>
                        <h3>Option 2</h3>
                        <h4>
                            Complete if you have a Supervisor, Advisor, Lab
                            Head, Group Leader, or P.I.
                        </h4>
                        <p>
                            Enter the name(s) of your Supervisor, Advisor, Lab
                            Head, Group Leader, P.I.
                        </p>
                    </center>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                type="text"
                                name="supervisor1"
                                label="Last name, First name"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="supervisor2"
                                label="Last name, First name"
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
                </Grid>
            </Grid>
        )
    }
    render() {
        return <div>{this.renderContent()}</div>
    }
}

export default GroupForm

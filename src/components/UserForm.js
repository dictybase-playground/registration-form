import React, { Component } from "react"
// import { Formik, Form } from "formik"
import GroupForm from "./GroupForm"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"
import Paper from "material-ui/Paper"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"
import { AlignRight, AlignLeft } from "../styles"

class UserForm extends Component {
    state = { showGroupForm: false }

    handleSubmit = () => {
        this.setState({ showGroupForm: true })
    }

    renderContent() {
        if (this.state.showGroupForm) {
            return (
                <GroupForm
                    onBackClick={() => this.setState({ showGroupForm: false })}
                />
            )
        }

        return (
            <Grid container justify="center" spacing={24}>
                <Grid item xs={8}>
                    <center>
                        <h3>Your Address and Contact Information</h3>
                    </center>
                    <Paper style={{ margin: "5px", padding: "5px" }}>
                        <form onSubmit={this.handleSubmit}>
                            <Grid container justify="center" spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <div>
                                        <TextField
                                            type="firstName"
                                            name="firstName"
                                            label="First Name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="lastName"
                                            name="lastName"
                                            label="Last Name"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="email"
                                            name="email"
                                            label="Email"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="jobTitle"
                                            name="jobTitle"
                                            label="Job Title/Position"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="organization"
                                            name="organization"
                                            label="Organization"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="phone"
                                            name="phone"
                                            label="Phone Number"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="webpage"
                                            name="webpage"
                                            label="Webpage"
                                            placeholder="http://"
                                            fullWidth
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div>
                                        <TextField
                                            type="address1"
                                            name="address1"
                                            label="Street Address"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="address1"
                                            name="address1"
                                            label="Street Address"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="state"
                                            name="state"
                                            label="State/Province"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="region"
                                            name="region"
                                            label="Region"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            type="zip"
                                            name="zip"
                                            label="Zip/Postal Code"
                                            fullWidth
                                        />
                                    </div>
                                </Grid>
                            </Grid>
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

export default UserForm

import React, { Component } from "react"
// import { Formik, Form } from "formik"
import UserForm from "./UserForm"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"
import { AlignRight, AlignLeft } from "../styles"

class SocialForm extends Component {
    state = { showUserForm: false }

    handleSubmit = () => {
        this.setState({ showUserForm: true })
    }

    renderContent() {
        if (this.state.showUserForm) {
            return (
                <UserForm
                    onBackClick={() => this.setState({ showUserForm: false })}
                />
            )
        }

        return (
            <Grid container justify="center" spacing={24}>
                <Grid item xs={6}>
                    <center>
                        <h3>Your Social IDs</h3>
                    </center>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <TextField
                                type="text"
                                name="google"
                                label="Google"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="orcid"
                                label="ORCID"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="facebook"
                                label="Facebook"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                type="text"
                                name="linkedin"
                                label="LinkedIn"
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

export default SocialForm

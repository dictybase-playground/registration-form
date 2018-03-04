import React, { Component } from "react"
// import { Formik, Form } from "formik"
import UserForm from "./UserForm"
import Grid from "material-ui/Grid"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"

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
            <div>
                <Grid item xs={12}>
                    <center>
                        <h3>Social IDs</h3>
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

export default SocialForm

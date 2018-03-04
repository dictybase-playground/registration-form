import React, { Component } from "react"
// import { Formik, Form } from "formik"
import UserForm from "./UserForm"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import Icon from "material-ui/Icon"

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

export default SocialForm

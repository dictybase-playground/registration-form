import React, { Component } from "react"
// import { Formik, Form } from "formik"
import GroupForm from "./GroupForm"
import Grid from "material-ui/Grid"
import NextButton from "../common/NextButton"
import BackButton from "../common/BackButton"

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
            <div>
                <Grid item xs={12}>
                    <center>
                        <h3>User Information</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input type="text" name="firstName" />
                                <input type="text" name="lastName" />
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

export default UserForm

import React, { Component } from "react"
// import { Formik, Form } from "formik"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import BackButton from "../common/BackButton"
import { AlignRight, AlignLeft } from "../styles"

class FinalReview extends Component {
    render() {
        return (
            <Grid container justify="center" spacing={24}>
                <Grid item xs={7}>
                    <center>
                        <h3>Final Review</h3>
                        <p>
                            This is where you will see your final values before
                            submitting
                        </p>
                    </center>

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
                                <Button
                                    size="small"
                                    variant="raised"
                                    color="secondary">
                                    Submit
                                </Button>
                            </AlignRight>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default FinalReview

// @flow
import React from "react"
import { withFormik, Form } from "formik"
import Yup from "yup"
import TextField from "material-ui/TextField"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import { HeaderStyle, AlignRight } from "../styles"

const InnerForm = ({
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    setFieldValue,
    handleReset
}) => {
    return (
        <Form>
            <HeaderStyle>
                <h3>Please enter your main Dictybase email address</h3>
            </HeaderStyle>
            <TextField
                type="email"
                name="email"
                label="Main Dictybase Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <br />
            <br />
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={6}>
                    <AlignRight>
                        <Button
                            type="submit"
                            variant="raised"
                            color="primary"
                            disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </AlignRight>
                </Grid>
            </Grid>
        </Form>
    )
}

const MainEmailForm = withFormik({
    mapPropsToValues({ email }) {
        return {
            email: email || ""
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email is not valid")
            .required("Please enter your email address")
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            resetForm()
            setSubmitting(false)
            alert(JSON.stringify(values, null, 2))
            console.log(JSON.stringify(values, null, 2))
        }, 1000)
    }
})(InnerForm)

export default MainEmailForm

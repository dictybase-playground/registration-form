import React from "react"
import { withFormik, Form } from "formik"
import Yup from "yup"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Select from "material-ui/Select"
import { MenuItem } from "material-ui/Menu"
// import { FormControl } from "material-ui/Form"
import { InputLabel } from "material-ui/Input"
import countryList from "../utils/countryList"
import stateList from "../utils/stateList"

const InnerForm = ({
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    setFieldValue
}) => {
    return (
        <Form>
            <div>
                <TextField
                    type="firstName"
                    name="firstName"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
                {touched.firstName &&
                    errors.firstName && <div>{errors.firstName}</div>}
            </div>
            <div>
                <TextField
                    type="lastName"
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
                {touched.lastName &&
                    errors.lastName && <div>{errors.lastName}</div>}
            </div>
            <div>
                <TextField
                    type="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <TextField
                    type="jobTitle"
                    name="jobTitle"
                    label="Job Title/Position"
                    value={values.jobTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    type="organization"
                    name="organization"
                    label="Organization"
                    value={values.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
                {touched.organization &&
                    errors.organization && <div>{errors.organization}</div>}
            </div>
            <div>
                <TextField
                    type="address1"
                    name="address1"
                    label="Street Address"
                    value={values.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    type="address2"
                    name="address2"
                    label="Street Address"
                    value={values.address2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    type="city"
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <br />
            <div>
                <InputLabel>State</InputLabel>
                <Select
                    name="state"
                    fullWidth
                    value={values.state}
                    onChange={e => setFieldValue("state", e.target.value)}>
                    {stateList &&
                        stateList.map(item => {
                            return (
                                <MenuItem
                                    key={stateList.indexOf(item)}
                                    value={item}>
                                    {item}
                                </MenuItem>
                            )
                        })}
                </Select>
            </div>
            <div>
                <TextField
                    type="region"
                    name="region"
                    label="Region"
                    value={values.region}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <br />
            <div>
                <InputLabel>Country</InputLabel>
                <Select
                    name="country"
                    label="Country"
                    fullWidth
                    value={values.country}
                    onChange={e => setFieldValue("country", e.target.value)}>
                    {countryList &&
                        countryList.map(item => {
                            return (
                                <MenuItem
                                    key={countryList.indexOf(item)}
                                    value={item}>
                                    {item}
                                </MenuItem>
                            )
                        })}
                </Select>
            </div>
            <div>
                <TextField
                    type="zip"
                    name="zip"
                    label="Zip/Postal Code"
                    value={values.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    type="webLink1"
                    name="webLink1"
                    label="Web Link 1"
                    value={values.webLink1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <div>
                <TextField
                    type="webLink2"
                    name="webLink2"
                    label="Web Link 2"
                    value={values.webLink2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                />
            </div>
            <br />
            <Button
                type="submit"
                variant="raised"
                color="primary"
                disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </Form>
    )
}

const UserForm = withFormik({
    mapPropsToValues({
        firstName,
        lastName,
        email,
        jobTitle,
        organization,
        address1,
        address2,
        city,
        state,
        region,
        country,
        zip,
        webLink1,
        webLink2
    }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            jobTitle: jobTitle || "",
            organization: organization || "",
            address1: address1 || "",
            address2: address2 || "",
            city: city || "",
            state: state || "",
            region: region || "",
            country: country || "",
            zip: zip || "",
            webLink1: webLink1 || "",
            webLink2: webLink2 || ""
        }
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string()
            .email("Email is not valid")
            .required("Email is required"),
        jobTitle: Yup.string(),
        organization: Yup.string().required("Organization is required"),
        address1: Yup.string(),
        address2: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        region: Yup.string(),
        country: Yup.string(),
        zip: Yup.string(),
        webLink1: Yup.string(),
        webLink2: Yup.string()
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            resetForm()
            setSubmitting(false)
            console.log(JSON.stringify(values))
        }, 1000)
    }
})(InnerForm)

export default UserForm

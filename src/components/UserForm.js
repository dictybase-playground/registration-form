import React from "react"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Select from "material-ui/Select"
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
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.firstName &&
                    errors.firstName && <div>{errors.firstName}</div>}
            </div>
            <div>
                <TextField
                    type="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.lastName &&
                    errors.lastName && <div>{errors.lastName}</div>}
            </div>
            <div>
                <TextField
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <TextField
                    type="jobTitle"
                    name="jobTitle"
                    placeholder="Job Title/Position"
                    value={values.jobTitle}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <TextField
                    type="organization"
                    name="organization"
                    placeholder="Organization"
                    value={values.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.organization &&
                    errors.organization && <div>{errors.organization}</div>}
            </div>
            <div>
                <TextField
                    type="address1"
                    name="address1"
                    placeholder="Street Address"
                    value={values.address1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <TextField
                    type="address2"
                    name="address2"
                    placeholder="Street Address (if necessary)"
                    value={values.address2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <TextField
                    type="city"
                    name="city"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <Select
                    type="state"
                    name="state"
                    value={values.state}
                    onChange={e => setFieldValue("state", e.target.value)}>
                    {stateList &&
                        stateList.map(item => {
                            return (
                                <option
                                    key={stateList.indexOf(item)}
                                    value={item}>
                                    {item}
                                </option>
                            )
                        })}
                </Select>
            </div>
            <div>
                <TextField
                    type="region"
                    name="region"
                    placeholder="Region"
                    value={values.region}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <Select
                    type="country"
                    name="country"
                    value={values.country}
                    onChange={e => setFieldValue("country", e.target.value)}>
                    {countryList &&
                        countryList.map(item => {
                            return (
                                <option
                                    key={countryList.indexOf(item)}
                                    value={item}>
                                    {item}
                                </option>
                            )
                        })}
                </Select>
            </div>
            <div>
                <TextField
                    type="zip"
                    name="zip"
                    placeholder="Zip/Postal Code"
                    value={values.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <TextField
                    type="webLink1"
                    name="webLink1"
                    placeholder="Web Link 1"
                    value={values.webLink1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <TextField
                    type="webLink2"
                    name="webLink2"
                    placeholder="Web Link 2"
                    value={values.webLink2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
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

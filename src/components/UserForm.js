import React from "react"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"
import TextField from "material-ui/TextField"

const InnerForm = ({
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur
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
                <TextField
                    type="state"
                    name="state"
                    placeholder="State/Province"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
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
                <TextField
                    type="country"
                    name="country"
                    placeholder="Country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
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
        zip: Yup.number(),
        webLink1: Yup.string(),
        webLink2: Yup.string()
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            resetForm()
            setSubmitting(false)
        }, 1000)
    }
})(InnerForm)

export default UserForm

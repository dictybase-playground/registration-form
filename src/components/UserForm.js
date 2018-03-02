import React from "react"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"

const InnerForm = ({ values, errors, touched, isSubmitting }) => {
    return (
        <Form>
            <div>
                <Field
                    type="firstName"
                    name="firstName"
                    placeholder="First Name"
                />
                {touched.firstName &&
                    errors.firstName && <div>{errors.firstName}</div>}
            </div>
            <div>
                <Field
                    type="lastName"
                    name="lastName"
                    placeholder="Last Name"
                />
                {touched.lastName &&
                    errors.lastName && <div>{errors.lastName}</div>}
            </div>
            <div>
                <Field type="email" name="email" placeholder="Email" />
                {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <Field
                    type="jobTitle"
                    name="jobTitle"
                    placeholder="Job Title/Position"
                />
            </div>
            <div>
                <Field
                    type="organization"
                    name="organization"
                    placeholder="Organization"
                />
                {touched.organization &&
                    errors.organization && <div>{errors.organization}</div>}
            </div>
            <div>
                <Field
                    type="address1"
                    name="address1"
                    placeholder="Street Address"
                />
            </div>
            <div>
                <Field
                    type="address2"
                    name="address2"
                    placeholder="Street Address (if necessary)"
                />
            </div>
            <div>
                <Field type="city" name="city" placeholder="City" />
            </div>
            <div>
                <Field type="state" name="state" placeholder="State/Province" />
            </div>
            <div>
                <Field type="region" name="region" placeholder="Region" />
            </div>
            <div>
                <Field type="country" name="country" placeholder="Country" />
            </div>
            <div>
                <Field type="zip" name="zip" placeholder="Zip/Postal Code" />
            </div>
            <div>
                <Field
                    type="webLink1"
                    name="webLink1"
                    placeholder="Web Link 1"
                />
            </div>
            <div>
                <Field
                    type="webLink2"
                    name="webLink2"
                    placeholder="Web Link 2"
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

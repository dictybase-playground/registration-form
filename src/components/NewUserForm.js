// @flow
import React from "react"
import { withFormik, Form } from "formik"
import Yup from "yup"
import TextField from "material-ui/TextField"
import Grid from "material-ui/Grid"
import Button from "material-ui/Button"
import Select from "material-ui/Select"
import { MenuItem } from "material-ui/Menu"
import { InputLabel } from "material-ui/Input"
import countryList from "../utils/countryList"
import stateList from "../utils/stateList"
import provinceList from "../utils/provinceList"
import { HeaderStyle, ErrorStyle, AlignLeft, AlignRight } from "../styles"

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
                <h3>Your Address and Contact Information</h3>
            </HeaderStyle>
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
                errors.firstName && (
                    <ErrorStyle>* {errors.firstName}</ErrorStyle>
                )}
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
                errors.lastName && <ErrorStyle>* {errors.lastName}</ErrorStyle>}
            <TextField
                type="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            {touched.email &&
                errors.email && <ErrorStyle>* {errors.email}</ErrorStyle>}
            <TextField
                type="jobTitle"
                name="jobTitle"
                label="Job Title/Position"
                value={values.jobTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
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
                errors.organization && (
                    <ErrorStyle>* {errors.organization}</ErrorStyle>
                )}
            <TextField
                type="address1"
                name="address1"
                label="Street Address"
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <TextField
                type="address2"
                name="address2"
                label="Street Address"
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <TextField
                type="city"
                name="city"
                label="City"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <br />
            <br />
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
            <br />
            <br />
            <InputLabel>Province</InputLabel>
            <Select
                name="province"
                fullWidth
                value={values.province}
                onChange={e => setFieldValue("province", e.target.value)}>
                {provinceList &&
                    provinceList.map(item => {
                        return (
                            <MenuItem
                                key={provinceList.indexOf(item)}
                                value={item}>
                                {item}
                            </MenuItem>
                        )
                    })}
            </Select>
            <TextField
                type="region"
                name="region"
                label="Region"
                value={values.region}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <br />
            <br />
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
            <TextField
                type="zip"
                name="zip"
                label="Zip/Postal Code"
                value={values.zip}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <TextField
                type="phone"
                name="phone"
                label="Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <TextField
                type="webLink1"
                name="webLink1"
                label="Web Link 1"
                placeholder="http://"
                value={values.webLink1}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <TextField
                type="webLink2"
                name="webLink2"
                label="Web Link 2"
                placeholder="http://"
                value={values.webLink2}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
            <br />
            <br />
            <HeaderStyle>
                <h3>Your Group/Lab Members and Associates</h3>
            </HeaderStyle>
            <center>
                <h3>Option 1:</h3>
            </center>
            <h4>
                Complete if you are a Supervisor, Advisor, Lab Head, Group
                Leader, or P.I.
            </h4>
            <p>Enter the names of your students, post-docs, technicians</p>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="text"
                        name="student1"
                        placeholder="Last name, First name"
                        value={values.student1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student2"
                        placeholder="Last name, First name"
                        value={values.student2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student3"
                        placeholder="Last name, First name"
                        value={values.student3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student4"
                        placeholder="Last name, First name"
                        value={values.student4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student5"
                        placeholder="Last name, First name"
                        value={values.student5}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="text"
                        name="student6"
                        placeholder="Last name, First name"
                        value={values.student6}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student7"
                        placeholder="Last name, First name"
                        value={values.student7}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student8"
                        placeholder="Last name, First name"
                        value={values.student8}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student9"
                        placeholder="Last name, First name"
                        value={values.student9}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="student10"
                        placeholder="Last name, First name"
                        value={values.student10}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <center>
                <h3>Option 2: </h3>
            </center>
            <h4>
                Complete if you have a Supervisor, Advisor, Lab Head, Group
                Leader, or P.I.
            </h4>
            <p>
                Enter the name(s) of your Supervisor, Advisor, Lab Head, Group
                Leader, P.I.
            </p>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="text"
                        name="supervisor1"
                        placeholder="Last name, First name"
                        value={values.supervisor1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="text"
                        name="supervisor2"
                        placeholder="Last name, First name"
                        value={values.supervisor2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <br />
            <HeaderStyle>
                <h3>Your Collaborators and Associates</h3>
            </HeaderStyle>
            <h4>
                Enter the names of your collaborators or associates (not listed
                above)
            </h4>
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="text"
                        name="collaborator1"
                        placeholder="Last name, First name"
                        value={values.collaborator1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator2"
                        placeholder="Last name, First name"
                        value={values.collaborator2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator3"
                        placeholder="Last name, First name"
                        value={values.collaborator3}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator4"
                        placeholder="Last name, First name"
                        value={values.collaborator4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator5"
                        placeholder="Last name, First name"
                        value={values.collaborator5}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        type="text"
                        name="collaborator6"
                        placeholder="Last name, First name"
                        value={values.collaborator6}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator7"
                        placeholder="Last name, First name"
                        value={values.collaborator7}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator8"
                        placeholder="Last name, First name"
                        value={values.collaborator8}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator9"
                        placeholder="Last name, First name"
                        value={values.collaborator9}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                    <TextField
                        type="text"
                        name="collaborator10"
                        placeholder="Last name, First name"
                        value={values.collaborator10}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <br />
            <HeaderStyle>
                <h3>Your Research Interests</h3>
            </HeaderStyle>
            <h4>
                Please enter a general description of your scientific research
                interests. Note: Please do not enter more than 250 words.
                Thanks!
            </h4>
            <TextField
                type="text"
                name="interests"
                multiline
                rows={3}
                value={values.interests}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
            />
        </Form>
    )
}

const NewUserForm = withFormik({
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
        province,
        region,
        country,
        zip,
        phone,
        webLink1,
        webLink2,
        student1,
        student2,
        student3,
        student4,
        student5,
        student6,
        student7,
        student8,
        student9,
        student10,
        supervisor1,
        supervisor2,
        collaborator1,
        collaborator2,
        collaborator3,
        collaborator4,
        collaborator5,
        collaborator6,
        collaborator7,
        collaborator8,
        collaborator9,
        collaborator10,
        interests
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
            province: province || "",
            region: region || "",
            country: country || "",
            zip: zip || "",
            phone: phone || "",
            webLink1: webLink1 || "",
            webLink2: webLink2 || "",
            student1: student1 || "",
            student2: student2 || "",
            student3: student3 || "",
            student4: student4 || "",
            student5: student5 || "",
            student6: student6 || "",
            student7: student7 || "",
            student8: student8 || "",
            student9: student9 || "",
            student10: student10 || "",
            supervisor1: supervisor1 || "",
            supervisor2: supervisor2 || "",
            collaborator1: collaborator1 || "",
            collaborator2: collaborator2 || "",
            collaborator3: collaborator3 || "",
            collaborator4: collaborator4 || "",
            collaborator5: collaborator5 || "",
            collaborator6: collaborator6 || "",
            collaborator7: collaborator7 || "",
            collaborator8: collaborator8 || "",
            collaborator9: collaborator9 || "",
            collaborator10: collaborator10 || "",
            interests: interests || ""
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
        phone: Yup.number(),
        webLink1: Yup.string(),
        webLink2: Yup.string()
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

export default NewUserForm

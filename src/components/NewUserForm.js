// @flow
import React from "react"
import { withFormik, Form } from "formik"
import Yup from "yup"
import TextField from "material-ui/TextField"
import Select from "material-ui/Select"
import { MenuItem } from "material-ui/Menu"
import { InputLabel } from "material-ui/Input"
import countryList from "../utils/countryList"
import stateList from "../utils/stateList"
import { HeaderStyle, ErrorStyle } from "../styles"

/**
 * This is the creation form for new users
 */

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
        type="first_name"
        name="first_name"
        label="First Name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      {touched.firstName &&
        errors.firstName && <ErrorStyle>* {errors.firstName}</ErrorStyle>}
      <TextField
        type="last_name"
        name="last_name"
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
        type="organization"
        name="organization"
        label="Organization"
        value={values.organization}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      {touched.organization &&
        errors.organization && <ErrorStyle>* {errors.organization}</ErrorStyle>}
      <TextField
        type="group_name"
        name="group_name"
        label="Group Name"
        value={values.groupName}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        type="first_address"
        name="first_address"
        label="Street Address"
        value={values.firstAddress}
        onChange={handleChange}
        onBlur={handleBlur}
        fullWidth
      />
      <TextField
        type="second_address"
        name="second_address"
        label="Street Address"
        value={values.secondAddress}
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
      <InputLabel>State/Province</InputLabel>
      <Select
        name="state"
        fullWidth
        value={values.state}
        onChange={(e: any) => setFieldValue("state", e.target.value)}>
        {stateList &&
          stateList.map(item => {
            return (
              <MenuItem key={stateList.indexOf(item)} value={item}>
                {item}
              </MenuItem>
            )
          })}
      </Select>
      <br />
      <br />
      <TextField
        type="zip"
        name="zip"
        label="Zip/Postal Code"
        value={values.zip}
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
        onChange={(e: any) => setFieldValue("country", e.target.value)}>
        {countryList &&
          countryList.map(item => {
            return (
              <MenuItem key={countryList.indexOf(item)} value={item}>
                {item}
              </MenuItem>
            )
          })}
      </Select>
      <TextField
        type="phone"
        name="phone"
        label="Phone Number"
        value={values.phone}
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
    organization,
    groupName,
    firstAddress,
    secondAddress,
    city,
    state,
    province,
    zip,
    country,
    phone
  }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      organization: organization || "",
      groupName: groupName || "",
      firstAddress: firstAddress || "",
      secondAddress: secondAddress || "",
      city: city || "",
      state: state || "",
      zip: zip || "",
      country: country || "",
      phone: phone || ""
    }
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    organization: Yup.string().required("Organization is required"),
    groupName: Yup.string(),
    firstAddress: Yup.string(),
    secondAddress: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    zip: Yup.string(),
    country: Yup.string(),
    phone: Yup.number()
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

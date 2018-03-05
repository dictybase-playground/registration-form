# Registration Form

Testing repository for a registration form built with Formik and Material-UI.

On the `master` branch, there is a working Formik form that combines all of the different sections into one large form. Currently, the submit button just displays the JSON of the form's values, but this shows that all values are assigned to their respective props. This version requires a bit of code cleanup, as right now the form is in one large file (should be multiple components).

On the `feature/form-navigation` branch, there is a form that uses "next" and "back" buttons to navigate through the different sections. This is not connected to Formik at this time, as it was used mainly as a UI/UX test.

Both versions use `create-react-app` and can be ran by using `npm install` and then `npm start`.

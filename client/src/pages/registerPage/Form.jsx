import {
  Box,
  Button,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { defaultTheme } from "../app/theme/defaultThemes";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  userName: yup.string().required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
  password: yup.string().required("Required"),
});

const initialValueRegister = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values, onSubmitProps) => {
    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    const savedUser = await savedUserResponse.json();
    if (savedUser.error) {
      alert("Email Already Taken");
    } else if (savedUser) {
      navigate("/auth/login");
    }
    //onSubmitProps.resetForm();
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValueRegister}
        validationSchema={registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap={2}
              sx={{
                mx: 0.5,
                padding: 5,
              }}
            >
              <TextField
                label="First Name"
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                label="Last Name"
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                label="User Name"
                onChange={handleChange}
                value={values.userName}
                name="userName"
                error={Boolean(touched.userName) && Boolean(errors.userName)}
                helperText={touched.userName && errors.userName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="Email"
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="Password"
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                label="Confirm Password"
                sx={{
                  gridColumn: "span 1",
                }}
              />
            </Box>
            <Box
              sx={{
                gap: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  display: "flex",
                  width: 250,
                  margin: "auto",

                  fontFamily: "outfit",
                  fontSize: 25,
                }}
              >
                Sign Up
              </Button>

              <Typography
                onClick={() => {
                  resetForm();
                }}
                sx={{
                  gridColumn: "span 2",
                  textAlign: "center",
                }}
              >
                Already have an account?<Link to="/auth/login">Login </Link>
                here.
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </ThemeProvider>
  );
};

export default RegisterForm;

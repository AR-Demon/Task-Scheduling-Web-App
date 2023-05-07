import 
{ Box, 
  Button, 
  TextField, 
  Typography, 
  FormControl, 
  InputLabel, 
  OutlinedInput, 
  InputAdornment, 
  IconButton 
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { setUserLogin} from "../../state/userReducer";
import { useState } from "react";


const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Required"),
  password: yup.string().required("Required"),
});

const initialValueLogin = {
  email: "",
  password: "",
};

const Form = () => {
  //dispatch function for login functionality
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const loggedIn = await loggedInResponse.json();

    onSubmitProps.resetForm();
    if (loggedIn) {
      if (loggedIn.msg === "User Does Not Exist") {
        navigate("/auth/register");
        alert(loggedIn.msg + " or Invalid Email/Username");
      }
      else if (loggedIn.msg === "Invalid Credentials"){
        alert(loggedIn.msg);
      }
      else {
        dispatch(
          setUserLogin({
            token: loggedIn.token,
            user: loggedIn.user,
          })
        );
        navigate("/app");
      }
    }
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValueLogin}
      validationSchema={loginSchema}
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
            gridTemplateColumns="repeat(2, minmax(0,1fr))"
            gap={1}
            sx={{
              mx: 0.5,
              padding: 1,
            }}
          >
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            {/*<TextField
              label="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 2" }}
          />*/}
          <FormControl sx={{ gridColumn: "span 2" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name="password"
            error={Boolean(touched.password) && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
        </FormControl>
            <Box gridColumn="span 2">
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  m: "1rem 0",
                  p: "0.5em",
                }}
              >
                Sign In
              </Button>
              <Typography
                sx={{
                  gridColumn: "span 2",
                  textAlign: "center",
                }}
              >
                Don't have an account? <Link to="/auth/register">Sign Up </Link>
                here.
              </Typography>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;

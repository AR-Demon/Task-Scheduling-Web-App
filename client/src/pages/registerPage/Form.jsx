import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    userName:yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    password: yup.string().required("required"),

});

const initialValueRegister = {
    firstName: "",
    lastName: "",
    userName:"",
    email: "",
    password: "",
};

const Form = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (values, onSubmitProps) => {
        const savedUserResponse = await fetch(
            "http://localhost:3001/auth/register",
            {
                 method:"POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify(values),
            });

            const savedUser = await savedUserResponse.json();
            onSubmitProps.resetForm();
            if(savedUser) {navigate("/auth/login");}
    };
    return(
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
                    display = "grid"
                    gridTemplateColumns= "repeat(2, minmax(0,1fr))"
                    gap={1}
                    sx={{
                        mx:0.5,
                        padding:1,
                    }}
                    >
                        <TextField 
                        label = "First Name"
                        onBlur = {handleBlur}
                        onChange={handleChange}
                        value = {values.firstName}
                        name="firstName"
                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        sx = {{gridColumn: 'span 1'}}
                        />
                        <TextField 
                        label = "Last Name"
                        onBlur = {handleBlur}
                        onChange={handleChange}
                        value = {values.lastName}
                        name="lastName"
                        sx = {{gridColumn: 'span 1'}}
                        />
                        <TextField 
                        label = "User Name"
                        onBlur = {handleBlur}
                        onChange={handleChange}
                        value = {values.userName}
                        name="userName"
                        sx = {{gridColumn: 'span 2'}}
                        />
                        <TextField 
                        label = "Email"
                        onBlur = {handleBlur}
                        onChange={handleChange}
                        value = {values.email}
                        name="email"
                        sx = {{gridColumn: 'span 2'}}
                        />
                        <TextField 
                        label = "Password"
                        onBlur = {handleBlur}
                        onChange={handleChange}
                        value = {values.password}
                        name="password"
                        sx = {{gridColumn: 'span 1'}}
                        />
                        <TextField 
                        label = "Confirm Password"
                        sx = {{
                            gridColumn: 'span 1'
                        }}
                        />
                        <Box gridColumn = "span 2">
                            <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            sx={{
                              m: "1rem 0",
                              p: "0.5em",
                            }}>
                                Sign Up
                            </Button>
                            <Typography
                            //{onClick = {() => {resetForm();}}} 
                            sx={{
                                gridColumn: "span 2",
                                textAlign: "center",
                            }}
                            >
                                Already have an account?<Link to="/auth/login">Login </Link>here.
                            </Typography>
                        </Box>
                    </Box>
                </form>
            )}

        </Formik>
    );
};

export default Form;
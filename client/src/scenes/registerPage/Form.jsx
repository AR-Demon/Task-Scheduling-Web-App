import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";

const registerSchema = {
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    userName:yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),

};

const initialValueRegister = {
    firstName: "",
    lastName: "",
    userName:"",
    email: "",
    password: "",
};

const Form = () => {
    const handelFormSubmit = async (values, onSubmitProps) => {
        login(values, onSubmitProps);
    };
    return(
        <Formik
        onSubmit={handelFormSubmit}
        initialValues={initialValueRegister}
        validationSchema={registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handelBlur,
                handelChange,
                handelSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handelSubmit}>
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
                        onBlur = {handelBlur}
                        onChange={handelChange}
                        value = {values.firstName}
                        name="firstName"
                        sx = {{gridColumn: 'span 1'}}
                        />
                        <TextField 
                        label = "Last Name"
                        onBlur = {handelBlur}
                        onChange={handelChange}
                        value = {values.firstName}
                        name="firstName"
                        sx = {{gridColumn: 'span 1'}}
                        />
                        <TextField 
                        label = "User Name"
                        sx = {{
                            gridColumn: 'span 2'
                        }}
                        />
                        <TextField 
                        label = "Email"
                        sx = {{
                            gridColumn: 'span 2'
                        }}
                        />
                        <TextField 
                        label = "Password"
                        sx = {{
                            gridColumn: 'span 1'
                        }}
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
                                SignUp
                            </Button>
                            <Typography 
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
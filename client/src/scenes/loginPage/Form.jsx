import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link, Navigate } from "react-router-dom";
import * as yup from "yup";

const loginSchema = {
    email: yup.string().required(),
    password: yup.string().required(),
};

const initialValueLogin = {
    email:"",
    password:"",
};

const Form = () => {
    const handelFormSubmit = async (values, onSubmitProps) => {
        login(values, onSubmitProps);
    };
    return(
        <Formik
        onSubmit={handelFormSubmit}
        initialValues={initialValueLogin}
        validationSchema={loginSchema}
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
                        sx = {{
                            gridColumn: 'span 1'
                        }}
                        />
                        <TextField 
                        label = "Last Name"
                        sx = {{
                            gridColumn: 'span 1'
                        }}
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
                                Already have an account?<Link to="/auth/register">Login </Link>here.
                            </Typography>
                        </Box>
                    </Box>
                </form>
            )}

        </Formik>
    );
};

export default Form;
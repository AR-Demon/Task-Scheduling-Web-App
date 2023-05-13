import picture from "../../assets/react.svg";
import Form from "./Form";
import { Box, Typography } from "@mui/material";
import { formTheme } from "../app/theme/loginFormThemes";

const LoginPage = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(20, minmax(0, 1fr))"
      sx={{ height: "100vh" }}
    >
      <Box
        gridColumn="span 15"
        sx={{
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundPosition: "center",
        }}
      />
      <Box gridColumn="span 5" sx={formTheme}>
        <Typography
          variant="h2"
          gridColumn="span 2"
          sx={{
            textAlign: "center",
            fontFamily: "Lusitana",
          }}
        >
          Sign Up
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;

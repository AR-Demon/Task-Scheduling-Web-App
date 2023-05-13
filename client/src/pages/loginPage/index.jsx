import { defaultTheme } from "../app/theme/defaultThemes";
import coffee from "./coffee.png";
import Form from "./Form";
import { useLayoutEffect } from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { formTheme } from "../app/theme/loginFormThemes";

const LoginPage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box display="flex" sx={{ height: "100%" }}>
        <Box
          sx={{
            backgroundImage: `url(${coffee})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: 1500,
            backgroundPosition: "center",
          }}
        />
        <Box sx={formTheme}>
          <Typography
            variant="h2"
            gridColumn="span 2"
            sx={{
              textAlign: "center",
              fontFamily: "Lusitana",
              marginBottom: 5,
            }}
          >
            Sign In
          </Typography>
          <Form />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;

import { defaultTheme } from "../app/theme/defaultThemes";
import loginBackground from "./loginBackground.jpg";
import LoginForm from "./Form";
import { useLayoutEffect } from "react";
import { Box, ThemeProvider, Typography, Stack } from "@mui/material";
import { formTheme } from "../app/theme/loginFormThemes";
import { TrackerLogoBig } from "../app/widget/trackerLogoLogin";

const LoginPage = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        display="grid"
        gridTemplateColumns="repeat(20, minmax(0, 1fr))"
        sx={{ height: "100vh" }}
      >
        <Box gridColumn="span 5">
          <Box sx={formTheme}>
            <Box
              sx={{
                marginTop: 25,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <TrackerLogoBig />
              <Typography variant="h4" sx={{ fontFamily: "Outfit" }}>
                TRACKER
              </Typography>
            </Box>

            {/* <Typography
            variant="h2"
            gridColumn="span 2"
            sx={{
              textAlign: "center",
              fontFamily: "Lusitana",
              marginBottom: 5,
            }}
          >
            Sign In
          </Typography> */}

            <LoginForm />
          </Box>
        </Box>
        <Box
          gridColumn="span 15"
          sx={{
            backgroundImage: `url(${loginBackground})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            backgroundPosition: "center",
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;

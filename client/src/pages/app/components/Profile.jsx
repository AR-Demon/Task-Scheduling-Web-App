import React from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Drawer,
  Box,
  Grid,
  Slide,
  createTheme,
  Avatar,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { defaultTheme } from "../theme/defaultThemes";
import dobby from "../widget/dobby.png";

function UserStatsBar(props) {
  const containerReference = useRef(null);
  const theme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        container
        sx={{
          display: "flex",
          position: "fixed",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          color: "white",
          gap: 3,
          // backgroundColor: "background.light",
          backgroundImage:
            "linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% )",
          width: "25vw",
        }}
      >
        <Avatar sx={{ width: 200, height: 200, marginTop: 15 }} src={dobby} />

        <Typography variant="h4">Dobby</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default UserStatsBar;

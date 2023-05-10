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
  Stack,
} from "@mui/material";
import { defaultTheme } from "../theme/defaultThemes";
import dobby from "../widget/dobby.png";
import { StatIcon } from "../widget/statIcon";
import { useContext } from "react";
import StatContext from "./StatContext";

export function UserStatsBar() {
  const { statLevel } = useContext(StatContext);
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
        <Box>
          <Stack direction={"row"}>
            <StatIcon stat={"Strength"} />
            {statLevel.Strength}
          </Stack>
          <Stack direction={"row"}>
            <StatIcon stat={"Intelligence"} />
            {statLevel.Intelligence}
          </Stack>
          <Stack direction={"row"}>
            <StatIcon stat={"Charisma"} />
            {statLevel.Charisma}
          </Stack>

          <Stack direction={"row"}>
            <StatIcon stat={"Creativity"} />
            {statLevel.Creativity}
          </Stack>

          <Stack direction={"row"}>
            <StatIcon stat={"Health"} />
            {statLevel.Health}
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

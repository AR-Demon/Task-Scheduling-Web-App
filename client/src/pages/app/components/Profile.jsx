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
  AppBar,
  Toolbar,
  styled,
  LinearProgress,
} from "@mui/material";
import { defaultTheme } from "../theme/defaultThemes";
import dobby from "../widget/dobby.png";
import { StatIcon } from "../widget/statIcon";
import { useContext } from "react";
import StatContext from "./StatContext";
import { levelBarTheme } from "../theme/levelBarThemes";

export function UserStatsBar() {
  const [progress, setProgress] = React.useState(0);

  const { statLevel } = useContext(StatContext);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        return statLevel.Strength;
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          color: "white",
          gap: 1,

          backgroundImage:
            "linear-gradient( 179deg,  rgba(0,0,0,1) 9.2%, rgba(127,16,16,1) 103.9% )",
          width: "25vw",
        }}
      >
        <Avatar sx={{ width: 150, height: 150, marginTop: 12 }} src={dobby} />

        <Typography variant="h4">Dobby</Typography>

        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Toolbar sx={levelBarTheme}>
            <Box sx={{ translate: -30 }}>
              <StatIcon stat={"Strength"} />
            </Box>
            <Box sx={{ width: "80%" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            {statLevel.Strength}
          </Toolbar>

          <Toolbar sx={levelBarTheme}>
            <StatIcon stat={"Intelligence"} />
            {statLevel.Intelligence}
          </Toolbar>

          <Toolbar sx={levelBarTheme}>
            <StatIcon stat={"Charisma"} />
            {statLevel.Charisma}
          </Toolbar>

          <Toolbar sx={levelBarTheme}>
            <StatIcon stat={"Creativity"} />
            {statLevel.Creativity}
          </Toolbar>

          <Toolbar sx={levelBarTheme}>
            <StatIcon stat={"Health"} />
            {statLevel.Health}
          </Toolbar>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

import React, { useEffect, useState } from "react";
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
  linearProgressClasses,
  CircularProgress,
} from "@mui/material";

import { defaultTheme } from "../theme/defaultThemes";
import dobby from "../../../assets/dobby.png";
import { levelBarTheme } from "../theme/levelBarThemes";
import { StatIconLevel } from "../widget/statIconLevel";
import { useSelector } from "react-redux";

export function UserStatsBar() {
  const UserStats_State = useSelector((state) => state.userStats);
  const [userStats, setUserStats] = useState(UserStats_State);

  useEffect(() => {setUserStats(UserStats_State)}, [UserStats_State]);

  //Linear Progress function for style
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "white",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "text.main",
    },
  }));

  //Returns a level bar with styled linear progress and stat icon attached
  function LevelBar(attributeName, attributeLevel, attributeXp) {
    return (
      <Box display={"flex"} alignItems={"center"}>
        <Box sx={{ translate: 40, zIndex: 1 }}>
          <StatIconLevel stat={attributeName} />
        </Box>
        <Toolbar variant="dense" sx={levelBarTheme}>
          <Box sx={{ width: "80%", marginLeft: 5, marginRight: 2 }}>
            <BorderLinearProgress variant="determinate" value={2*attributeXp} />
          </Box>
          {attributeLevel}
        </Toolbar>
      </Box>
    );
  }
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
            "linear-gradient( 179deg,  rgba(0,0,0,1) 20.2%, rgba(127,16,16,1) 70.9% )",
          width: "25vw",
        }}
      >
        <Avatar sx={{ width: 175, height: 175, marginTop: 12 }} src={dobby} />

        <CircularProgress variant="determinate" value={25} />

        <Typography variant="h4">Dobby</Typography>

        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {LevelBar("Strength",userStats.userAttribute.strengthLevel, userStats.userAttribute.strengthXp)}
          {LevelBar("Intelligence",userStats.userAttribute.intelligenceLevel, userStats.userAttribute.intelligenceXp)}
          {LevelBar("Health",userStats.userAttribute.healthLevel, userStats.userAttribute.healthXp)}
          {LevelBar("Charisma",userStats.userAttribute.charismaLevel, userStats.userAttribute.charismaXp)}
          {LevelBar("Creativity",userStats.userAttribute.creativityLevel,userStats.userAttribute.creativityXp)}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

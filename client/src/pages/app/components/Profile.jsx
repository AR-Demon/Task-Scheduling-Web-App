import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Avatar,
  Typography,
  Toolbar,
  LinearProgress,
  CircularProgress,
  Stack,
} from "@mui/material";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "../theme/circleProgressStyle.css";

import { defaultTheme } from "../theme/defaultThemes";
import dobby from "../../../assets/dobby.png";
import { levelBarTheme } from "../theme/levelBarThemes";
import { StatIconLevel } from "../widget/statIconLevel";
import { useSelector } from "react-redux";

export function UserStatsBar(props) {
  const userName = useSelector((state) => state.user.userName);
  const UserStats_State = useSelector((state) => state.userStats);
  const counter = props.counter;
  console.log(counter);
  const [userStats, setUserStats] = useState({
    userAttribute: {
      strengthLevel: 0,
      strengthStatus: 0,
      strengthXp: 0,
      intelligenceLevel: 0,
      intelligenceStatus: 0,
      intelligenceXp: 0,
      healthLevel: 0,
      healthStatus: 0,
      healthXp: 0,
      charismaLevel: 0,
      charismaStatus: 0,
      charismaXp: 0,
      creativityLevel: 0,
      creativityStatus: 0,
      creativityXp: 0,
    },
    userLevel: 0,
    userLevelExp: 0,
  });
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];
  const seed = Math.floor(Math.random()*26);
  const profilePicture = `https://api.dicebear.com/6.x/personas/svg?seed=${alphabet[seed]}}`;

  useEffect(() => {
    //can set if not null setUserStats(USerStats) 
    if(UserStats_State == null){}
  else{
    setUserStats(UserStats_State);
  }
  }, [UserStats_State,]);

  //Returns a level bar with styled linear progress and stat icon attached
  function LevelBar(attributeName, attributeLevel, attributeXp) {
    return (
      <Box display={"flex"} alignItems={"center"}>
        <Box sx={{ translate: 40, zIndex: 1 }}>
          <StatIconLevel stat={attributeName} />
        </Box>
        <Toolbar variant="dense" sx={levelBarTheme}>
          <Box sx={{ width: "80%", marginLeft: 5, marginRight: 2 }}>
            <LinearProgress
              variant="determinate"
              value={2 * attributeXp}
              sx={{
                animationDuration: "8s",
                height: 10,
                borderRadius: 10,
              }}
            />
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
        <Avatar sx={{ width: 200, height: 200, marginTop: 12 }} src={profilePicture} />


        <Box
          sx={{
            marginLeft: 5,
            display: "flex",
            flexDirection: "row",
            maxHeight: 100,
            maxWidth: 200,
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx ={{fontSize:30}}>{userName}</Typography>
          <CircularProgressbarWithChildren value={userStats.userLevelExp}>
            <Typography variant="h5">{userStats.userLevel}</Typography>
          </CircularProgressbarWithChildren>
        </Box>

        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {LevelBar(
            "Strength",
            userStats.userAttribute.strengthLevel,
            userStats.userAttribute.strengthXp
          )}
          {LevelBar(
            "Intelligence",
            userStats.userAttribute.intelligenceLevel,
            userStats.userAttribute.intelligenceXp
          )}
          {LevelBar(
            "Health",
            userStats.userAttribute.healthLevel,
            userStats.userAttribute.healthXp
          )}
          {LevelBar(
            "Charisma",
            userStats.userAttribute.charismaLevel,
            userStats.userAttribute.charismaXp
          )}
          {LevelBar(
            "Creativity",
            userStats.userAttribute.creativityLevel,
            userStats.userAttribute.creativityXp
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

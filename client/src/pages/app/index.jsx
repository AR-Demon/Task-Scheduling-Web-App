import { useDispatch, useSelector } from "react-redux";
import {
  setUserBarStatus,
  setUserStats,
  setUserTodo,
  SyncStateData,
} from "../../state/userReducer";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Fade,
  Grid,
  ThemeProvider,
  Collapse,
} from "@mui/material";
import { createTheme } from "@mui/material";
import { NavBar } from "./components/NavBar";
import UserStatsBar from "./components/Profile";
import { useRef } from "react";
import { ToDoList } from "./components/TodoList";
import { defaultTheme } from "./theme/defaultThemes";
import React, { useLayoutEffect } from "react";

function Test() {
  console.log("MainApp rendered");
  //useDispatch to use Reducer Function for local storage
  const dispatch = useDispatch();

  const [openStatus, setOpenStatus] = useState(true);
  const handleDrawerOpenStatus = () => {
    setOpenStatus(!openStatus);
    console.log(openStatus);
  };
  //useSelector to ge local storage userId and Token for authorization
  const user_id = useSelector((state) => state.user._id);
  const token = useSelector((state) => state.token);

  //function to get particular user todo
  const getUserTodo = async () => {
    const Response = await fetch(
      `http://localhost:3001/user/todos?Id=${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const UserTodoData = await Response.json();
    return UserTodoData;
  };

  //function to get particular user stats
  const getUserStats = async () => {
    const Response = await fetch(
      `http://localhost:3001/user/stats?Id=${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const userStatsData = await Response.json();
    return userStatsData;
  };

  const SyncData = async () => {
    const userStateData = {
      userTodo: await getUserTodo(),
      userStats: await getUserStats(),
    };
    dispatch(SyncStateData(userStateData));
    //console.log(userStateData);
  };

  // Execute the function when page reloads.
  useEffect(() => {
    getUserTodo().then((data) => {
      //console.log(data);
      dispatch(setUserTodo(data));
    });
    getUserStats().then((data) => {
      dispatch(setUserStats(data));
    });
  }, []);


  const theme = createTheme();
  const containerReference = useRef(null);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <NavBar
          handelMenuClick={handleDrawerOpenStatus}
          sx={{ position: "fixed", zIndex: 1 }}
        />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 5, sm: 5, md: 5 }}
          ref={containerReference}
        >
          {/*<Slide direction="right" in={openStatus} mountOnEnter unmountOnExit container={containerReference.current}>*/}
          <Fade in={openStatus} mountOnEnter unmountOnExit>
            <Grid item xs={2} sm={2} md={1}>
              <UserStatsBar openStatus={openStatus} />
            </Grid>
          </Fade>
          {/*</Slide>*/}
          <Grid item xs sm md>
            {/*<div>
                    <Button onClick = {SyncData}>toggle</Button>
                  </div>*/}
            <ToDoList />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default Test;

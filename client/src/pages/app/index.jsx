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
import { UserStatsBar } from "./components/Profile";
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

  //function to get this user todo
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

  //function to get this user stats
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
  
  const SyncData = async() => {
    const userData = {
      userTodo: await getUserTodo(),
      userStats: await getUserStats(),
    };
    dispatch(SyncStateData(userData));
    //console.log(userData);
    return;
  };

  //function to get Pending todo from stats and display it
  function TodoDataPending(stateTodo) {
    const TodoArray = [];
    stateTodo.map((task) => {
      //const keys = Object.keys(task);
      const todoObject = {
        user_id: task.userId,
        todo_id:task._id,
        taskTitle: task.content,
        taskDescription: task.description,
        isPriority: task.priority == 0 ? false : true,
        isDone: task.checked,
        taskStat: task.attachedAttribute,
      };
      if (!todoObject.isDone) {
        TodoArray.push(todoObject);
      }
    });
    //console.log(TodoArray);
    return TodoArray;
  };

  // function to get completed todo from stats and display it
  function TodoDataCompleted(stateTodo) {
    const TodoArray = [];
    stateTodo.map((task, index) => {
      //const keys = Object.keys(task);
      const todoObject = {
        user_id: task.userId,
        todo_id: task._id,
        taskTitle: task.content,
        taskDescription: task.description,
        isPriority: task.priority == 0 ? false : true,
        isDone: task.checked,
        taskStat: task.attachedAttribute,
      };
      //console.log(todoObject.todo_id)
      if (todoObject.isDone) {
        TodoArray.push(todoObject);
      }
    });
    //console.log(TodoArray);
    return TodoArray;
  };

  // Create User Todo
  const CreateTodo = async(BodyData) => {
    const Response = await fetch(`http://localhost:3001/user/todo?Id=${user_id}&userName=Ar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(BodyData)
    });

    const Todo = await Response.json();
    return Todo._id;
  };

  // delete User Todo
  const DeleteTodo = async(TodoId) => {
    //console.log(TodoId);
    const response = await fetch(`http://localhost:3001/user/todo?todoId=${TodoId}`, {
      method:"DELETE",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const DeleteMessage = await response.json();
    //SyncData().then((data) => {dispatch(SyncStateData(data))});
    return DeleteMessage;

  }

  const TodoComplete = async(TodoId, CompleteStatus) => {
    const response = await fetch(`http://localhost:3001/user/todo/complete/${TodoId}`, {
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(
        {
        "checked": !CompleteStatus,
        "completed_at":""
        }
        ),
    });

    const message = await response.json();
    return !CompleteStatus;
  }
  // function to Update User Stats
  async function UpdateStats(Todo_Id){
    const response = await fetch(`http://localhost:3001/user/stats/update?userId=${user_id}&todoId=${Todo_Id}&token=${token}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    const updatedStats = await response.json();
    return updatedStats;
  }

  // Execute the function when page reloads.
  
  useEffect(() => {
    SyncData();
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
            <Fade in={openStatus} mountOnEnter unmountOnExit>
              <Grid item xs={2} sm={2} md={1}>
                <UserStatsBar openStatus={openStatus} />
              </Grid>
            </Fade>

            <Grid item xs sm md>

              <ToDoList 
              todoPending = {TodoDataPending} 
              todoCompleted = {TodoDataCompleted}
              addTask = {CreateTodo}
              deleteTodo = {DeleteTodo}
              completeTodo = {TodoComplete}
              statsUpdate = {UpdateStats}
              Sync = {() =>{SyncData(getUserTodo(), getUserStats())}}
              />

            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
  );
}
export default Test;


/*useEffect(() => {
    getUserTodo().then((data) => {
      //console.log(data);
      dispatch(setUserTodo(data));
    });
    
    getUserStats().then((data) => {
      dispatch(setUserStats(data));
    });
    //CreateTodo().then((data) => {console.log(data)});
  }, []);*/

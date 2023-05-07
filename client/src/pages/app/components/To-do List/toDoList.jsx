import {
  Modal,
  Button,
  Typography,
  Paper,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Checkbox,
  Switch,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  ThemeProvider,
  TextField,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { defaultTheme } from "../styles/themes";

import React, { useState } from "react";
import {
  Add,
  Edit,
  Delete,
  PriorityHigh,
  Directions,
} from "@mui/icons-material";
import { centerStyle, modalStyle, circleButtons } from "./toDoListStyles";

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    taskTitle: "",
    taskDescription: "",
    isPriority: false,
    isDone: false,
    taskStat: "",
  });
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editOpen, setEditOpen] = useState(false);

  const handleTitle = (event) => {
    newTask.taskTitle = event.target.value;
    setNewTask(newTask);
  };
  const handleDescription = (event) => {
    newTask.taskDescription = event.target.value;
    setNewTask(newTask);
  };
  const handlePriority = () => {
    if (newTask.isPriority === true) {
      newTask.isPriority = false;
    } else if (newTask.isPriority === false) {
      newTask.isPriority = true;
    }
    setNewTask(newTask);
    console.log(newTask.isPriority);
  };
  const handleStat = (event) => {
    console.log(event.target.value);
    newTask.taskStat = event.target.value;
    setNewTask(newTask);
  };

  const handleAddTask = (event) => {
    console.log(newTask);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask({
      taskTitle: "",
      taskDescription: "",
      isPriority: false,
      isDone: false,
      Stat: "",
    });
    setOpen(false);
  };

  const handleDone = (event) => {
    if (newTask.isDone === true) {
      newTask.isDone = false;
    } else if (newTask.isDone === false) {
      newTask.isDone = true;
    }
    console.log(newTask.isDone);
    setNewTask(newTask);
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTaskChange = (event) => {
    setEditTask(event.target.value);
  };

  const handleEditTask = () => {
    const newTasks = [...tasks];
    newTasks[editIndex] = editTask;
    setTasks(newTasks);
    setEditTask({});
    setEditIndex(-1);
    setEditOpen(false);
  };

  const handleEditClick = (index) => {
    setEditTask(tasks[index]);
    setEditIndex(index);
    setEditOpen(true);
  };

  const priorityIcon = (check) => {
    if (check === true) {
      return <PriorityHigh />;
    }
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container>
          <Paper
            sx={{
              height: "100%",
              width: "50%",
              padding: 5,
              marginLeft: 50,
              marginTop: 20,
              bgcolor: "#FFF0DB",
            }}
          >
            <div style={centerStyle}>
              <Typography variant="h2">To-Do List</Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                onClick={() => setOpen(true)}
                sx={{
                  fontFamily: "Outfit",
                }}
              >
                Add Task
              </Button>
              <div>
                {tasks.map((index, i) => (
                  <AppBar
                    key={i}
                    position="static"
                    style={{
                      backgroundColor: "#ffdba8",
                      color: "black",
                      marginTop: 10,
                      width: 500,
                      height: 300,
                      borderRadius: 5,
                    }}
                  >
                    <Toolbar>
                      <Grid
                        container
                        sx={{
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Grid>
                          <Box>{index.taskTitle}</Box>
                        </Grid>
                        <Grid>
                          <Box>{index.taskDescription}</Box>
                        </Grid>
                        <Grid alignSelf={"end"}>
                          <Box>{priorityIcon(index.isPriority)}</Box>
                        </Grid>
                        <Grid>{index.taskStat}</Grid>
                      </Grid>
                      <div style={{ display: "flex", direction: "row" }}>
                        <Button
                          variant="contained"
                          color="error"
                          sx={circleButtons}
                          onClick={() => handleDeleteTask(index)}
                        >
                          <Delete />
                        </Button>

                        <Button
                          variant="contained"
                          color="secondary"
                          sx={circleButtons}
                          onClick={() => {
                            handleEditClick(index);
                          }}
                        >
                          <Edit />
                        </Button>
                        <Checkbox
                          // flexDirection={"row-reverse"}
                          onClick={handleDone}
                        />
                      </div>
                    </Toolbar>
                  </AppBar>
                ))}
              </div>

              <Modal //Add Task Modal
                open={open}
                onClose={() => setOpen(false)}
                style={centerStyle}
              >
                <FormControl style={modalStyle}>
                  <Typography variant="h5" fontFamily={"Outfit"} sx={{marginLeft:"7.5vw", fontSize:"2.5vh"}}>
                    ADD NEW TASK
                  </Typography>
                  <TextField
                    label="Task"
                    sx={{ width: "75%", marginLeft:"2vw" }}
                    value={tasks.taskTitle}
                    onChange={handleTitle}
                    variant="standard"
                  />

                  <TextField
                    label="Description"
                    sx={{ width: "75%", marginLeft:"2vw" }}
                    value={tasks.taskDescription}
                    onChange={handleDescription}
                    variant="standard"
                    multiline
                  />

                  <Stack direction={"row"} spacing={3}>
                    <TextField
                      size="medium"
                      variant="standard"
                      value={tasks.taskStat}
                      label="Stat"
                      onChange={handleStat}
                      defaultValue="Strength"
                      select
                      sx={{ width: 200, alignItems: "left", marginLeft:"2vw" }}
                    >
                      <MenuItem value={"Strength"}> Strength</MenuItem>
                      <MenuItem value={"Intelligence"}>Intelligence</MenuItem>
                      <MenuItem value={"Health"}>Health</MenuItem>
                      <MenuItem value={"Charisma"}>Charisma</MenuItem>
                      <MenuItem value={"Creativity"}>Creativity</MenuItem>
                    </TextField>

                    <FormControlLabel
                      control={
                        <Switch
                          sx={{ flexGrow: "1",}}
                          value={tasks.isPriority}
                          onChange={handlePriority}
                        />
                      }
                      label="Priority"
                      labelPlacement="top"
                    />
                  </Stack>

                  <Button
                    sx={{
                      width: 20,
                      alignSelf: "center",
                      fontFamily: "Outfit",
                    }}
                    variant="contained"
                    color="primary"
                    onClick={(event) => handleAddTask(event)}
                  >
                    Add
                  </Button>
                </FormControl>
              </Modal>
            </div>
          </Paper>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

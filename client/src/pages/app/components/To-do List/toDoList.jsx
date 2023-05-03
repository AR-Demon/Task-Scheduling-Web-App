import {
  Modal,
  Button,
  Typography,
  Paper,
  Grid,
  Checkbox,
  Switch,
  FormControlLabel,
  MenuItem,
  FormControl,
  ThemeProvider,
  TextField,
  Stack,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import PropTypes from "prop-types";

import { defaultTheme } from "../styles/themes";

import React, { useState } from "react";
import {
  Add,
  Edit,
  Delete,
  PriorityHigh,
  FitnessCenter,
  Psychology,
  ColorLens,
  AutoAwesome,
  Favorite,
  TaskAlt,
  Brightness1Outlined,
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
      taskStat: "",
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

  function statIcon(stat) {
    switch (stat) {
      case "Strength":
        return (
          <Avatar
            sx={{
              bgcolor: "#A00E1C",
              margin: 2,
              padding: 1,
              alignSelf: "center",
            }}
          >
            <FitnessCenter />
          </Avatar>
        );

      case "Intelligence":
        return (
          <Avatar
            sx={{
              bgcolor: "#5296A5",
              margin: 2,
              padding: 1,
              alignSelf: "center",
            }}
          >
            <Psychology />
          </Avatar>
        );
      case "Creativity":
        return (
          <Avatar
            sx={{
              bgcolor: "#623F7B",
              margin: 2,
              padding: 1,
              alignSelf: "center",
            }}
          >
            <ColorLens />
          </Avatar>
        );

      case "Charisma":
        return (
          <Avatar
            sx={{
              bgcolor: "#EE85B5",
              margin: 2,
              padding: 1,
              alignSelf: "center",
            }}
          >
            <AutoAwesome />
          </Avatar>
        );

      case "Health":
        return (
          <Avatar
            sx={{
              bgcolor: "#3CAB34",
              margin: 2,
              padding: 1,
              alignSelf: "center",
            }}
          >
            <Favorite />
          </Avatar>
        );
      default:
        break;
    }
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Paper
          sx={{
            height: "100%",
            width: "60%",
            padding: 5,
            marginLeft: 60,
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
                marginBottom: 2,
              }}
            >
              Add Task
            </Button>
          </div>

          <Grid sx={{ display: "flex", spacing: 10, flexWrap: "wrap" }}>
            {tasks.map((index, i) => (
              <Card
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffdba8",
                  color: "black",
                  height: 280,
                  width: 470,
                  margin: 2,
                  borderRadius: 3,
                }}
              >
                <Stack sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      padding: 4,
                      paddingRight: 1,
                      flexGrow: 1,
                      paddingBottom: 0,
                      wordBreak: "break-word",
                      maxHeight: 40,
                    }}
                  >
                    {index.taskTitle}
                  </Typography>
                  <Divider
                    variant="middle"
                    sx={{ borderRightWidth: 2, borderRadius: 30 }}
                    orientation="vertical"
                    flexItem
                  />
                  {statIcon(index.taskStat)}
                </Stack>
                <Divider
                  variant="middle"
                  flexItem
                  sx={{ borderBottomWidth: 2, borderRadius: 30 }}
                />

                <Grid item xs>
                  <CardContent>
                    <Typography
                      fontStyle={"oblique"}
                      sx={{
                        wordBreak: "break-word",
                        textAlign: "left",
                        marginLeft: 2,
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          backgroundColor: "#ffe6c2",
                          padding: 2,
                          marginRight: 2,
                        }}
                      >
                        {index.taskDescription}
                      </Paper>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item>
                  <CardActions sx={{ width: 300 }}>
                    <IconButton
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteTask(index)}
                    >
                      <Delete sx={{ color: "secondary.main" }} />
                    </IconButton>

                    <IconButton
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleEditClick(index);
                      }}
                    >
                      <Edit />
                    </IconButton>

                    <Checkbox
                      sx={{ marginLeft: "100%" }}
                      icon={<Brightness1Outlined />}
                      checkedIcon={<TaskAlt sx={{ color: "secondary.main" }} />}
                      onClick={handleDone}
                    />
                  </CardActions>
                </Grid>
              </Card>
            ))}
          </Grid>

          <Modal //Add Task Modal
            open={open}
            onClose={() => setOpen(false)}
            style={centerStyle}
          >
            <FormControl style={modalStyle}>
              <Typography variant="h3" fontWeight={400} fontFamily={"Outfit"}>
                {" "}
                ADD NEW TASK
              </Typography>
              <TextField
                label="Task"
                sx={{ width: "75%" }}
                value={tasks.taskTitle}
                onChange={handleTitle}
                inputProps={{ maxLength: 28 }}
              />

              <TextField
                label="Description"
                sx={{ width: "75%" }}
                value={tasks.taskDescription}
                onChange={handleDescription}
                multiline
                maxRows={4}
              />

              <Stack direction={"row"} spacing={3}>
                <TextField
                  size="medium"
                  variant="standard"
                  value={tasks.taskStat}
                  label="Select a Stat"
                  onChange={handleStat}
                  select
                  sx={{ width: 200 }}
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
                      sx={{ flexGrow: "1" }}
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
        </Paper>
      </div>
    </ThemeProvider>
  );
}

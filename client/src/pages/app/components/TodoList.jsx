import {
  Modal,
  Button,
  Typography,
  Paper,
  Grid,
  Switch,
  FormControlLabel,
  MenuItem,
  FormControl,
  ThemeProvider,
  TextField,
  Stack,
  Tab,
  Box,
  Divider,
} from "@mui/material";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { defaultTheme } from "../theme/defaultThemes";
import React from "react";
import { Add, Brightness1Outlined, Sync, TaskAlt } from "@mui/icons-material";
import { centerStyle, modalStyle, circleButtons } from "../theme/TodoTheme";
import { TaskCard } from "../widget/TaskCardWidget";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";



export function ToDoList(props) {

  const stateTodo = useSelector((state) => state.Todo);
  const user = useSelector((state) => state.user);

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    user_id: user._id,
    todo_id:"",
    taskTitle: "",
    taskDescription: "Todo Description",
    isPriority: false,
    isDone: false,
    taskStat: "",
  });
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editOpen, setEditOpen] = useState(false);

  const [syncStatus, setSyncStatus] = useState(true);

  useEffect(() => {
    setTasks(props.todoPending(stateTodo));
    setCompletedTasks(props.todoCompleted(stateTodo));
  }, [syncStatus, stateTodo]);

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
  };
  const handleStat = (event) => {
    newTask.taskStat = event.target.value;
    setNewTask(newTask);
  };

  const handleAddTask = (event) => {
    const CreateTodoBody = {
      email: user.email,
      content: newTask.taskTitle,
      description: newTask.taskDescription,
      priority: (newTask.isPriority)? 1 : 0,
      label: "Today",
      attachedAttribute: newTask.taskStat,
    }
    props.addTask(CreateTodoBody);
    props.Sync();
    setNewTask({
      todo_id: "",
      taskTitle: "",
      taskDescription: "Todo Description",
      isPriority: false,
      isDone: false,
      taskStat: "",
    });
    setOpen(false);
  };

  const handleComplete = (Todo) => {
    console.log(Todo.todo_id, Todo.isDone);
    props.completeTodo(Todo.todo_id, Todo.isDone);
    props.Sync();
  };
  const handleStatLevel = (Todo) => {
    props.statsUpdate(Todo.todo_id);
    props.Sync();

  };
  const handleDone = (Todo) => {
    handleComplete(Todo);
    handleStatLevel(Todo);
  };

  const handleDeleteTask = (Todo) => {
    props.deleteTodo(Todo.todo_id);
    props.Sync();
  };

  const handleDeleteCompletedTask = (Todo) => {
    props.deleteTodo(Todo.todo_id);
    props.Sync();
  };

  // const handleEditTaskChange = (event) => {
  //   setEditTask(event.target.value);
  // };

  // const handleEditTask = () => {
  //   const newTasks = [...tasks];
  //   newTasks[editIndex] = editTask;
  //   setTasks(newTasks);
  //   setEditTask({});
  //   setEditIndex(-1);
  //   setEditOpen(false);
  // };

  // const handleEditClick = (index) => {
  //   setEditTask(tasks[index]);
  //   setEditIndex(index);
  //   setEditOpen(true);
  // };

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Paper
          sx={{
            height: "100%",

            width: "83%",
            paddingTop: 4,
            marginTop: 20,
            marginLeft: 23,
            // bgcolor: "secondary.main",
            backgroundImage: "linear-gradient(#232526,#414345 )",
            borderRadius: 10,
          }}
        >
          <Typography
            style={centerStyle}
            variant="h2"
            sx={{ padding: 5, color: "text.main" }}
          >
            To-Do List
          </Typography>

          <TabContext value={`${tabValue}`}>
            <Box display={"flex"} sx={{ justifyContent: "center" }}>
              <TabList
                onChange={handleTabChange}
                centered
                sx={{
                  "& button": {
                    width: 1000,
                    padding: 0,
                  },
                  "& .MuiTabs-indicator": {
                    bgcolor: "primary.main",
                    marginBottom: 0.3,
                    paddingBottom: 0.5,
                    borderRadius: 5,
                  },
                }}
              >
                <Tab
                  disableRipple
                  sx={{
                    fontFamily: "outfit",
                    flexGrow: 1,

                    fontSize: 20,
                    color: "white",
                  }}
                  label="Pending"
                  value="0"
                  icon={<Brightness1Outlined />}
                  iconPosition="start"
                />
                <hr
                  style={{
                    marginLeft: 100,
                    marginRight: 100,
                    borderStyle: "outset",
                    opacity: "70%",
                  }}
                />
                <Tab
                  disableRipple
                  sx={{
                    fontFamily: "outfit",
                    flexGrow: 1,
                    color: "white",
                    fontSize: 22,
                  }}
                  label="Completed"
                  value="1"
                  icon={<TaskAlt />}
                  iconPosition="start"
                />
              </TabList>
            </Box>
            <Divider
              variant="middle"
              sx={{
                bgcolor: "white",
                opacity: "20%",
                marginLeft: 15,
                marginRight: 15,
              }}
            />

            <TabPanel value="0">
              <div style={centerStyle}>
                <Button
                  variant="contained"
                  startIcon={<Add />}
                  onClick={() => setOpen(true)}
                  sx={{
                    fontFamily: "Outfit",
                    marginBottom: 2,
                    fontWeight: "bold",
                    ":hover": { color: "white" },
                  }}
                >
                  Add Task
                </Button>
              </div>
              <TaskCard
                tasks={tasks}
                handleDeleteTask={handleDeleteTask}
                handleDone={handleDone}
              />
            </TabPanel>
            <TabPanel value="1">
              <TaskCard
                tasks={completedTasks}
                handleDeleteTask={handleDeleteCompletedTask}
              />
            </TabPanel>
          </TabContext>

          <Modal //Add Task Modal
            open={open}
            onClose={() => setOpen(false)}
            sx={centerStyle}
          >
            <FormControl style={modalStyle}>
              <Typography variant="h2" fontWeight={400} fontFamily={"Outfit"}>
                {" "}
                ADD NEW TASK
              </Typography>
              <TextField
                label="Task"
                sx={{ width: "75%" }}
                value={tasks.taskTitle}
                onChange={handleTitle}
                inputProps={{ maxLength: 36 }}
              />

              <TextField
                label="Description"
                sx={{ width: "75%" }}
                value={tasks.taskDescription}
                onChange={handleDescription}
                multiline
                maxRows={4}
              />

              <Stack direction={"row"} spacing={5}>
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

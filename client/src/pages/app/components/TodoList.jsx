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
  import { defaultTheme } from "../theme/NavBarThemes";
  import React, { useState } from "react";
  import { Add, Brightness1Outlined, TaskAlt } from "@mui/icons-material";
  import { centerStyle, modalStyle, circleButtons } from "../theme/TodoTheme";
  import { TaskCard } from "../widget/TaskCardWidget";
import { useSelector } from "react-redux";
  
  export function ToDoList() {
    const stateTodo = useSelector((state) => state.Todo);
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
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
      const addTask = [...tasks, newTask];
      console.log(newTask);
      // const updatedTasks = [...tasks, newTask];
      setTasks(addTask);
      setNewTask({
        taskTitle: "",
        taskDescription: "",
        isPriority: false,
        isDone: false,
        taskStat: "",
      });
      setOpen(false);
    };
  
    const handleDone = (index) => {
      const editedTasks = [...tasks];
      const editedCTasks = [...completedTasks];
      const i = editedTasks.indexOf(index);
      let storeTask = editedTasks[i];
      storeTask.isDone = true;
      editedCTasks.push(storeTask);
      editedTasks.splice(i, 1);
      setTasks(editedTasks);
      setCompletedTasks(editedCTasks);
    };
  
    const handleDeleteTask = (index) => {
      const editedTasks = [...tasks];
      const i = editedTasks.indexOf(index);
      editedTasks.splice(i, 1);
      setTasks(editedTasks);
    };
  
    const handleDeleteCompletedTask = (index) => {
      const editedCTasks = [...completedTasks];
      const i = editedCTasks.indexOf(index);
      editedCTasks.splice(i, 1);
      setCompletedTasks(editedCTasks);
      console.log(index);
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
              minHeight:"93vh",
              //width: "9%",
              //paddingTop: 4,
              //marginLeft: "27%",
              //marginTop: 20,
              bgcolor: "#FFF0DB",
              //borderRadius: 10,
            }}
          >
            <Typography style={centerStyle} variant="h2" sx={{padding : 5}}>
              To-Do List
            </Typography>
  
            <TabContext value={`${tabValue}`}>
              <Box>
                <TabList
                  disableripple
                  onChange={handleTabChange}
                  centered
                  sx={{
                    display: "flex",
                    "& button": {
                      borderRadius: 2,
                      padding: 2,
                    },
  
                    // "& button:hover": { bgcolor: "#ffdba8" },
  
                    "& .MuiTabs-indicator": {
                      bgcolor: "#ab713d",
                    },
                  }}
                >
                  <Tab
                    disableRipple
                    sx={{
                      fontFamily: "outfit",
                      flexGrow: 1,
                      fontWeight: "bold",
                      fontSize: 20,
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
                    disableripple
                    sx={{
                      fontFamily: "outfit",
                      flexGrow: 1,
                      fontWeight: "bold",
                      fontSize: 22,
                    }}
                    label="Completed"
                    value="1"
                    icon={<TaskAlt />}
                    iconPosition="start"
                  />
                </TabList>
                <Divider />
              </Box>
  
              <TabPanel value="0">
                <div style={centerStyle}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Add />}
                    onClick={() => setOpen(true)}
                    sx={{
                      fontFamily: "Outfit",
                      marginBottom: 2,
                      fontWeight: "bold",
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
  
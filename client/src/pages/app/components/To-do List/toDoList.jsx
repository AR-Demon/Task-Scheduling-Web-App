import {
  Modal,
  Button,
  Typography,
  TextField,
  Paper,
  Box,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import React, { useState } from "react";
import { Add, Edit, Delete } from "@mui/icons-material";
import { centerStyle, modalStyle, circleButtons } from "./toDoListStyles";

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editOpen, setEditOpen] = useState(false);

  const handleNewTaskChange = (event) => {
    console.log(event);
    setNewTask(event.target.value);
  };
  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
    setOpen(false);
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
    setEditTask("");
    setEditIndex(-1);
    setEditOpen(false);
  };

  const handleEditClick = (index) => {
    setEditTask(tasks[index]);
    setEditIndex(index);
    setEditOpen(true);
  };

  return (
    <Grid
      container
      sx={{
        marginTop: 8,
        marginLeft: 50,
      }}
    >
      <Paper
        sx={{
          height: "100%",
          width: "50%",
          padding: 5,
          margin: 5,
          bgcolor: "#FFF0DB",
        }}
      >
        <div style={centerStyle}>
          <h1>To-Do List</h1>

          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => setOpen(true)}
          >
            Add Task
          </Button>
          <div>
            {tasks.map((task, index) => (
              <AppBar
                key={index}
                position="static"
                style={{
                  backgroundColor: "#ffdba8",
                  color: "black",
                  marginTop: 10,
                  width: 500,
                  borderRadius: 5,
                }}
              >
                <Toolbar>
                  <div
                    style={{
                      flexGrow: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    {index + 1}: {task}
                  </div>
                  <div>
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
                  </div>
                </Toolbar>
              </AppBar>
            ))}
          </div>

          <Modal open={open} onClose={() => setOpen(false)} style={centerStyle}>
            <div style={modalStyle}>
              <h2>Add New Task</h2>
              <TextField
                autoFocus="true"
                label="Task"
                value={newTask}
                onChange={handleNewTaskChange}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddTask}
              >
                Add
              </Button>
            </div>
          </Modal>
          <Modal
            open={editOpen}
            onClose={() => setEditOpen(false)}
            style={centerStyle}
          >
            <div style={modalStyle}>
              <h2>Edit Task</h2>
              <TextField
                autoFocus="true"
                label="Task"
                value={editTask}
                onChange={handleEditTaskChange}
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditTask}
              >
                Save
              </Button>
            </div>
          </Modal>
        </div>
      </Paper>
    </Grid>
  );
}

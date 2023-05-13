import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Checkbox,
  Stack,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Divider,
  Avatar,
  Box,
  ThemeProvider,
} from "@mui/material";
import {
  Edit,
  Delete,
  TaskAlt,
  Brightness1Outlined,
} from "@mui/icons-material";
import { centerStyle, modalStyle, circleButtons } from "../theme/TodoTheme";
import { StatIcon } from "./statIcon";

function CheckDescription(index) {
  if (!(index.taskDescription.length === 0))
    return (
      <Paper
        elevation={0}
        sx={{
          bgcolor: "secondary.medium",
          padding: 2,
          marginRight: 2,
          display: "flex",
          alignContent: "center",
          minHeight: 30,
        }}
      >
        {index.taskDescription}
      </Paper>
    );
}

function CheckButton(index) {
  if (index.isDone === false) {
    return <Brightness1Outlined />;
  } else if (index.isDone === true) {
    return <TaskAlt />;
  }
}

function TaskTitle(index) {
  if (index.isDone === false) {
    return (
      <Typography
        variant="h5"
        sx={{
          padding: 3,
          paddingRight: 1,
          flexGrow: 1,
          wordBreak: "break-word",
          maxHeight: 50,
        }}
      >
        {index.taskTitle}
      </Typography>
    );
  } else if (index.isDone === true) {
    return (
      <Typography
        variant="h5"
        sx={{
          textDecoration: "line-through",
          opacity: "50%",
          padding: 3,
          paddingRight: 1,
          flexGrow: 1,
          wordBreak: "break-word",
          maxHeight: 50,
        }}
      >
        {index.taskTitle}
      </Typography>
    );
  }
}

function PriorityBorder(index) {
  if (index.isPriority == true) {
    return "primary.main";
  } else {
    return "secondary.medium";
  }
}

export function TaskCard(props) {
  return (
    <Grid container sx={{ display: "flex", flexWrap: "wrap" }}>
      {props.tasks.map((index, i) => (
        <Box>
          <Card
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "secondary.card",
              border: "solid 5px",
              borderColor: PriorityBorder(index),
              color: "black",
              minHeight: 170,
              width: 370,
              margin: 2,
              borderRadius: 3,
            }}
          >
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              {TaskTitle(index)}
              <Divider
                variant="middle"
                sx={{ borderRightWidth: 2, borderRadius: 30 }}
                orientation="vertical"
                flexItem
              />
              <StatIcon stat={index.taskStat} />
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
                    fontSize: 20,
                    wordBreak: "break-word",
                    textAlign: "left",
                    marginLeft: 2,
                  }}
                >
                  {CheckDescription(index)}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <CardActions sx={{ width: 300 }}>
                <IconButton
                  variant="contained"
                  color="error"
                  onClick={() => props.handleDeleteTask(index)}
                >
                  <Delete sx={{ color: "primary.main" }} />
                </IconButton>
                <IconButton
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleEditClick(index);
                  }}
                >
                  <Edit sx={{ color: "primary.dark" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    props.handleDone(index);
                  }}
                  disabled={index.isDone}
                >
                  {CheckButton(index)}
                </IconButton>
              </CardActions>
            </Grid>
          </Card>
        </Box>
      ))}
    </Grid>
  );
}

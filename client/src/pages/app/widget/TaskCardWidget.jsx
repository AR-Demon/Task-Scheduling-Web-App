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
} from "@mui/material";
import {
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
import { centerStyle, modalStyle, circleButtons } from "../theme/TodoTheme";

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

function CheckDescription(index) {
  if (!(index.taskDescription.length === 0))
    return (
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "#ffe6c2",
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
  console.log(index);
  if (index.isDone == false) {
    return <Brightness1Outlined />;
  } else if (index.isDone == true) {
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
              backgroundColor: "#ffdba8",
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

import { Avatar } from "@mui/material";

import {
  FitnessCenter,
  Psychology,
  ColorLens,
  AutoAwesome,
  Favorite,
} from "@mui/icons-material";

export function StatIcon(props) {
  switch (props.stat) {
    case "Strength":
      return (
        <Avatar
          sx={{
            bgcolor: "#1B1212",
            color: "#A00E1C",
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
            // bgcolor: "#5296A5",
            bgcolor: "#A00E1C",
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
            color: "#623F7B",
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
            color: "#EE85B5",
            margin: 2,
            padding: 1,
            alignSelf: "center",
            bgcolor: "#1B1212",
          }}
        >
          <AutoAwesome />
        </Avatar>
      );

    case "Health":
      return (
        <Avatar
          sx={{
            color: "#3CAB34",
            bgcolor: "#1B1212",
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

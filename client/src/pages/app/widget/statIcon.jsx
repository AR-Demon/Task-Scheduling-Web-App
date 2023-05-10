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
            bgcolor: "icon.background",
            color: "#f5c658",
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
            bgcolor: "icon.background",
            color: "#0d78ba",
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
            color: "#e37917",
            bgcolor: "icon.background",
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
            bgcolor: "icon.background",
            color: "#b458f5",
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
            bgcolor: "icon.background",
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

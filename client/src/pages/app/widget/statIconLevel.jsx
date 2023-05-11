import { Avatar } from "@mui/material";

import {
  FitnessCenter,
  Psychology,
  ColorLens,
  AutoAwesome,
  Favorite,
} from "@mui/icons-material";

export function StatIconLevel(props) {
  switch (props.stat) {
    case "Strength":
      return (
        <Avatar
          sx={{
            bgcolor: "icon.background",
            color: "#f5c658",
            padding: 1.5,
            alignSelf: "center",
            boxShadow: " 0 0 2px 4px #ffffff",
          }}
        >
          <FitnessCenter sx={{ fontSize: 30 }} />
        </Avatar>
      );

    case "Intelligence":
      return (
        <Avatar
          sx={{
            // bgcolor: "#5296A5",
            bgcolor: "icon.background",
            color: "#0d78ba",
            padding: 1.5,
            alignSelf: "center",
            boxShadow: " 0 0 2px 4px #ffffff",
          }}
        >
          <Psychology sx={{ fontSize: 30 }} />
        </Avatar>
      );
    case "Creativity":
      return (
        <Avatar
          sx={{
            color: "#e37917",
            bgcolor: "icon.background",
            padding: 1.5,
            alignSelf: "center",
            boxShadow: " 0 0 2px 4px #ffffff",
          }}
        >
          <ColorLens sx={{ fontSize: 30 }} />
        </Avatar>
      );

    case "Charisma":
      return (
        <Avatar
          sx={{
            bgcolor: "icon.background",
            color: "#b458f5",
            padding: 1.5,
            alignSelf: "center",
            bgcolor: "#1B1212",
            boxShadow: " 0 0 2px 4px #ffffff",
          }}
        >
          <AutoAwesome sx={{ fontSize: 30 }} />
        </Avatar>
      );

    case "Health":
      return (
        <Avatar
          sx={{
            color: "#3CAB34",
            bgcolor: "icon.background",
            padding: 1.5,
            alignSelf: "center",
            boxShadow: " 0 0 2px 4px #ffffff",
          }}
        >
          <Favorite sx={{ fontSize: 30 }} />
        </Avatar>
      );
    default:
      break;
  }
}

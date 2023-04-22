import { Box } from "@mui/material";
import tracker from "./tracker.png";

export function TrackerLogo() {
  return (
    <Box
      component="img"
      sx={{ height: 35, padding: 2 }}
      alt="Logo"
      src={tracker}
    />
  );
}

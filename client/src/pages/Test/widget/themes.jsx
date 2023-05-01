import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ba265a",
    },
    secondary: {
      main: "#fff2c8",
    },
  },
  typography: {
    fontFamily: "Lusitana, Outfit",
    fontWeightRegular: "700",
    fontSize: 16,
  },
});

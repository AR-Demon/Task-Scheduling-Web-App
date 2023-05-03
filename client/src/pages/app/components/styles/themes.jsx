import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#F2AF42",
    },
    secondary: {
      main: "#964E0D",
      light: "#ab713d",
    },
  },
  typography: {
    fontFamily: "Lusitana, Outfit",
    fontWeightRegular: "700",
    fontSize: 16,
  },
});

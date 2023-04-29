import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#EDB230",
    },
    secondary: {
      main: "#721817",
    },
  },
  typography: {
    fontFamily: "Lusitana, Outfit",
    fontWeightRegular: "700",
    fontSize: "16",
  },
});

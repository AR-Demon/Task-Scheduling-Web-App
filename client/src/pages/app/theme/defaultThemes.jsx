import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ba265a", //main red
      dark: "#81173c", //darker red
    },
    secondary: {
      main: "#FFF0DB", //to do list paper color
      medium: "#ffecd1", //card description color
      dark: "#ffdba8", //card color
    },
    background: {
      main: "#1e222b", //main background
      light: "#292d3e", //profile background
    },
  },
  typography: {
    fontFamily: "Lusitana, Outfit",
    fontWeightRegular: "700",
    fontSize: 16,
  },
});

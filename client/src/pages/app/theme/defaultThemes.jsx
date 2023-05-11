import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#8B0000", //main red
      medium: "#660000", //navbar red
      dark: "#81173c", //darker red
    },
    secondary: {
      main: "#383838", //to do list paper color
      medium: "#D3D3D3", //card description color
      dark: "#E8E8E8", //card color
    },
    background: {
      main: "#000000", //main background
      light: "#FFFFFF", //profile background
    },

    text: {
      main: "white",
    },
    icon: {
      background: "#1B1212",
    },
  },
  typography: {
    fontFamily: "Lusitana, Outfit",

    fontWeightRegular: "700",
    fontSize: 16,
  },
});

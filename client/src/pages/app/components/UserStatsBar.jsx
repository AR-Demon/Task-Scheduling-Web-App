import { ThemeProvider } from "@emotion/react";
import { Drawer, Box, Slide, createTheme } from "@mui/material";
import { useRef } from "react";
import { defaultTheme } from "../theme/defaultThemes";

function UserStatsBar(props) {
  const containerReference = useRef(null);
  const theme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          position: "fixed",
          height: "100%",
          color: "white",
          backgroundColor: "background.light",
          width: "20vw",
        }}
      >
        hello
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sed?
        Nesciunt eligendi doloremque iusto aliquid dolorem cumque similique
        facilis accusamus! Nostrum nisi iste quasi, ut necessitatibus nulla
        facilis cum eaque.
        <br />
      </Box>
    </ThemeProvider>
  );
}

export default UserStatsBar;

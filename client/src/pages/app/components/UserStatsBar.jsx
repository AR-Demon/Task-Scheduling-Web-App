import { ThemeProvider } from "@emotion/react";
import { Drawer, Box, Slide, createTheme } from "@mui/material";
import { useRef } from "react";

function UserStatsBar(props){
  const containerReference = useRef(null);
  const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <Box 
        sx = {{
        position:"fixed",
        height:"100%",
        color: "white",
        backgroundColor:"#393e56",
        width:"20vw",
        }}
        >
          hello
          <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem nostrum facere tempora quae hic consectetur. Laudantium tenetur cumque vitae impedit autem. Fugit fuga animi aut iure veritatis eligendi, beatae officiis!
          <br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sed? Nesciunt eligendi doloremque iusto aliquid dolorem cumque similique facilis accusamus! Nostrum nisi iste quasi, ut necessitatibus nulla facilis cum eaque.
          <br/>
      </Box>
    </ThemeProvider>
    );
}

export default UserStatsBar;
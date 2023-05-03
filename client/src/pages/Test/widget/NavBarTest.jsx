import {
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Grid,
    Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import { useDispatch } from "react-redux";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "./themes";
import { TrackerLogo } from "./trackerLogo";
import * as React from "react";
import { setUserLogout } from "../../../state/userReducer";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
  
export function NavBar( props ) {
    const theme = useTheme();
  
    //webLoader module to load custom fonts from google
    useEffect(() => {
      WebFont.load({
        google: {
          families: ["Lusitana", "Outfit"],
        },
      });
    },[]);
  
    //Dispatch function for Logout functionality
    const dispatch = useDispatch();

    //for navigation purposes
    const navigate = useNavigate();
  
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="static" sx = {{zIndex: 1}}>
      <Toolbar sx={{ height: 30 }}>
        <Grid
        container
        direction= "row"
        justifyContent="space-between"
        alignItems="center"
        >
          <IconButton
            size="Large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 0 }}
            onClick={props.handelMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <IconButton onClick={() => {navigate("/test/app")}} edge="start" sx ={{borderRadius: 1,}}>
              <TrackerLogo/>
              <div
                style={{
                    fontFamily: "Lusitana",
                    fontWeight: "1000",
                    fontSize: 20,
                }}
                >
                TRACKER
                </div>
            </IconButton>
          </Box>
          <Box>
            <Button 
            variant="text"
            onClick={() => {/*dispatch(setUserLogout());dispatch(setUserLogout)*/}}
            sx={{
              color: "black",
            }}>
              <div
              style={{
                fontFamily:"Outfit",
                fontWeight: "bold",
                fontSize: 18,
              }}>
                Logout
              </div>
            </Button>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
      </ThemeProvider>
    );
}

  
  
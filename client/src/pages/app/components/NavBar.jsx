import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../theme/defaultThemes";
import { TrackerLogo } from "../widget/trackerLogowidget";
import * as React from "react";
import { setUserLogout } from "../../../state/userReducer";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export function NavBar(props) {
  const theme = useTheme();

  //webLoader module to load custom fonts from google
  /*useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lusitana", "Outfit"],
      },
    });
  }, []);*/

  //Dispatch function for Logout functionality
  const dispatch = useDispatch();

  //for navigation purposes
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="fixed" sx={{ zIndex: 1 }}>
        <Toolbar sx={{ height: 30, bgcolor: "primary.medium" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              size="Large"
              edge="start"
              aria-label="open drawer"
              sx={{ mr: 0 }}
              onClick={() => {
                props.handelMenuClick();
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <IconButton
                disableRipple
                onClick={() => {
                  navigate("/app");
                }}
                edge="start"
                sx={{ borderRadius: 1 }}
              >
                <TrackerLogo />

                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    opacity: "70%",
                    color: "black",
                    fontSize: 30,
                  }}
                >
                  TRACKER
                </Typography>
              </IconButton>
            </Box>
            <Box>
              <Button
                variant="text"
                onClick={() => {
                  dispatch(setUserLogout());
                  dispatch(setUserLogout());
                }}
                sx={{
                  color: "black",
                  ":hover": { color: "white", bgcolor: "" },
                }}
              >
                <div
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
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

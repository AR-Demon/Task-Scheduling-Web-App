import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Grid,
  Typography,
  IconButton,
  Menu,
  Drawer,
  List,
} from "@mui/material";
import { setLogout } from "../../../../state";
import { useDispatch } from "react-redux";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { navTheme } from "../styles/themes";
import { TrackerLogo } from "./trackerLogo";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const drawerWidth = 300;

const AppBars = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export function Navbar() {
  const theme = useTheme();

  //Webloader module to load custom fonts from google
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lusitana", "Outfit"],
      },
    });
  }, []);

  //Dispatch function for Logout functionality
  const dispatch = useDispatch();

  //State function for controlling side drawer
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={navTheme}>
      <AppBars position="fixed" open={open}>
        <Toolbar sx={{ height: 80 }}>
          <IconButton
            disableRipple
            onClick={handleDrawerOpen}
            sx={{
              borderRadius: 6,
              padding: 0,
              paddingRight: 2,
              ":hover": { bgcolor: "secondary.main", color: "white" },
            }}
          >
            <TrackerLogo />
            {
              <div
                style={{
                  fontFamily: "Lusitana",
                  fontWeight: "1000",
                  fontSize: 30,
                }}
              >
                TRACKER
              </div>
            }
          </IconButton>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                bgcolor: "primary.main",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader sx={{ height: 80 }}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <Divider variant="middle" />
          </Drawer>

          <Grid container direction={"row-reverse"}>
            <Button
              variant="text"
              sx={{
                color: "black",
                margin: 2,
                ":hover": { bgcolor: "secondary.main", color: "white" },
              }}
              onClick={() => dispatch(setLogout())}
            >
              <div
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Log Out
              </div>
            </Button>
          </Grid>
          <Menu id="Dashboard"></Menu>
        </Toolbar>
      </AppBars>
    </ThemeProvider>
  );
}

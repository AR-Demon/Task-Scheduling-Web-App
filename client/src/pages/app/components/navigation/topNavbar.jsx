import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import WebFont from "webfontloader";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme } from "../styles/themes";
import { TrackerLogo } from "./trackerLogo";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ToDoList } from "../To-do List/toDoList";
import { setUserLogout } from "../../../../state/userReducer";
import { useTheme } from "@emotion/react";
const drawerWidth = 400;

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

  //webLoader module to load custom fonts from google
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lusitana", "Outfit"],
      },
    });
  });

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
    <ThemeProvider theme={defaultTheme}>
      <AppBars position="fixed" open={open}>
        <Toolbar sx={{ height: 80 }}>
          <IconButton
            disableRipple
            onClick={handleDrawerOpen}
            edge="start"
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

          <Stack flexDirection={"row-reverse"} flexGrow={1}>
            <Button
              variant="text"
              sx={{
                color: "black",
                margin: 2,
                ":hover": { bgcolor: "secondary.main", color: "white" },
              }}
              onClick={() => {dispatch(setUserLogout());dispatch(setUserLogout)}}
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
          </Stack>
        </Toolbar>
      </AppBars>
    </ThemeProvider>
  );
}

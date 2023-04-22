import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { setLogout } from "../../../../state";
import { useDispatch } from "react-redux";
import tracker from "./tracker.png";
import WebFont from "webfontloader";
import { useEffect } from "react";

export function Navbar() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lusitana", "Outfit"],
      },
    });
  }, []);
  const dispatch = useDispatch();
  return (
    <AppBar position="fixed" sx={{ bgcolor: "orange" }}>
      <Toolbar sx={{ height: 60 }}>
        <IconButton disableRipple>
          <Box
            component="img"
            sx={{ height: 35, padding: 2 }}
            alt="Logo"
            src={tracker}
          />
          {
            <div
              style={{
                fontFamily: "Lusitana",
                fontWeight: "1000",
                fontSize: 36,
              }}
            >
              TRACKER
            </div>
          }
        </IconButton>

        <Grid container direction={"row-reverse"}>
          <Button
            variant="outlined"
            sx={{ bgcolor: "white", color: "black" }}
            onClick={() => dispatch(setLogout())}
          >
            <div style={{ fontFamily: "Outfit", fontWeight: "bold" }}>
              Log Out
            </div>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

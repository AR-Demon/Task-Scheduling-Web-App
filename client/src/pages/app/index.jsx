import { Button } from "@mui/material";
import { setLogout } from "../../state";
import { useDispatch } from "react-redux";

const MainApp = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(setLogout())}>Log Out</Button>
    </div>
  );
};

export default MainApp;

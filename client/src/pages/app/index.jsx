import { Button } from "@mui/material";
import { setLogout } from "../../state";
import { useDispatch } from "react-redux";

const MainApp = () => {
    const dispatch = useDispatch();
    return(
    <div>
        Main App Goes Here.
        <Button onClick={() => dispatch(setLogout())}>Log Out</Button>
    </div>
    );
};

export default MainApp;
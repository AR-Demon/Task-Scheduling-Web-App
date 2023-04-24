import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/auth/login");
  };
  return (
    <div>
      Home Page
      <Button onClick={navigateLogin}>Login</Button>
    </div>
  );
};

export default HomePage;

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      Niharika's Home Page
      <Link to="/auth/login">Log In</Link>
    </div>
  );
};

export default HomePage;

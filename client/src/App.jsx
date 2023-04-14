import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage/index.jsx";
import MainApp from "./scenes/app";
import LoginPage from "./scenes/loginPage";
import RegisterPage from "./scenes/registerPage";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/auth/login" element = {<LoginPage/>}/>
          <Route path="/auth/register" element = {<RegisterPage/>}/>
          <Route path = "/app" element = {isAuth? <MainApp/> : <Navigate to="/" />}/>
          <Route path = "/homepage" element = {<HomePage/>}/>
          <Route path = "/" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index.jsx";
import MainApp from "./pages/app";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Test from "./pages/Test"
import { useSelector } from "react-redux";
import { useLayoutEffect, useEffect } from "react";
import WebFont from "webfontloader";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "black";
  });
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lusitana", "Outfit"],
      },
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/auth/login" element = {<LoginPage/>}/>
          <Route path="/auth/register" element = {<RegisterPage/>}/>
          <Route path = "/app" element = {isAuth? <MainApp/> : <Navigate to="/auth/login" />}/>
          <Route path = "/home" element = {<HomePage/>}/>
          <Route path = "/" element = {isAuth? <Navigate to="/app" /> : <Navigate to="/home" />}/>
          <Route path = "/test/app" element = {<Test/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index.jsx";
import MainApp from "./pages/app";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import { useSelector } from "react-redux";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path = "/auth/login" element = {<LoginPage/>}/>
          <Route path="/auth/register" element = {<RegisterPage/>}/>
          <Route path = "/app" element = {isAuth? <MainApp/> : <Navigate to="/auth/login" />}/>
          <Route path = "/home" element = {<HomePage/>}/>
          <Route path = "/" element = {isAuth? <Navigate to="/app" /> : <Navigate to="/home" />}/>
=======
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route
            path="/app"
            element={isAuth ? <MainApp /> : <Navigate to="/" />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/"
            element={isAuth ? <Navigate to="/app" /> : <Navigate to="/home" />}
          />
>>>>>>> 0c647c9f6083d3c7b0371f04785a30da59641052
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

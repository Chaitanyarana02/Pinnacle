import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProfessionalsPage from "./components/static/ProfessionalsPage/ProfessionalsPageComponent";
import HomeOwners from "./components/static/homeOwners/homeOwners";
import Hompage from "./components/static/homePage/Hompage";
import Login from "./components/Login/loginComponent";
import { useState } from "react";
import AddEditComponent from "./components/add-edit-project/add-edit.component";
import axios from "axios";
import ProjectDashboard from "./components/add-edit-project/projectDashboard.component";
import Payment from "./components/add-edit-project/step4/payment.component";
import SignUp from "./components/Login/signUp.component";
import { CookiesProvider, useCookies } from "react-cookie";
import StaticPageComponent from "./components/static/static-page.component";

function App() {
  const navigate = useNavigate();
  const [cookie] = useCookies(["token"]);
  axios.defaults.headers.common["authtoken"] = cookie["token"];
  axios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response.status === 401) {
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  // worker.start().then(() => setRender(true));
  const routes = (
    <>
    
      <Routes>
        <Route path="/" element={<StaticPageComponent />}>
          <Route path="/" element={<Hompage />}></Route>
          <Route path="/home-owners" element={<HomeOwners />}></Route>
          <Route path="/professionals" element={<ProfessionalsPage />}></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<ProjectDashboard />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/add" element={<AddEditComponent />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/edit/:id" element={<AddEditComponent />}></Route>
      </Routes>
    </>
  );
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        {routes}
      </CookiesProvider>
      {/* {render ? routes : null} */}
    </>
  );
}

export default App;

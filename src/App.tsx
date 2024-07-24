import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProfessionalsPage from "./components/ProfessionalsPage/ProfessionalsPageComponent";
import HomeOwners from "./components/homeOwners/homeOwners";
import Hompage from "./components/homePage/Hompage";
import Login from "./components/Login/loginComponent";
// import { useState } from 'react'
// import worker from './mock/mock.api'
// import AddEditProject from './components/projects/add-edit/addProject.component'
// import Step1Info from './components/projects/add-edit/step1Info.component'
// import Step1 from './components/projects/add-edit/step1.component'
// import Step3 from './components/projects/add-edit/step3.component'

import { useState } from "react";
import worker from "./mock/mock.api";
import AddEditComponent from "./components/add-edit-project/add-edit.component";
import axios from "axios";
import ProjectDashboard from "./components/add-edit-project/projectDashboard.component";
import Payment from "./components/add-edit-project/step4/payment.component";
import Header from "./components/common/header/header";
import FrameComponent from "./components/common/Frames/FrameComponent";
import SignUp from "./components/Login/signUp.component";
import { CookiesProvider, useCookies } from "react-cookie";
// import HomeOwners from './components/homeOwners/homeOwners'
// import Hompage from './components/homePage/Hompage'

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
  const [render, setRender] = useState(false);
  // worker.start().then(() => setRender(true));
  const paths: string[] = [
    "/home-owners",
    "/professionals",
    "/login",
    "/dashboard",
    "/add",
    "/admin",
    "/signUp",
    "/",
  ];
  const routes = (
    <>
      {paths.includes(window.location.pathname) ? <Header></Header> : null}

      <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/home-owners" element={<HomeOwners />}></Route>
        <Route path="/professionals" element={<ProfessionalsPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<ProjectDashboard />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/add" element={<AddEditComponent />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/edit/:id" element={<AddEditComponent />}></Route>
      </Routes>
      {!paths.includes(window.location.pathname) ? <FrameComponent /> : null}
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

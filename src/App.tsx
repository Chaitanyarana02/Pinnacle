import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProfessionalsPage from "./components/static/ProfessionalsPage/ProfessionalsPageComponent";
import HomeOwners from "./components/static/homeOwners/homeOwners";
import Hompage from "./components/static/homePage/Hompage";
import Login from "./components/Login/loginComponent";
import { useEffect, useState } from "react";
import AddEditComponent from "./components/add-edit-project/add-edit.component";
import axios from "axios";
import ProjectDashboard from "./components/add-edit-project/projectDashboard.component";
import Payment from "./components/add-edit-project/step4/payment.component";
import SignUp from "./components/Login/signUp.component";
import { CookiesProvider, useCookies } from "react-cookie";
import StaticPageComponent from "./components/static/static-page.component";
import { useAppDispatch } from "./store/store.utils";
import { setUserData } from "./store/feature/user-data.slice";
import { UserList } from "./interfaces/users.interface";

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [cookie] = useCookies(["userData"]);

  try {
    axios.defaults.headers.common["authtoken"] = cookie["userData"]?.accessToken;
    
  } catch (e) {
    axios.defaults.headers.common["authtoken"] = "";
  }
  useEffect(() => {

    if(!axios.defaults.headers.common["authtoken"]) {
      dispatch(setUserData({} as UserList));
      navigate("/login");
    }else {
      dispatch(setUserData(cookie["userData"] as UserList))
    }
  }, [])

  axios.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response.status === 401) {
      dispatch(setUserData({} as UserList));
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

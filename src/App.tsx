import "./App.css";
import Login from "./components/Login/loginComponent";
import { useEffect } from "react";
import AddEditComponent from "./components/add-edit-project/add-edit.component";
import axios from "axios";
import ProjectDashboard from "./components/add-edit-project/projectDashboard.component";
import SignUp from "./components/Login/signUp.component";
import { CookiesProvider, useCookies } from "react-cookie";
import { useAppDispatch } from "./store/store.utils";
import { setUserData } from "./store/feature/user-data.slice";
import { UserList } from "./interfaces/users.interface";
import { Route, Routes, useNavigate } from "react-router-dom";

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
      navigate("/dashboard");
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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<ProjectDashboard />}></Route>
        <Route path="/add" element={<AddEditComponent />}></Route>
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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./App.css";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfessionalsPage from "./components/static/ProfessionalsPage/ProfessionalsPageComponent.tsx";
import HomeOwners from "./components/static/homeOwners/homeOwners.tsx";
import Hompage from "./components/static/homePage/Hompage.tsx";
import StaticPageComponent from "./components/static/static-page.component.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<StaticPageComponent />}>
            <Route path="/" element={<Hompage />}></Route>
            <Route path="/home-owners" element={<HomeOwners />}></Route>
            <Route
              path="/professionals"
              element={<ProfessionalsPage />}
            ></Route>
          </Route>
          <Route path="*" element={<App />}></Route>

        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProfessionalsPage from './components/ProfessionalsPage/ProfessionalsPageComponent'
import FrameComponent from './components/common/Frames/FrameComponent'
import Header from './components/common/header/header'
import HomeOwners from './components/homeOwners/homeOwners'
import Hompage from './components/homePage/Hompage'
import Login from './components/Login/loginComponent'
import ProjectDashboard from './components/projects/projectDashboard.component'
import { useState } from 'react'
import worker from './mock/mock.api'
// import HomeOwners from './components/homeOwners/homeOwners'
// import Hompage from './components/homePage/Hompage'

function App() {
  const [render, setRender] = useState(false)
  worker.start().then(() => setRender(true));
  return (
    <>
      {
        render ?
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Hompage />}></Route>
              <Route path="/home-owners" element={<HomeOwners />}></Route>
              <Route path="/professionals" element={<ProfessionalsPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/dashboard" element={<ProjectDashboard />}></Route>
            </Routes>
            <FrameComponent />
          </BrowserRouter> :
          <></>
      }

    </>

  )
}

export default App

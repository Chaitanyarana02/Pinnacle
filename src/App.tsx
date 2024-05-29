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
import AddEditProject from './components/projects/add-edit/addProject.component'
import Payment from './components/projects/add-edit/payment.component'
import Step1Info from './components/projects/add-edit/step1Info.component'
import Step1 from './components/projects/add-edit/step1.component'
import Step2 from './components/projects/add-edit/steps/step2'
import Step3 from './components/projects/add-edit/step3.component'
import InfoStep from './components/projects/add-edit/steps/infoStep'
import Step3new from './components/projects/add-edit/steps/step3new'
import Step4 from './components/projects/add-edit/steps/step4'
import Step5 from './components/projects/add-edit/steps/step5'
import Step1new from './components/projects/add-edit/steps/step1New'
// import HomeOwners from './components/homeOwners/homeOwners'
// import Hompage from './components/homePage/Hompage'

function App() {
  const [render, setRender] = useState(false)
  worker.start().then(() => setRender(true));
  const paths: string[] = ['/home-owners' ,'/professionals', '/login', '/dashboard', '/']

  return (
    <>
      {
      
        render ?
          <BrowserRouter>
          {paths.includes(window.location.pathname) ?  <Header></Header> : null}
           
            <Routes>
              <Route path="/" element={<Hompage />}></Route>
              <Route path="/home-owners" element={<HomeOwners />}></Route>
              <Route path="/professionals" element={<ProfessionalsPage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/dashboard" element={<ProjectDashboard />}></Route>
              <Route path="/step1Info" element={<InfoStep />}></Route>
              <Route path="/step1" element={<Step1new />}></Route>
              <Route path="/step2" element={<Step2 />}></Route>
              <Route path="/step3" element={<Step3new />}></Route>
              <Route path="/step4" element={<Step4 />}></Route>
              <Route path="/step5" element={<Step5 />}></Route>
              <Route path="/payment" element={<Payment />}></Route>
            </Routes>
          {!paths.includes(window.location.pathname) ? <FrameComponent /> : null}

            
          </BrowserRouter> :
          <></>
      }

    </>

  )
}

export default App

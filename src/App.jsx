//import React from "react"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Landingpage from "./components/Landingpage"
import Userdashboard from "./pages/Userdashboard"
import About from './pages/About'


function App() {


  return (
    <>
      <Routes>
         <Route path='/' element={<Landingpage/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/userdashboard' element={<Userdashboard/>}/>
      </Routes>
    </>
  )
}

export default App

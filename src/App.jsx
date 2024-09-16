//import React from "react"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Landingpage from "./components/Landingpage"
import Pagenotfound from "./pages/Pagenotfound"
import Auth from "./pages/Auth"
import Userdashboard from "./pages/Userdashboard"
import Admindashboard from "./pages/Admindashboard"
import About from './pages/About'
import Complaintdiagram from './pages/Complaintdiagram'

function App() {


  return (
    <>
      <Routes>
         <Route path='/' element={<Landingpage/>}/>
         <Route path='/login' element={<Auth/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/userdashboard' element={<Userdashboard/>}/>
         <Route path='/admindashboard' element={<Admindashboard/>}/>
         <Route path='/chart' element={<Complaintdiagram/>}/>
         <Route path='*' elements={<Pagenotfound/>}/>
      </Routes>
    </>
  )
}

export default App

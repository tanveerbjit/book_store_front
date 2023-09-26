import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import './book.css'
import HomePage from './components/homePage'
import RegistrationPage from "./components/registrationPage";
import LoginPage from "./components/loginPage"


function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App

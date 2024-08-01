//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light"); // Defult mode is light
  const [alert, setAlert] = useState(null);

  document.title = "Textutils App"

  const toggleMode = ()=> {
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  }

  const showAlert = (message, type)=> {
    setAlert({
        message : message,
        type : type
      });

      setTimeout(() => {
        setAlert(null);          
      }, 2000);
  }

  return (
   <>
  <Router>
  <Navbar navTitle = "TextUtils" mode = {mode} toggleMode = {toggleMode} key={new Date()}/>
  <Alert alert={alert}/>
  
  <div className="container my-3">
   {/* <TextForm Heading = "Enter the Text here" mode = {mode} showAlert = {showAlert}/>
    <About/>*/}
      <Routes>
          <Route path="/about" element={<About mode = {mode}/>} />          
          <Route path="/" element = {
          <TextForm Heading = "Try TextUtils - word counter, character counter, remove extra spaces" mode = {mode} showAlert = {showAlert}/> 
          }
          />
        </Routes>
  </div>
  </Router>
   </>
  );
}

export default App;

// import logo from './logo.svg';
import "./App.css";
import "./Textform.css";
// import About from "./components/About";
// import Home from './components/Home';
// import Contact from './components/Contact';
// import Error from "./components/Error"

// // import Projest from './components/projest';
import Navbar from "./components/Navbar";
// // import Changetime from './components/changetime';
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "Light mode has been enabled";
      setInterval(() => {
        document.title = "Text Analyzer is Amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Text Analyzer Now";
      }, 1500);
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("dark mode has been enabled", "success");
      document.title = "Light mode has been enabled";
    }
  };
  return (
    <>
    
    
      <Navbar mode={mode} toggleMode={toggleMode} about = "About" />
      <Alert alert={alert} />
  <Textform
        showAlert={showAlert}
        heading="Enter Text to Analyzar below"
        mode={mode}
      />
     
     {/* <About /> */}
      {/* <Home /> */}

      {/* <Changetime />
      <Projest />
      <Navbar /> */}
      {/* <BrowserRouter>
 <Routes>
  <Route path='/' element = {<Home/>}>
  <Route  path='about' element = {<About/>}/>
  <Route  path='contact' element = {<Contact/>}/>
  <Route  path='*' element = {<Error/>}/>
</Route>
 </Routes>
</BrowserRouter> */}
    </>
  );
}

export default App;

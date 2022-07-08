// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, {useState} from 'react';
// import React from "react";
// import {
//   BrowserRouter,
//   // Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Navbar title="TextUtils2" aboutText="AboutTextUtils" /> */}
      {/* <Navbar  /> */}

    {/* <BrowserRouter> */}
      <Navbar title="TextUtils2" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* 
          /users --> Component 1
          /users/home --> Component 2
         */}
      {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}>
          
          </Route>
        </Routes> */}
      </div>
        {/* </BrowserRouter> */}

    </>
  );
}

export default App;

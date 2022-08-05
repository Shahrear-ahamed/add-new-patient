import React from 'react';
import './global.css';
import {Routes,Route} from "react-router-dom";
import  Home from "./Pages/Home.js"
import SecondPage from "./Pages/SecondPage";

function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondPage" element={<SecondPage />} />
        </Routes>
    </div>
  );
}

export default App;

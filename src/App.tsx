import React from 'react';
import './global.css';
import {Routes,Route} from "react-router-dom";
import  Home from "./Pages/Home.js"
import SecondPage from "./Pages/SecondPage";
import DataTablesLearn from "./Pages/DataTablesLearn";
import PatientAddWithConfig from "./Pages/PatientAddWithConfig";

function App() {
  return (
    <div className="wrapper">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondPage" element={<SecondPage />} />
            <Route path="/datatable" element={<DataTablesLearn />} />
            <Route path="/patientaddpage" element={<PatientAddWithConfig />}/>
        </Routes>
    </div>
  );
}

export default App;
